import React, { useReducer, useRef, useState } from 'react';

//classes CSS 
import classes from './Login.module.css';

//material ui 
import {Grid,Button} from '@material-ui/core'

//component 
import Input from '../../Components/UI/Input/Input';


//thunk action creator 
import {authLogin} from '../../store/action/thunk/authAction';

// hoc 
import Aux from '../../hoc/auxx';

//react redux 
import {connect,useSelector} from 'react-redux';
import * as actionTypes from '../../store/action/actionType';

// Redirect React Router 
import {Redirect} from 'react-router-dom'


//check valid 
const checkValid = (value, regex) => regex.test(value);

// const formReducer = (state,action) => {
//     switch(action.type){

      
//         case 'elValid' : 
//             const elForm = {...state[action.id]};
//             elForm.isValid = true ;
//             elForm.value = action.value;
//             return {
//                 ...state,
//                 elForm
//             }
//         case 'noValid' : 
//             const el = {...state[action.id]};
//             el.isValid = false ;
//             return {
//                 ...state,
//                 el
//             }

      
            
//         default : 
//             throw new Error('some thing went wrong , have  exception  ')
//     }
// }

class Login extends React.Component {

    // const emailRef = useRef();
    // const passwordRef = useRef();


    constructor(props){
        super();
        this.props = props ;
        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();
    }

    // react connect ;
    // const auth = useSelector( state =>{
    //     console.log(state);
    // });


    // const [formStatePoint, dispatch ] = useReducer(formReducer,{
    //     email : {
    //         elementType : 'text',
    //         elementConfig : {
    //             placeholder : 'Your Email',
    //             regex : /^.+$/,
    //             helperText : 'Your email is not valid'
    //         },
    //         isValid : true ,
    //         value : ''
    //     },
    //     password : {
    //         elementType : 'text',
    //         elementConfig : {
    //             placeholder : 'Your password',
    //             regex : /^.+$/,
    //             helperText : 'Your password is not valid '
    //         },
    //         isValid : true ,
    //         value : ''
    //     },
        
    // }) ;

    // const [button,setButton] = useState(false);

     submitHandler = () => {
        this.props.login(this.emailRef.current.value,this.passwordRef.current.value)
    }


     checkValid = (value,regex) => regex.test(value);

    // const changeHandler = (e,id) => {
    //     let allValid = false ;
    //     const elForm = {...formStatePoint[id]};
    //     if(checkValid(e.target.value, elForm.elementConfig.regex)){
    //         dispatch({
    //             type : 'elValid',
    //             valid : true ,
    //             value : e.target.value
    //         })
    //     }
    //     else {
    //         dispatch({type : 'noValid'})
    //     }

    //     for(let key in formStatePoint){
    //         allValid = allValid && (formStatePoint[key].value.trim() !== '' && formStatePoint[key].isValid);
    //     }
    //     if(allValid){
    //        setButton(true);
    //     }
        

    // }
    // const elForm = [];
    // for(let key in formStatePoint){
    //     elForm.push({
    //         ...formStatePoint[key],
    //         id : key
    //     })
    // };
    // console.log(props.auth)
    render(){
        return (
            <Aux>

            {this.props.auth ? <Redirect to="/student"/> : null}
            {/* // Navi */}
            <Grid container className={classes.navi} >
                
                  
            </Grid>
    
            {/* // Login  */}
            <Grid container className={classes.login}>
                <Grid item xs={12} md={4}>
    
                </Grid>
                <Grid  item xs={12} md={4}>
                    <div className={classes.loginE}>
                        <h2>Đăng nhập</h2>
                        {/* {elForm.map(el => {
                            return <Input changeHandler={changeHandler} key={el.id} el={el}/>
                        })} */}
                        <input type="text" ref={this.emailRef} placeholder="email"/>
                        <input type="text" ref={this.passwordRef} placeholder="password"/>
    
                        <Button onClick={this.submitHandler} variant="contained" color="primary">Submit</Button>
    
                    </div>
                </Grid>
                    <Grid item xs={12} md={4}>
    
                </Grid>
            </Grid>
    
    
            
            </Aux>
        )
    }

    componentDidMount(){
        if(this.props.auth){
            console.log('co roi thi redirect thoi')
        }
        else {
            this.props.initAuth();
        }
    }
   
}


const mapDispatchToProps = dispatch => {
    return {
        login : (email,password) => dispatch(authLogin(email,password)),
        initAuth : () => dispatch({type : actionTypes.INIT_AUTH })

        
    }
};

const mapStateToProps = state => {
    console.log(state);
    return {
        auth : state.token !== null 
    }
}




export default connect(mapStateToProps,mapDispatchToProps)(Login) ;