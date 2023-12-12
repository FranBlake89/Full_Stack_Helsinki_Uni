import { useState } from 'react'
import Stats from '../Stats'

export default function Unicafe () {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);


    const updateGood = () =>{
        setGood( good+1 );
    }
    const updateNeutral = () =>{
        setNeutral( neutral+1 );
    }
    const updateBad = () =>{
        setBad( bad+1 );
    }

    return(
        <>
        <h2>Give Feedback</h2>
        <br />
        <button onClick={updateGood}>Good</button>
        <button onClick={updateNeutral}>Neutral</button>
        <button onClick={updateBad}>Bad</button>
        <p>Good: {good} </p>
        <p>Neutral: {neutral} </p>
        <p>Bad: {bad}</p>

        <Stats text={['good', 'neutral', 'bad']} value={[good, neutral, bad]}/>
        </>
    )

}