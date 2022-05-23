import React from 'react';

type OnOffPropsType = {
    on: boolean
    onChange: (on: boolean) => void
}

export function ControlledOnOff(props: OnOffPropsType) {


    const styleOn = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '3px',
        backgroundColor: props.on ? 'greenyellow' : 'white',


    }
    const styleOff = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '1px',
        padding: '3px',
        backgroundColor: props.on ? 'white' : 'brown',

    }
    const indicator = {
        width: '10px',
        height: '10px',
        border: '1px solid black',
        borderRadius: '5px',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? 'greenyellow' : 'brown',

    }

    const onCliced = () => {
        props.onChange(true)
    }
    const offCliced = () => {
        props.onChange(false)
    }

    return (
        <div>
            <div style={styleOn} onClick={onCliced}>On</div>
            <div style={styleOff} onClick={offCliced}>OFF</div>
            <div style={indicator}></div>
        </div>
    )
}