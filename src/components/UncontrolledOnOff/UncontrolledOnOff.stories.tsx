import React from 'react';
import {UncontrolledOnOff} from './UncontrolledOnOff';
import {action} from '@storybook/addon-actions';


export default {
    title: 'UncontrolledOnOff stories',
    component: UncontrolledOnOff,
}

const collBack = action('on or off clicked')

export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={collBack}/>
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={collBack}/>






