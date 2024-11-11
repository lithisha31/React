import Die from "./Die"
import "./Dice.css";

export default function Dice( {dice, color= "slateblue"} ){
    return (
        <div className = "Dice">
            {
                dice.map((v,i) => (
                    <Die val={v} key={i} color={color}  />
                ))
            }
        </div>
    )
}