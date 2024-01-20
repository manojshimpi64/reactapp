import React,{useState} from 'react';

function OnchangeEvent(props) {
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(name,password)
    }

    return (
        <div>
        <h2>{name}{password}</h2>
            <form onSubmit={handleSubmit}>
            <input type='text' placeholder='enter email' 
            value={name} 
            onChange={(e)=>setName(e.target.value)}/>
            <br/>
            <input type='text' placeholder='enter password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}/>
            <br/>
            <button type='submit'>Send</button>

            </form>
        </div>
    );
}

export default OnchangeEvent;