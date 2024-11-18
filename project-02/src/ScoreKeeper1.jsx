import { useState } from "react";

export default function ScoreKeeper1({num,target}){  
    const[arr,setArr] = useState(new Array(num).fill(0))
    console.log(arr);
    const increment = (idx) => {
        setArr((prevScores)=>{
            const copy = [...prevScores];
            copy[idx] += 1;
            console.log(copy)
            return copy;
            
        })
    }
    const reset = () => {
        setArr(new Array(num).fill(0))
    }

    return(
        <>
        {arr.map((a,index)=>{
            return (
            <div style={{display:"flex"}}>
            <h1>Player{index+1}:{a}</h1>
            <button onClick={() => increment(index)}>+1</button>
            {a >= target && <h3>Winner</h3>}
            </div>
           
            )
        })}
        <button onClick={reset}>Reset</button>
        </>
    )

        

    
}