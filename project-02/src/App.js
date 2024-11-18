// import logo from './logo.svg';
import './App.css';
// import ScoreKeeper1 from "./ScoreKeeper1";
// import EmojiClicker from './EmojiClicker';
// import Lucky7 from "./Lucky7";
import Dice from "./Dice";
import LuckyN from './LuckyN';

const sum = (n)=>{
  return n.reduce((prev, cur) => prev + cur, 0);
  }


function lessthan4(dice){
  return sum(dice) < 4;
}

function App() {
  return (
    <div className='App'>
      {/* <ScoreKeeper1 num={2} target={3}/> */}
      {/* <EmojiClicker /> */}
      {/* <Lucky7 num={3}/>
      <Lucky7 num={2}/> */}
      <LuckyN winCheck={lessthan4}/>
    </div>
  );
}

export default App;
