import { useEffect } from "react";
import { useState } from "react"

export default function StopWatch(){
    const[seconds,setSeconds]=useState(0);
    const [running,setRunning]=useState(false);
    useEffect(()=>{
        if(!running) return;
         const interval= setInterval(()=> setSeconds((s)=> s+1),1000)
         return ()=> clearInterval(interval)  // cleanup function
    },[running])
    function reset(){
        setSeconds(0)
        setRunning(false)
    }

    return(
        <div>
            <span>{seconds}s</span>
            <button onClick={()=>setRunning(true)}>Start</button>
            <button onClick={()=>setRunning(false)}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}