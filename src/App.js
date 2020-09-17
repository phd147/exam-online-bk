import React from 'react';

import CountDown from './Components/CountDown/CountDown';

class App extends React.Component {

    render(){
        return (<CountDown time={60000} backup={<p>Time's up</p>}/>)
    }
}



export default App ;