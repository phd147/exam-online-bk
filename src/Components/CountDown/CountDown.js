import React from 'react';


import classes from './CountDown.module.css';

class CountDown extends React.Component {



    constructor(props){
        super();

        this.props = props ;

        this.state = {
            time : this.props.time ,
            timming : true 
        }


    }

    shouldComponentUpdate(props,state){
        if(state.time === 0 && state.timming){
            clearInterval(this.timer);
            this.setState({
                timming : false 
            });
           
        };
        return true  ;
        
    }

   


    render(){

        const minutes = Math.floor(this.state.time / 60000);

        const minutesShow = minutes >= 10 ? minutes : '0' + minutes;


        const seconds = (this.state.time - minutes*60000) / 1000;

        const secondsShow = seconds >= 10 ? seconds : '0' + seconds;

        let content = null ;

        if(this.state.timming ){
            content = <p>{minutesShow} : {secondsShow}</p>
        }
        else {
            content = this.props.backup
        }



        return (
            <div className={classes.CountDown}>
               {content}
            </div>
        )
    }


    componentDidMount(){
        this.timer = setInterval(() => {
            this.setState(prevState => {
               return {
                   time : prevState.time -1000
               }
            })
        },1000)

    }


}



export default CountDown;