import {useState,useEffect} from "react";

export default function App(){
const [cTime,setTime] = useState(new Date().toLocaleString());
useEffect(()=> {

setInterval(()=>{
    setTime(new Date().toLocaleString());
}.1000);
})
return (

    <div className="App">
        <h1>{cTime}</h1>
        <button onClick={()=>setTimeout(new Date().toLocaleString())}>Increment</button>

    </div>
);
}

export default relogio; 