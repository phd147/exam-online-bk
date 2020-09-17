import axios from 'axios';
import * as actionTypes from '../actionType';


export const authLogin = (gmail,password) => {
    console.log('login THUNK')
    return async dispatch => {
        const res = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCDglsIdMKyIOFZVLNus73Pa0zkRmwwofI',{
            email : gmail,
            password : password,
            returnSecureToken : true 
        });

        dispatch({type : actionTypes.LOGIN_THUNK,token : res.data.idToken, userId : res.data.localId, expireTime : res.data.expiresIn });
    
    }
}