import React from 'react';

export default function Stats({text, value}){

    const scores ={
        good:1,
        neutral:0,
        bad:-1
    };
    
    const sumValues= value.reduce( (acc, currentValue)=> acc + currentValue,0 );
    const average = (value[0]+(value[2]*-1))/sumValues;
    const percPositive= value[0]/sumValues;
    return(
        <>
        <h2>STATS</h2>
        <table>
            <thead>
            <tr>
                <th>Label</th>
                <th>Value</th>
            </tr>
            </thead>
            <tbody>
                {text.map((label, index) => (
                    <tr key={label}>
                        <td>{label}</td>
                        <td>{value[index]}</td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td>All: </td>
                    <td>{sumValues}</td>
                </tr>
                <tr>
                    <td>Average: </td>
                    <td>{average}</td>
                </tr>
                <tr>
                    <td>Positive: </td>
                    <td>{percPositive *100}%</td>
                </tr>
            </tfoot>
        </table>
        </>
    )
}