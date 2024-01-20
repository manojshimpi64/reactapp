import React from 'react';
import PropsUsingvariavle from './PropsUsingvariavle';

function Project(props) {
    return (
        <div>
            <h2>This is Project Component</h2>
            <h1>Institute name from project comp: {props.xyz}</h1>
          

        </div>
    );
}

export default Project;