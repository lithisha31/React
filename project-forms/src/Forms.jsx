import { useState } from "react"
export default function Forms(){
    const[username,setUsername] = useState("timmy")
    const changeUsername = (e) => {
        setUsername(e.target.value);
    }
    return(
        <div style={{placeContent:"center",height: "100vh"}}>
            <label for="username">Username </label>
            <input type="text" placeholder="username" value={username} onChange={changeUsername} id="username"></input>
        </div>
    )
}