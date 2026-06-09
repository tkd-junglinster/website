import { ui, defaultLang, type Lang, type UiKey } from './ui';

/** Work out the current language from the page URL (e.g. /en/about -> 'en'). */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in ui) return lang as Lang;
  return defaultLang;
}

/** Returns a translation function `t('some.key')` for the given language. */
export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/**
 * Swap the language segment of a path so the language switcher can link to
 * the same page in another language (e.g. /fr/about + 'en' -> /en/about).
 */
export function getLocalizedPath(pathname: string, targetLang: Lang): string {
  const segments = pathname.split('/');
  if (segments[1] && segments[1] in ui) {
    segments[1] = targetLang;
  } else {
    segments.splice(1, 0, targetLang);
  }
  const path = segments.join('/');
  return path === '' ? `/${targetLang}/` : path;
}

/** Build a path within the current language (e.g. lang 'fr', 'about' -> /fr/about). */
export function localePath(lang: Lang, path = ''): string {
  return path ? `/${lang}/${path}` : `/${lang}/`;
}
