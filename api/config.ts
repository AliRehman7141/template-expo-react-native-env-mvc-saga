import { Platform } from 'react-native';
import axios, { InternalAxiosRequestConfig } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppConfig from 'react-native-config';

import { showErrorMsg } from 'utils/appMessages';

const servers = {
  staging: AppConfig.ROOT_URL_STAGING,
  production: AppConfig.ROOT_URL_PRODUCTION,
};

const ROOT_URL = __DEV__ ? servers.staging : servers.staging;

const BASE_URL = `${ROOT_URL}/api/v1`;
const WEB_URL = AppConfig.WEB_URL;
const PRIVACY_URL = AppConfig.PRIVACY_URL;
const TERMS_URL = AppConfig.TERMS_URL;
const SUPPORT_EMAIL = AppConfig.SUPPORT_EMAIL;

const STORE_LINK = Platform.select({
  ios: AppConfig.STORE_LINK_IOS,
  android: AppConfig.STORE_LINK_ANDROID,
});

const APP_VERSION = AppConfig.APP_VERSION;

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=utf-8',
  },
  timeout: 20 * 1000,
});

client.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const authToken = await AsyncStorage.getItem(
      'authToken',
    );
    if (authToken) {
      config.headers.set('Authorization', `Bearer ${authToken}`)
    }
    // console.log(
    //   "interceptors",
    //   config.url,
    //   // authToken,
    //   // config.data,
    //   // config.params,
    // );
    return config;
  },
  (err) => {
    showErrorMsg(err);
    return Promise.reject(err);
  },
);


export {
  APP_VERSION,
  ROOT_URL,
  BASE_URL,
  client,
  WEB_URL,
  PRIVACY_URL,
  TERMS_URL,
  SUPPORT_EMAIL,
  STORE_LINK,
};
