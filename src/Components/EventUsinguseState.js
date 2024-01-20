import React, { useState } from 'react';
import styles from './myStyle.module.css'

function EventUsinguseState(props) {
    const [count,setCount]=useState(0)

    function counetrHandler(){
        setCount(count+1)

    }
    return (
        <div className={styles.div}>
        <h2>{count}</h2>
        <button onClick={counetrHandler}>Counter</button>
            
        </div>
    );
}

export default EventUsinguseState;