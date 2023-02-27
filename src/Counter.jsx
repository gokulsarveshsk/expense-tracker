import React, {useState, useEffect } from "react";


const Counter = () => {

    const [number,setNumber]=useState(0);   
    const [text,setText]=useState('hello');
    // useEffect(callback,depencies)
    useEffect(()=>{
        console.log('useEffect');
        setText(Math.random().toString())
    },[number]);
    return (
        <div>
            API Call
            <div>{text}</div>
            <button onClick={()=>setNumber(10)}>Update Number</button>
        </div>
    )
}

export default Counter;