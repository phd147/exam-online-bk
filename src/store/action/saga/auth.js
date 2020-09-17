import * as actionTypes from '../actionType';

import {put,delay} from 'redux-saga/effects'


export function* loginSuccess(action){
    console.log(action);
    
    yield console.log('login success Saga');
   


    yield localStorage.setItem('token',action.token);
    yield localStorage.setItem('userId',action.userId);
    yield localStorage.setItem('expireTime',new Date().getTime() + action.expireTime*1000);

    yield put({type :actionTypes.LOGIN_SAGA ,token : action.token , userId : action.userId, expireTime : action.expireTime });
    yield delay(action.expireTime*1000);
    yield put({type : actionTypes.CLEAR_TOKEN});
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('userId');
    yield localStorage.removeItem('expireTime');

}


export function* initAuth(action){

    const expireTime = localStorage.getItem('expireTime');
    const dateNow = new Date().getTime();

    if(localStorage.getItem('token') && expireTime - dateNow > 0){
        yield put({
            type : actionTypes.INIT_AUTH_SAGA,
            token : localStorage.getItem('token'),
            userId : localStorage.getItem('userId'),
            expireTime : localStorage.getItem('expireTime')
        });
        yield delay(expireTime - dateNow);
        yield put({type : actionTypes.CLEAR_TOKEN})
        yield localStorage.removeItem('token');
        yield localStorage.removeItem('userId');
        yield localStorage.removeItem('expireTime');
    }
    else {
        yield put({type : actionTypes.CLEAR_TOKEN})
        yield localStorage.removeItem('token');
        yield localStorage.removeItem('userId');
        yield localStorage.removeItem('expireTime');
    }
}