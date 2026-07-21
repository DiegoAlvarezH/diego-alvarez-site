# diegoalvarez.tech — Portfolio

Portfolio personal de Diego Alvarez. **Astro 5 + MDX + Tailwind**, bilingüe (ES/EN), zero JavaScript de framework.

## Stack

- [Astro 5](https://astro.build) — SSG puro, View Transitions, prefetch
- MDX Content Collections — blog, proyectos y experiencia en `src/content/{blog,projects,experience}/{es,en}/`
- Tailwind 3 — tokens de diseño en `tailwind.config.js`
- i18n propio — español default (`/`), inglés bajo `/en`, toggle en el nav

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
npm run preview   # sirve dist/ localmente
npm run check     # type checking
```

## Añadir un post al blog

1. Crear `src/content/blog/es/mi-post.mdx` y `src/content/blog/en/mi-post.mdx` (mismo nombre de archivo — el slug compartido alimenta el toggle de idioma).
2. Frontmatter requerido: `title`, `description`, `date`, `tag`, `readTime`, `order` (opcional `featured`).