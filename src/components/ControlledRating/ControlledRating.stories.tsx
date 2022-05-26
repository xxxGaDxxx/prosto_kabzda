import React, {useState} from 'react';


import {ControlledRating, RatingType} from './ControlledRating';


export default {
    title: 'Rating stories',
    component: ControlledRating,
}
export const EmptyRating = () => <ControlledRating value={0} onClick={x=>x}/>
export const Rating1 = () => <ControlledRating value={1} onClick={x=>x}/>
export const Rating2 = () => <ControlledRating value={2} onClick={x=>x}/>
export const Rating3 = () => <ControlledRating value={3} onClick={x=>x}/>
export const Rating4 = () => <ControlledRating value={4} onClick={x=>x}/>
export const Rating5 = () => <ControlledRating value={5} onClick={x=>x}/>
export const ChangeRating = () => {

   const [rating, setRating]=useState<RatingType>(5)
    return <ControlledRating value={rating} onClick={setRating}/>
}



