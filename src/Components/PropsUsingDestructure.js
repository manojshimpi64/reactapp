import React from 'react';
import Demo from './Demo';

function PropsUsingDestructure(props) {
    const StudentInfo={name:'Test',course:'MERN Stack',email:'test@gmail.com'}
    return (
        <div>
        <h2>Props using Destructuring</h2>
        <Demo info={StudentInfo}/>

            
        </div>
    );
}

export default PropsUsingDestructure;