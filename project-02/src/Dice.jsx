import Die from "./Die";
export default function Dice({arr}){
    return(
        <div style={{display: "flex"}}>
        {arr.map((a)=>{
            return (
                <Die num={a}/>
            )
        })}
        </div>
        
    )
}