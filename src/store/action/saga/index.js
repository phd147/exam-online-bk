
import * as actionTypes from '../actionType';

import {takeEvery} from 'redux-saga/effects';

// auth saga handler

import {loginSuccess,initAuth} from './auth';



export default function* watchAuth(){
    yield takeEvery(actionTypes.LOGIN_THUNK,loginSuccess);
    yield takeEvery(actionTypes.INIT_AUTH, initAuth);
}