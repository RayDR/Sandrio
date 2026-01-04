import es_MX from './es-MX.json';
import en_US from './en-US.json';

export const locales = {
  'es-MX': es_MX,
  'en-US': en_US,
} as const;

export type Locale = keyof typeof locales;

export const getTranslation = (locale: Locale, key: string): string => {
  const keys = key.split('.');
  let value: any = locales[locale];

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key; // Return key if translation not found
    }
  }

  return typeof value === 'string' ? value : key;
};
