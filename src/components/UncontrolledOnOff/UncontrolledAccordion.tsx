import React, {useState} from 'react';


export function UncontrolledOnOff() {

    let [on, setOn] = useState(false)

    const styleOn = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '3px',
        backgroundColor: on ? 'greenyellow' : 'white',


    }
    const styleOff = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '1px',
        padding: '3px',
        backgroundColor: on ? 'white' : 'brown',

    }
    const indicator = {
        width: '10px',
        height: '10px',
        border: '1px solid black',
        borderRadius: '5px',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'greenyellow' : 'brown',

    }

    return (
        <div>
            <div onClick={() => setOn(true)} style={styleOn}>On</div>
            <div onClick={() => setOn(false)} style={styleOff}>OFF</div>
            <div style={indicator}></div>
        </div>
    )
}