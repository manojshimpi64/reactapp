import React from 'react';
import './external.css'
import styles from './myStyle.module.css'

function StyleIntro(props) {
    const demo={
        color:'white',
        border:'none',
        backgroundColor:'blue',
        fontSize:'25px',
        padding:'20px',
        borderRadius:'4px'

    }
    return (
        <div>
        <p style={{color:'red',fontSize:'22px',backgroundColor:'lightblue'}}>This is css introduction file</p>

        <button style={demo}>Css Intro</button>

        <h4 className='xyz'>This is external css file Intro</h4>

        <div className={styles.div}>age, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</div>

        <h3 className={styles.h3}>norum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet</h3>

        <p id={styles.xyz}>ise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",</p>
            
        </div>
    );
}

export default StyleIntro;
