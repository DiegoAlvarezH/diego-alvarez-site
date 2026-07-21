import { readFileSync, writeFileSync, existsSync } from 'fs';
import glob from 'fast-glob';
import matter from 'gray-matter';

// Detecta posts nuevos comparando contra .published-posts.json y llama a la
// Netlify Function que los publica en dev.to y LinkedIn.
// Se usa es/ como fuente canónica — cada entrada tiene su par en en/ con el mismo slug.
//
// IMPORTANTE: .published-posts.json va COMMITEADO en el repo. El filesystem de
// Netlify es efímero: si el estado no viene del repo, cada deploy re-publicaría
// todos los posts. Tras publicar un post nuevo, actualiza y commitea el estado
// (o corre `npm run notify-posts` en local y commitea el resultado).

const STATE_FILE = '.published-posts.json';
const SITE_URL = process.env.URL ?? 'https://diegoalvarez.tech';
const FUNCTION_URL = `${SITE_URL}/.netlify/functions/publish-post`;

// dev.to solo acepta tags alfanuméricos en minúscula
const toDevtoTag = (tag: string) => tag.toLowerCase().replace(/[^a-z0-9]/g, '');

async function main() {
  const files = await glob('src/content/blog/es/*.mdx');
  const posts = files.map((f) => {
    const { data } = matter(readFileSync(f, 'utf-8'));
    const slug = f.replace('src/content/blog/es/', '').replace(/\.mdx?$/, '');
    return {
      slug,
      title: data.title as string,
      description: (data.description as string) ?? '',
      tag: (data.tag as string) ?? '',
    };
  });

  const published: string[] = existsSync(STATE_FILE)
    ? JSON.parse(readFileSync(STATE_FILE, 'utf-8'))
    : [];

  const newPosts = posts.filter((p) => !published.includes(p.slug));

  for (const post of newPosts) {
    const url = `${SITE_URL}/blog/${post.slug}`;
    console.log(`Publicando: ${post.slug}`);
    const res = await fetch(FUNCTION_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: post.title,
        description: post.description,
        url,
        tags: post.tag ? [toDevtoTag(post.tag)] : [],
        canonicalUrl: url,
      }),
    });
    if (!res.ok) {
      console.error(`Fallo publicando ${post.slug}: HTTP ${res.status}`);
      continue;
    }
    published.push(post.slug);
  }

  writeFileSync(STATE_FILE, JSON.stringify(published, null, 2));
  console.log(`Listo. ${newPosts.length} post(s) nuevos publicados.`);
}

main().catch((err) => {
  // No romper el deploy del sitio por un fallo de publicación externa
  console.error('notify-new-post falló:', err);
});
