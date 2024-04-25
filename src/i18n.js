import i18n from "i18next"
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';


i18n

    .use(initReactI18next) // use Middleware olarak düşün
    .use(Backend)

    .init({
        lng: 'tr', // başlangıç dilini belirliyoruz
        //resources

        fallbackLng: 'tr',
    })


export default i18n // varsayılan olarak dışarı aktardık