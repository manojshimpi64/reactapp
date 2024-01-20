import React from 'react';

function EventIntro(props) {
    const greetUser=()=>{
        alert('Intro of Events')
    }
  function changeValue(name){
    alert(`Name is ${name}`)
  }
    return (
        <div>
            <button onClick={greetUser}>Click</button>
            <button onClick={()=>changeValue("Test")}>Predefined Value</button>
        </div>
    );
}

export default EventIntro;