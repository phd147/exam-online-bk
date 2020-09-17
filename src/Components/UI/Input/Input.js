import React from 'react';

import {TextField} from '@material-ui/core'

const Input = props => {
    console.log(props.el.elementType)
    switch(props.el.elementType){
        case 'text' : 
            return <TextField 
            error={!props.el.isValid}
            id="standard-error-helper-text"
            label={props.el.elementConfig.placeholder}
            defaultChecked={false}
            helperText={props.el.elementConfig.helperText}
            
            />

        case 'select' : 
        break;

        case 'password' : 
        break;

        default : 
            throw new Error('should not here !!!')
    }
}


export default Input ;