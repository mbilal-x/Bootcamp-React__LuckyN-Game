import './Dice.css'
import Die from './Die'

export default function Dice({dice, roll}){
    return (
        <>
        <div className="Dice">
            {dice.map((value, i) => (
                <Die value={value} key={i} />
            ))}
        </div>
        <button onClick={roll}>Try Again</button>
        </>
    );
}