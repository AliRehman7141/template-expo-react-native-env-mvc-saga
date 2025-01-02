declare module 'react-native-config' {
    interface Config {
        APP_VERSION: string;
        APP_BUILD_NUMBER: string;
        ROOT_URL_STAGING: string;
        ROOT_URL_PRODUCTION: string;
        BASE_URL: string;
        WEB_URL: string;
        PRIVACY_URL: string;
        TERMS_URL: string;
        SUPPORT_EMAIL: string;
        STORE_LINK_ANDROID: string;
        STORE_LINK_IOS: string;
    }

    const Config: Config;
    export default Config;
}
