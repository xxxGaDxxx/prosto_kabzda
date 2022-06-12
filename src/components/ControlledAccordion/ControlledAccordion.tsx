import React from 'react';

export type ItemsType={
    title:string
    value:any
}


type AccordionProps = {
    titleValue: string
    colLapsed: boolean
    onChange: () => void
    items: ItemsType[]
    onClick:(value:any)=>void
}

export function ControlledAccordion(props: AccordionProps) {
    return (
        <div>
            <AccordionTittle
                title={props.titleValue}
                onChange={props.onChange}
            />
            {!props.colLapsed && <AccordionBody  items={props.items} onClick={props.onClick}/>}

        </div>
    )
}

type AccordionTittlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTittle(props: AccordionTittlePropsType) {
    return <h3 onClick={() => props.onChange()}>-- {props.title} --</h3>
}

type AccordionBodyProps = {
    items: ItemsType[]
    onClick:(value:any)=>void
}

function AccordionBody(props:AccordionBodyProps) {

    return (
        <ul>
            { props.items.map((e,i)=><li onClick={()=>{props.onClick(e.value)}} key={i }>{e.title}</li>) }
        </ul>
    )
}