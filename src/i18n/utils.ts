import { ui, defaultLang, type Lang, type UIKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  if (first && first in ui) return first as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Ruta con prefijo de idioma. es (default) sin prefijo, en → /en/... */
export function localePath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean === '/' ? '' : clean}`;
}

/** Misma ruta en el otro idioma — para el botón ES/EN. */
export function switchLangPath(url: URL): { lang: Lang; href: string } {
  const current = getLangFromUrl(url);
  const target: Lang = current === 'es' ? 'en' : 'es';
  let path = url.pathname;
  if (current !== defaultLang) {
    path = path.replace(new RegExp(`^/${current}`), '') || '/';
  }
  return { lang: target, href: localePath(target, path) };
}
