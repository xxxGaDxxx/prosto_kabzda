import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect demo'
}


export const Example1 = () => {
    console.log('Example1')

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {
        console.log('кажый раз запускается , после отрисовки компоненты')
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log('один раз запускается , после отрисовки компоненты')
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log('запускается когда изминился useState(counter) , после отрисовки компоненты')
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello, {counter}---{fake}
        <button onClick={() => {setCounter(counter + 1)}}>counter</button>
        <button onClick={() => {setFake(fake + 1)}}>fake</button>

    </>
}
