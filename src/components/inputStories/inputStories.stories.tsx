import React, {ChangeEvent, useRef, useState} from 'react';






export default {
    title: 'input',

}

export const UncontrolledInput = () =><input value={'woy-woy'}/>

export const TrackValueControlledInput = () =>{
    const [value, setValue]=useState('')

    const onChangeInput =(e:ChangeEvent<HTMLInputElement>)=>{
        setValue(e.currentTarget.value)
    }

    return<><input onChange={onChangeInput}/> - {value} - </>
}

export const GetValueButtonUncontrolledInput = () =>{
    const [value, setValue]=useState('')
    const inputRef = useRef<HTMLInputElement>(null)

 const seve = ()=>{
      const el= inputRef.current as HTMLInputElement
     setValue(el.value)
 }
    return<><input ref={inputRef}/><button onClick={seve}>save</button> -actual value: {value} - </>
}

export const ControlledInput = () => {
    const [parentValue, setParentValue]= useState('')

    const onChangeInput =(e:ChangeEvent<HTMLInputElement>)=>{
        setParentValue(e.currentTarget.value)
    }
  return <input value={parentValue} onChange={onChangeInput}/>
}


export const ControlledCheckbox = () => {
    const [parentValue, setParentValue]= useState(true)

    const onChangeCheckbox =(e:ChangeEvent<HTMLInputElement>)=>{
        setParentValue(e.currentTarget.checked)
    }
    return <input type='checkbox' checked={parentValue} onChange={onChangeCheckbox}/>
}

export const ControlledSelect= () => {
    const [parentValue, setParentValue]= useState<string | undefined>(undefined)

    const onChangeSelect =(e:ChangeEvent<HTMLSelectElement>)=>{
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChangeSelect}>
        <option>none</option>
        <option value={'1'}>Grodno</option>
        <option value={'2'}>Minsk</option>
        <option value={'3'}>Moscow</option>
    </select>

}
