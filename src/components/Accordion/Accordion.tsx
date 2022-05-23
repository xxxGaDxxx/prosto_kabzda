import React from 'react';

type AccordionProps = {
    titleValue: string
    colLapsed: boolean
}

export function Accordion(props: AccordionProps) {
    return (
        <div>
            <AccordionTittle title={props.titleValue}/>
            {!props.colLapsed && <AccordionBody/>}

        </div>
    )
}

type AccordionTittlePropsType = {
    title: string
}

function AccordionTittle(props: AccordionTittlePropsType) {
    return <h3>-- {props.title} --</h3>
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