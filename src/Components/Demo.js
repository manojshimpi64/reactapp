import React from 'react';

function Demo(props) {
    return (
        <div>
            {/*<h2>Tomorrow is a {props.que}</h2> 
        <h2>Institute name is :{props.inst}</h2>*/} 
        <h2>Student name is:{props.info.name}  { props.info.email}</h2>
            
        </div>
    );
}

export default Demo;