import LuckyN from './LuckyN'
import {d6, getRolls, sum} from './utils'


function lucky7(dice){
  if(sum(dice) === 7){
    return true;
  }
  return false;
}

function lessThan4(dice){
  if(sum(dice) < 4){
    return true;
  }
  return false;
}

function App() {
  return (
    <>
    <LuckyN title="Lucky7 Game" winCheck={lucky7} numDice={2}/>
    <LuckyN title="LessThan4 Game" winCheck={lessThan4} numDice={3}/>
    </>
  );
}

export default App;
