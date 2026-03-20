import { en } from './en'
import { zhTW } from './zh-tw'

const translations = { en, 'zh-TW': zhTW } as const
export type Locale = keyof typeof translations

export function t(locale: string | undefined) {
  const key = (locale === 'zh-TW' ? 'zh-TW' : 'en') as Locale
  return translations[key]
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/')
  if (lang === 'zh-TW') return 'zh-TW'
  return 'en'
}

export function getLocalePath(locale: Locale, path: string = '/') {
  return locale === 'en' ? path : `/zh-TW${path}`
}
