import { put, call } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import {
    singinAPI,
    singupAPI,
} from 'api/methods/session';

import { CommonPayload } from 'utils/appModels';

import { resetLoading, setLoading } from 'reducers/loading';

export function* signinAsync({ payload, onSuccess, onError }: CommonPayload) {
    try {
        yield put(setLoading(true))
        const response: AxiosResponse = yield call(singinAPI, payload);
        onSuccess?.(response.data)
    } catch (error) {
        onError?.(error)
        console.log('signinAsync', 'error', error);
    } finally {
        yield put(resetLoading())
    }
}


export function* signupAsync({ payload, onSuccess, onError }: CommonPayload) {
    try {
        yield put(setLoading(true))
        // console.log('newSignupAsync', 'call', payload);
        const response: AxiosResponse = yield call(singupAPI, payload);
        onSuccess?.(response.data)
    } catch (error) {
        onError?.(error)
        console.log('newSignupAsync', 'error', error);
    } finally {
        yield put(resetLoading())
    }
}