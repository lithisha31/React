import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import "./Color.css"
import Color from "./Color"
import ColorGrid from "./ColorGrid"

function App() {
const Colors = ["violet","blue","green","yellow","orange","red"];
  return (
    <>
     <ColorGrid color={Colors}/>
    </>
  )
}

export default App