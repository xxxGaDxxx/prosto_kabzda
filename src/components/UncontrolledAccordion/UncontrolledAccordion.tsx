import React, {useState} from 'react';

type AccordionProps = {
    titleValue: string
}

export function UncontrolledAccordion(props: AccordionProps) {
    let [colLapsed, setColLapsed] = useState(false)

    return (
        <div>
            <AccordionTittle title={props.titleValue} onClick={() => setColLapsed(!colLapsed)}/>
            {!colLapsed && <AccordionBody/>}
        </div>
    )
}


type AccordionTittlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTittle(props: AccordionTittlePropsType) {

    return (
        <h3 onClick={() => props.onClick()}>-- {props.title} --</h3>
    )
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