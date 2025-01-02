import {
    SINGIN_REQUEST,
    SIGNUP_REQUEST,
} from './types';
import { CommonPayload } from 'utils/appModels';

const signinRequest = (payload: CommonPayload) => ({
    type: SINGIN_REQUEST,
    ...payload,
});

const signupRequest = (payload: CommonPayload) => ({
    type: SIGNUP_REQUEST,
    ...payload,
});

export {
    signinRequest,
    signupRequest,
}