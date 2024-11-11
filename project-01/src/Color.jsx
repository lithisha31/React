import "./Color.css";
import { useState } from "react";
function randomElement(arr){
  const idx = Math.floor(Math.random()*arr.length);
  return idx;
}
export default function Color({color}){
  const[colour,setColor] = useState(color[randomElement(color)])
  const colorChange = () => {    
    const randomColor = color[randomElement(color)]
    console.log(randomColor)
    setColor(randomColor)
  }
  return(
    <div className="Color" style={{backgroundColor:colour}} onClick={colorChange}>

    </div>
  )
}