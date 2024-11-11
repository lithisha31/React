import { useState } from "react";
// import "./Heart.css";

export default function Heart(){
  const[isFill,setFill]=useState(false);
  const changebgd =()=> setFill(!isFill);

  return (
    <div className="Toggler">
    <input type="text" style={{backgroundColor: isFill?"red":"white"}}></input>
    <button onClick={changebgd}>Click</button>
    </div>
  )
}