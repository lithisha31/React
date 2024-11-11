import { useState } from "react";
import { getRolls} from "./utils";
// import { d6 } from "./utils";
import Dice from "./Dice";

export default function LuckyN( {numDice = 2, goal=7}){
    const [dice, setDice] = useState(getRolls(numDice));
    console.log(dice);
    return(
        <main className = "LuckyN">
            <h1> LuckyN </h1>
            <Dice dice={dice} />
        </main>
    );
}