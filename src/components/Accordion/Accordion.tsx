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

function AccordionTittleMemo(props: AccordionTittlePropsType) {
    console.log(AccordionTittleMemo)
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

const AccordionTittle=React.memo(AccordionTittleMemo)