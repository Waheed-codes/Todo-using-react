import { useEffect } from "react";
import { useState } from "react"

export default function StopWatch(){
    const[seconds,setSeconds]=useState(0);
    const [running,setRunning]=useState(false);
    useEffect(()=>{
         const interval= (()=>setInterval)
       


    },[running])

    return(
        <div>
            <button>Start</button>
            <button >Stop</button>
            <button >Reset</button>
        </div>
    )
}