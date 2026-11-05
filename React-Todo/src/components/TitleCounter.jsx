import { useEffect } from "react";
import { useState } from "react";

export default function TitleCounter(){
const [count,setCount]= useState(0)
const [btn,setBtn]=useState(10)

useEffect(()=>{
    document.title=`Clicked ${count} times`
    console.log("ran")

},[count])

return(
    <div>
        <button onClick={()=>setCount((c)=>c+1)}>Conter is at:{count}</button>
        <button onClick={()=>setBtn((b)=>b+1)}>Button Value:{btn}</button>
    </div>
)

}
