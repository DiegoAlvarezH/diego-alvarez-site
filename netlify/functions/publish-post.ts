import type { Handler } from '@netlify/functions';

const DEVTO_API_KEY = process.env.DEVTO_API_KEY!;
const LINKEDIN_ACCESS_TOKEN = process.env.LINKEDIN_ACCESS_TOKEN!;
const LINKEDIN_AUTHOR_URN = process.env.LINKEDIN_AUTHOR_URN!; // urn:li:person:XXXXXXXX

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { title, description, url, tags, canonicalUrl } = JSON.parse(event.body ?? '{}');

  const results: Record<string, unknown> = {};

  // — dev.to —
  try {
    const devtoRes = await fetch('https://dev.to/api/articles', {
      method: 'POST',
      headers: {
        'api-key': DEVTO_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        article: {
          title,
          body_markdown: `> Este artículo fue publicado originalmente en [mi blog](${url}).\n\n${description}\n\n[Leer artículo completo →](${url})`,
          published: true,
          tags: tags ?? [],
          canonical_url: canonicalUrl ?? url,
        },
      }),
    });
    results.devto = await devtoRes.json();
  } catch (err) {
    results.devtoError = String(err);
  }

  // — LinkedIn —
  try {
    const linkedinRes = await fetch('https://api.linkedin.com/v2/ugcPosts', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${LINKEDIN_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
        'X-Restli-Protocol-Version': '2.0.0',
      },
      body: JSON.stringify({
        author: LINKEDIN_AUTHOR_URN,
        lifecycleState: 'PUBLISHED',
        specificContent: {
          'com.linkedin.ugc.ShareContent': {
            shareCommentary: {
              text: `📝 Nuevo post en mi blog: "${title}"\n\n${description}\n\n🔗 ${url}`,
            },
            shareMediaCategory: 'ARTICLE',
            media: [
              {
                status: 'READY',
                description: { text: description },
                originalUrl: url,
                title: { text: title },
              },
            ],
          },
        },
        visibility: { 'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC' },
      }),
    });
    results.linkedin = await linkedinRes.json();
  } catch (err) {
    results.linkedinError = String(err);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(results),
  };
};
