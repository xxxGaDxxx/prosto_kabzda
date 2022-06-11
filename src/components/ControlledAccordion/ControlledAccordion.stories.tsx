import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {ControlledAccordion} from './ControlledAccordion';
import {Accordion} from '../Accordion/Accordion';





export default {
    title: 'Accordion stories',
    component:  Accordion,
}

const collBack = action('Accordion mode change event fired')

export const MenuCollapsedMode = () => <ControlledAccordion colLapsed={false} titleValue={'Menu'} onChange={collBack}/>
export const UsersUnCollapsedMode = () => <ControlledAccordion colLapsed={true} titleValue={'Users'} onChange={collBack}/>

export const ModeChanging = () => {

   const [value, setValue]=useState<boolean>(true)
    return <ControlledAccordion colLapsed={value} titleValue={'Menu'} onChange={()=>setValue(!value)}/>
}



