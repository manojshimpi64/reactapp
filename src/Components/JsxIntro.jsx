import React from 'react';

function JsxIntro(props) {
const x=10;
let text="Good Morning";
let demo='Testing'
if(x<=10){
    text='Welcome'
}

    return (
        <div>
            <h1>{text}<br/>{demo}</h1>
        </div>
    );
}

export default JsxIntro;