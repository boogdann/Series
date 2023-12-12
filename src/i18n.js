import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import {initReactI18next} from 'react-i18next'
import en from './locales/en/translation.json'
import ru from './locales/ru/translation.json'

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'ru',
        debug: true,
        interpolation: {
            escapeValue: false
        },
        returnEmptyString: false,
        resources: {
            en: {
                ns1: en,
            },
            ru: {
                ns1: ru,
            }
        }
    })

export default i18n