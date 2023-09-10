import './LuckyN.css'
import Dice from './Dice'
import { useState } from 'react';
import {d6, getRolls, sum} from './utils'




export default function LuckyN({title = "LuckyN Game", winCheck, numDice}){

    function roll(){
        setDice(getRolls(numDice))
    }

    const [dice, setDice] = useState(getRolls(numDice))
    const isWinner = winCheck(dice);

    return (
        <>
            <div className="LuckyN">
            {isWinner && "YOU WON!!"}
                <h2>{title}</h2>
                <Dice dice = {dice} roll={roll}/>
            </div>
        </>
    );
}