
import * as actionTypes from '../action/actionType';

const initialState = {
    token : null ,
    userId : null ,
    expireTime : null ,
    login : false 
}


const authReducer = (state = initialState , action) => {
    switch(action.type){

        case actionTypes.LOGIN_SAGA : 
            return {
                ...state,
                token : action.token ,
                userId : action.userId ,
                expireTime : action.expireTime
            }
        case actionTypes.CLEAR_TOKEN : 
            return {
                ...state,
                token : null ,
                userId : null ,
                expireTime : null 
            }

        case actionTypes.INIT_AUTH_SAGA : 
            return {
                ...state ,
                token : action.token ,
                userId : action.userId ,
                expireTime : action.expireTime
            }


        default : 
            return state ;
    }
};


export default authReducer;