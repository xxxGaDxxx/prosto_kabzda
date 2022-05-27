import React, {useState} from 'react';

type PropsType = {
    onChange: (on: boolean) => void
    defaultOn?: boolean
}

export function UncontrolledOnOff(props: PropsType) {

    let [on, setOn] = useState<boolean>(props.defaultOn ? props.defaultOn : false)

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

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div onClick={onClicked} style={styleOn}>On</div>
            <div onClick={offClicked} style={styleOff}>OFF</div>
            <div style={indicator}></div>
        </div>
    )
}