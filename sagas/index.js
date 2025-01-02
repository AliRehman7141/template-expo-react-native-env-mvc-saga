import { takeLatest, all } from 'redux-saga/effects';

import * as types from 'actions/types';
import {
  signinAsync,
  signupAsync,
} from './session';

export default function* watch() {
  yield all([
    // Session
    takeLatest(types.SINGIN_REQUEST, signinAsync),
    takeLatest(types.SIGNUP_REQUEST, signupAsync),
  ]);
}
