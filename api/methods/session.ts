import {
    postRequest,
} from 'api/index';

import {
    singinUrl,
    signupUrl
} from 'api/urlHelpers';

export const singinAPI = (payload: any) => postRequest(singinUrl(), payload);
export const singupAPI = (payload: any) => postRequest(signupUrl(), payload);