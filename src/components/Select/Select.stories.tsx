import {Select} from './Select';

import {useState} from 'react';


export default {
    title: 'Select stories',
    component: Select,
}

export const WithValue = () => {
    const [value, setValue] = useState('2')

    return (
        <>
            <Select
                onChange={setValue}
                value={value}
                items={[
                    {title: 'Minsk', value: '1'},
                    {title: 'Grodno', value: '2'},
                    {title: 'Ozery', value: '3'},
                ]}
            />

        </>
    )
}


export const WithoutValue = () => {
    const [value, setValue] = useState(null)

    return (
        <>
            <Select
                onChange={setValue}
                value={value}
                items={[
                    {title: 'Minsk', value: '1'},
                    {title: 'Grodno', value: '2'},
                    {title: 'Ozery', value: '3'},
                ]}
            />
        </>
    )
}

