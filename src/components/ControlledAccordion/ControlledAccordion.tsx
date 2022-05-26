import React from 'react';

type AccordionProps = {
    titleValue: string
    colLapsed: boolean
    onChange:()=>void
}

export function ControlledAccordion(props: AccordionProps) {
    return (
        <div>
            <AccordionTittle
                title={props.titleValue}
                onChange={props.onChange}
            />
            {!props.colLapsed && <AccordionBody/>}

        </div>
    )
}

type AccordionTittlePropsType = {
    title: string
    onChange:()=>void
}

function AccordionTittle(props: AccordionTittlePropsType) {
    return <h3 onClick={(e)=>props.onChange()}>-- {props.title} --</h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}