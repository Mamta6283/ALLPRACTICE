import React, { useEffect, useState } from 'react';

function EffectChanllenge(props) {
    const[count,setCount]=useState(0)
    const [name,setName]=useState("")
    const hanleBtn=()=>{
        setCount(count+1)
    }
    const hanleInput=(e)=>{
        setName(e.target.value)
    }
    useEffect(()=>{
        console.log(name)
    },[name])
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={hanleBtn}>Increment</button><br></br>

            <h1>{name}</h1><br></br>
            <input type='text' name='name' placeholder='enter anything' onChange={hanleInput}></input>
        </div>
    );
}

export default EffectChanllenge;