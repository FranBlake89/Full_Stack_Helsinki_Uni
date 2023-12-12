import React, { useState } from 'react';

export default function Acendotes_2(){
    const [selected, setSelected] = useState(0);
    const [highScore, setHighScore] = useState(0);    
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
      ]
      
    const points = { 
        0: 1, 
        1: 1, 
        2: 2, 
        3: 1 
    }
    // incrementa en uno el valor de la propiedad 2
    const updatedPoints = { ...points }
    
    const len = anecdotes.length;
    
    
    const nextAnecdote = () =>{
        let randomNUmber = Math.floor(Math.random() * len);
        setSelected(randomNUmber);
    }
    
    const vote = (index) =>{
        const key = index
        if( !(key in updatedPoints) ){
            updatedPoints[key] = 1
        }
        updatedPoints[key] += 1
        
        //console.log(`funct vote:::: key: ${key}, value:${updatedPoints[key]} `)
        updateHighestScore();
    }
    
    const updateHighestScore = () =>{
        let max = 0;
        let maxKey = 0;
        
        for( let score in updatedPoints){
            if(updatedPoints[score] > max){
                max = updatedPoints[score]
                maxKey = score
            }
        }
        setHighScore(maxKey);
        //console.log(`funct Hscore:::: key: ${maxKey}, value:${max}, highScore:${highScore} `)
    }
    
    //updateHighestScore();
    
    
    return (
        <>
        <h2>Anecdotes, step 2</h2>
        <p>
            {anecdotes[selected]}
        </p>
        <button onClick={()=> vote(selected)}>vote </button>
        <button onClick={nextAnecdote}>Next </button>
        </>
    )

}