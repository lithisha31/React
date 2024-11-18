import { useState } from 'react'
import './App.css'
import "./Color.css"
import Color from "./Color"
import ColorGrid from "./ColorGrid"

function App() {
const Colors = ["violet","blue","green","yellow","orange","red"];
  return (
    <div className="ColorGrid">
     <ColorGrid color={Colors}/>
    </div>
  )
}

export default App