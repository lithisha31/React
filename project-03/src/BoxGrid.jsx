import { useState } from "react"
import Box from "./Box"

export default function BoxGrid(){
    const[boxes, setBoxes] = useState([false,false,true,false,false,false,false])
    const reset = () => setBoxes([false,false,false,false,false,false,false])
    const toggle = (idx) => {
        setBoxes((oldBoxes)=>{
            return oldBoxes.map((value,i)=> {
                if(i===idx){
                    return !value;
                }
                else{
                    return value;
                }
            })
        })
    }
    console.log(boxes)
    
    return (
        <div>
            {boxes.map((b,i)=>{
                return <Box isActive={b} toggleBox={()=>toggle(i)}/>
            })}
            <button onClick={reset}>Reset</button>
        </div>
    )
}