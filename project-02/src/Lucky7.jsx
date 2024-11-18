import { useState } from "react";

function getRolls(n){
    return Array.from({ length: n }, () => d6());
}

function d6(){
    return Math.floor(Math.random()*6) + 1
}



export default function Lucky7({num}){
    const[arr,setArr] = useState(getRolls(num))
    console.log(arr)
    function roll(){
        setArr(getRolls(num))
    }
   const sum = (n)=>{
        return n.reduce((prev, cur) => prev + cur, 0);
        }

    return(
        <div>
            <h1>Lucky7 {sum(arr) === 7 ? "You Won" : null}</h1>
            {arr.map((a)=>{
                return <p>{a}</p>
            })}
            <button onClick={roll} style={{height:"30px", width:"70px"}}>Re-roll</button>
        </div>
    )
}