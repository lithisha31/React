import { useState } from "react"

export default function(){
    const[username,setUsername]=useState({firstName:"",lastName:"",password:""});
    const changeName = (e) => {
        const changedField = e.target.name;
        const changedValue = e.target.value;
        setUsername((oldUsername)=>{
           oldUsername[changedField] = changedValue;
           return {...oldUsername}
        })
    }
    const handleSubmit = () => {
        console.log(username)
    }
    return(
        <div style={{placeContent:"center",height: "100vh"}}>
            <label htmlFor="firstname">FirstName </label>
            <input type="text" value={username.firstName} name="firstName" id="firstname" placeholder="First" onChange={changeName}></input>
            <label htmlFor="lastname">LastName </label>
            <input type="text" value={username.lastName} name="lastName" id="lastname" placeholder="Last" onChange={changeName}></input>
            <label htmlFor="password">Password </label>
            <input type="password" value={username.password} name="password" id="password" placeholder="Pass" onChange={changeName}></input>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}