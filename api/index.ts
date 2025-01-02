import { AxiosRequestConfig } from 'axios';
import { client, clientCMS } from './config';

export const getRequest = (url: string, extras: AxiosRequestConfig = {}) => client.get(url, extras);

export const postRequest = (url: string, payload = {}, extras: AxiosRequestConfig = {}) => client.post(url, payload, extras);

export const patchRequest = (url: string, payload = {}, extras: AxiosRequestConfig = {}) => {
  return client.patch(url, payload, extras)
};

export const putRequest = (url: string, payload = {}, extras: AxiosRequestConfig = {}) => client.put(url, payload, extras);

export const deleteRequest = (url: string, extras: AxiosRequestConfig = {}) =>
  client.delete(url, extras);

// CMS
export const postRequestCMS = (url: string, payload = {}, extras: AxiosRequestConfig = {}) => clientCMS.post(url, payload, extras);
