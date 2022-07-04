import React, { useState} from 'react';

export default {
    title: ' UseState demo'
}

function  generateDate(){
    console.log('generateDate')
    return 1
}

export const Example1 = () => {
    console.log('Example1')

    //const initValue = useMemo(generateDate,[])

    const [counter, setCounter] = useState(generateDate )

    const changer =(statwwwe:number )=>{
        debugger
        return statwwwe+1
    }

    return <>
        <button onClick={() => {
            setCounter(changer)}}>+</button>
        {counter}
    </>
}
