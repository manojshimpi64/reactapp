import React from 'react';
import Demo from './Demo';
import Project from './Project';

function PropsUsingvariavle(props) {
let Institute='Seven Mentor'
    return (
        <div>
        <Project xyz={Institute}/>

            <h1>This is variable value pass using props Component</h1>
       <Demo inst={Institute}/>
       
            </div>
    );
}

export default PropsUsingvariavle;