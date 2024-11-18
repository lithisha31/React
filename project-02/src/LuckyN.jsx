import { useState } from "react";
import Dice from "./Dice";
import Button from "./Button";
export default function LuckyN({numDice = 2, winCheck}){
    const[dice,setDice] = useState(getRolls(numDice))

    function getRolls(numDice){
        return Array.from({ length: numDice }, () => d6());
    }
    
    function d6(){
        return Math.floor(Math.random()*6) + 1
    }

    const sum = (n)=>{
        return n.reduce((prev, cur) => prev + cur, 0);
        }

    const Win = winCheck(dice);

    function roll(){
        setDice(getRolls(numDice))
    }

    console.log(dice)
    return(
        <div>
            <h1>Lucky {Win && <h1>You Win</h1>}</h1>
            
            <Dice arr={dice}/>

            <button onClick={roll} style={{height:"30px", width:"70px"}}>Re-roll</button>

            <Button clickFunc={roll} label="re-roll"/>
        
        </div>
    )
}