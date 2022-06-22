import React, {useReducer} from 'react';
import {reduser, TOGGLE_COLLAPSED} from './reduser';


type AccordionProps = {
    titleValue: string
}


export function UncontrolledAccordion(props: AccordionProps) {

    // let [colLapsed, setColLapsed] = useState(false)
    let [state, dispatch] = useReducer(reduser, {collapsed:false})

    return (
        <div>
            {/* <AccordionTittle title={props.titleValue} onClick={() => setColLapsed(!colLapsed)}/>*/}
            <AccordionTittle title={props.titleValue} onClick={() => {
                dispatch({type: TOGGLE_COLLAPSED})
            }}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}


type AccordionTittlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTittleMemo(props: AccordionTittlePropsType) {
    console.log(AccordionTittleMemo)

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
const AccordionTittle=React.memo(AccordionTittleMemo)