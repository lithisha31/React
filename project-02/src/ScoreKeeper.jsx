import { useState } from "react";
export default function ScoreKeeper(){
    
    const [count,setCount]=useState({p1Score:0,p2Score:0})
    const changeP1=() =>{
        setCount((oldScore)=>(
             {...oldScore,p1Score:oldScore.p1Score+3}
        ))}
    const changeP2=() =>{
        setCount((oldScore)=>(
             {...oldScore,p2Score:oldScore.p2Score+3}
        ))}

    return(
        <div>
            <h1>P1Score : {count.p1Score}</h1>
            <h1>P2Score : {count.p2Score}</h1>
            <button onClick={changeP1}>IncrementP1</button>
            <button onClick={changeP2}>IncrementP2</button>
        </div>
    )
}