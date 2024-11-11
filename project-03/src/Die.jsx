import "./Die.css";

export default function Die({val,color}){
    return(
        <div className="Die" style={{ backgroundColor : color}}>
            {/* <h1> die component start </h1> */}
             {val}
        </div>
    );
}