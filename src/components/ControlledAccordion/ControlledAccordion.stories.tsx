import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {ControlledAccordion} from './ControlledAccordion';
import {Accordion} from '../Accordion/Accordion';


export default {
    title: 'Accordion stories',
    component: Accordion,
}

const collBack = action('Accordion mode change event fired')
const onClickCallback = action('some item was clicked')

export const MenuCollapsedMode = () => <ControlledAccordion colLapsed={false} titleValue={'Menu'} onChange={collBack}
                                                            items={[]} onClick={onClickCallback}/>
export const UsersUnCollapsedMode = () => <ControlledAccordion colLapsed={false} titleValue={'Users'}
                                                               onChange={collBack}
                                                               items={[
                                                                   {title: 'Wlad', value: 1},
                                                                   {title: 'Margo', value: 2},
                                                                   {title: 'Pascha', value: 3}]}
                                                               onClick={onClickCallback}/>

export const ModeChanging = () => {

    const [value, setValue] = useState<boolean>(true)
    return <ControlledAccordion colLapsed={value}
                                titleValue={'Menu'}
                                onChange={() => setValue(!value)}
                                items={[
                                    {title: 'Wlad', value: 1},
                                    {title: 'Margo', value: 2},
                                    {title: 'Pascha', value: 3}
                                ]}
                                onClick={(id) => {
                                    alert(`user with ID ${id} soould be heppy`)
                                }}/>
}



