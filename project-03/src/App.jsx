import './App.css';
import LuckyN from './LuckyN';
import Die from "./Die";
import Dice from "./Dice"
import Box from './Box';
import Heart from './Heart';
import BoxGrid from "./BoxGrid";

function App() {
  return (
    <div className="App">
      {/* <LuckyN numDice={2} goal={7}/> */}
      {/* <Die val={2} color="blue"/> */}
      {/* <Dice dice={[1,2,3]}/> */}
      {/* <Heart /> */}
      {/* <Box /> */}
      <BoxGrid />
      
    </div>
  );
}

export default App;