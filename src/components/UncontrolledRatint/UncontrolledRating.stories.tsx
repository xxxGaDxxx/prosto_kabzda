import React from 'react';
import {action} from '@storybook/addon-actions';
import {UncontrolledRating} from './UncontrolledRating';


export default {
    title: 'UncontrolledRating stories',
    component: UncontrolledRating,
}
const collBack = action('rating changed inside component')

export const EmptyRating = () => <UncontrolledRating defaultValue={0}  onChange={collBack}/>
export const Rating1 = () => <UncontrolledRating defaultValue={1} onChange={collBack}/>
export const Rating2 = () => <UncontrolledRating defaultValue={2} onChange={collBack}/>
export const Rating3 = () => <UncontrolledRating defaultValue={3} onChange={collBack}/>
export const Rating4 = () => <UncontrolledRating defaultValue={4} onChange={collBack}/>
export const Rating5 = () => <UncontrolledRating defaultValue={5} onChange={collBack}/>



