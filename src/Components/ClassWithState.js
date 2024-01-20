import React, { Component } from 'react';

class ClassWithState extends Component {
    constructor(){
        super()
        this.state={
            color:'red'
        }
    }
    render() {
        return (
            <div>
               <h2>Property value is: {this.state.color}</h2> 
            </div>
        );
    }
}

export default ClassWithState;