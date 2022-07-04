import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect_setTimeout_setInterval demo'
}


export const SetTimeoutExample = () => {
    console.log('SetTimeoutExample ')

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)


    useEffect(() => {
        console.log('запускается когда изминился useState(counter) , после отрисовки компоненты')

        setTimeout(() => {
            console.log('setTimeout')
            document.title = counter.toString()
        }, 2000)

    }, [counter])

    return <>
        Hello, {counter}---{fake}<button onClick={() => {setCounter(counter + 1)}}>counter</button>
        <button onClick={() => {setFake(fake + 1)}}>fake</button>
    </>
}

export const SetIntervalExample = () => {
    console.log('SetIntervalExample')

    const [counter, setCounter] = useState(1)
    const [fake] = useState(1)


    useEffect(() => {
        console.log('запускается когда изминился useState(counter) , после отрисовки компоненты')

        setInterval(() => {
            console.log('tic'+counter)
            setCounter((state)=>state+1)
        }, 1000)

    }, [])

    return <>
        Hello,counter: {counter}---fake: {fake}
    </>
}

export const DateExample = () => {
    console.log('DataExample')

    let newDate =new Date().toLocaleTimeString()

    const [date, steDate] = useState(newDate)
    console.log('setInterval'+date)

    useEffect(()=>{
        setInterval(()=>{
            steDate(new Date().toLocaleTimeString())
        },1000)
    },[])

    return <>
        {date}
    </>
}



