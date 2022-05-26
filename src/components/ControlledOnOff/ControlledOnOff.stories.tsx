import React, {useState} from 'react';
import {ControlledOnOff} from './ControlledOnOff';
import {action} from '@storybook/addon-actions';





export default {
    title: 'OnOff stories',
    component: ControlledOnOff,
}

const collBack = action('on or off clicked')

export const OnMode = () => <ControlledOnOff on={true} onChange={collBack}/>
export const OffMode = () => <ControlledOnOff on={false} onChange={collBack}/>

export const ModeChanging = () => {

   const [value, setValue]=useState<boolean>(true)
    return <ControlledOnOff on={value} onChange={setValue}/>
}



