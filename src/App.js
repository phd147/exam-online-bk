import React from 'react';


//test
import CountDown from './Components/CountDown/CountDown';

//react router 
import {Switch,Route} from 'react-router-dom'


//hoc 
import Aux from './hoc/auxx';


//Route Component
import Login from './Containers/Login/Login';
import Student from './Containers/Student/Student';



class App extends React.Component {

    render(){
        return (<Aux>

            <Switch>
                <Route path="/" exact component={Login}/>
                <Route paht="/student" component={Student}/>
            </Switch>
            
        
        </Aux>
        )
    }
}



export default App ;