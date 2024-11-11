import "./Box.css";
import { useState } from "react";


export default function Box({isActive, toggleBox}){
    // const [color,setColor] = useState("black")
    // const changeColor = () => {
    //     return setColor("red");
    // }
    // const [isActive, setIsActive] = useState(false);

    // const toggleIsActive = () => setIsActive(!isActive)

    // console.log(isActive)
    return (
        <div className="Box" style={{backgroundColor:isActive ? "red" : "black"}} onClick={toggleBox}>
        </div>
    )
}