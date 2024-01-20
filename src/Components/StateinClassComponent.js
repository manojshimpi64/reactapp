import React, { Component } from 'react';

class StateinClassComponent extends Component {
    constructor(){
        super()
        this.state={
            name:'Test',
            email:'test@gmail.com',
            course:'MERN Stack'
        }
    }
     changeEmail=()=>{
        this.setState({email:'changeemailtest@gmail.com'})
     }
    render() {
        return (
            <div>
            <h1>Name is :{this.state.name}</h1>
            <h3>eamil is :{this.state.email}</h3>
            <button onClick={this.changeEmail}>Change Value</button>
                
            </div>
        );
    }
}

export default StateinClassComponent;