import React from 'react';
import Demo from './Demo';

function PropsPassdata(props) {
    return (
        <div>
            <h1>To pass the data from one Component to another Component</h1>
       <Demo  que='holiday' />
            </div>
    );
}

export default PropsPassdata;