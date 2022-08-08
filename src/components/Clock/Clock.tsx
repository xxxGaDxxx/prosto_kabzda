import React, {useEffect, useState} from 'react';
import {AnalogClockView} from './AnalogClockView';
import {DigitalClockView} from './DigitalClockView';

type PropsType = {
    mode?: 'digital' | 'analog'
}
export type ClocViewProps = {
    date: Date
}


export const get2digitsString = (num: number) => num < 10 ? '0' + num : num

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            debugger
            clearInterval(intervalId)
        }
    }, [])


    let view
    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date={date}/>
            break
        case 'digital':
        default:
            view = <DigitalClockView date={date}/>
    }


    return <div>
        {view}

        {/*{props.mode === 'digital'*/}
        {/*    ? <>*/}
        {/*        <span>{get2digitsString(date.getHours())}</span>*/}
        {/*        : <span>{get2digitsString(date.getMinutes())}</span>*/}
        {/*        :<span>{get2digitsString(date.getSeconds())}</span>*/}
        {/*    </>*/}
        {/*    : <>ANALOG</>*/}
        {/*}*/}

    </div>
}


