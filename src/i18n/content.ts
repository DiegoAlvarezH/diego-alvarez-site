import { getCollection, type CollectionEntry, type DataEntryMap } from 'astro:content';
import type { Lang } from './ui';

/** Entradas de una colección filtradas por idioma (subcarpeta es/ o en/). */
export async function getLocalized<C extends keyof DataEntryMap>(
  collection: C,
  lang: Lang
): Promise<CollectionEntry<C>[]> {
  const entries = await getCollection(collection, ({ id }: { id: string }) =>
    id.startsWith(`${lang}/`)
  );
  return entries.sort(
    (a, b) => (a.data as { order: number }).order - (b.data as { order: number }).order
  );
}

/** Slug sin el prefijo de idioma: "es/foo" → "foo". */
export function stripLang(id: string): string {
  return id.replace(/^(es|en)\//, '');
}
