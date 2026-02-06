import { es } from './es';
import { en } from './en';
import { pt } from './pt';

export const languages = {
    es,
    en,
    pt
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'en';

export function getLangFromUrl(url: URL): Language {
    const [, lang] = url.pathname.split('/');
    if (lang in languages) return lang as Language;
    return defaultLang;
}

export function useTranslations(lang: Language = defaultLang) {
    return languages[lang];
}

export function getLocalizedPath(path: string, lang: Language): string {
    return `/${lang}${path}`;
}
