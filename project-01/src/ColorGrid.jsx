import Color from "./Color";
import  "./ColorGrid.css";
import "./Color.css";

export default function ColorGrid({color}){
  const boxes=[];
  for(let i = 0;i < 25; i++){
    boxes.push(<Color color={color}/>);
  }
  return(
    <div className="ColorGrid">
     {boxes} 
    </div>
  )
}