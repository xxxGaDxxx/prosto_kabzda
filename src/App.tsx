import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion.tssx';
import {Rating} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';

function App() {
    return (
        <div>
            <PageTitle title={'This is APP'}/>
            <Rating value={3}/>
            <Accordion titleValue={'Menu'} colLapsed={true}/>
            <Accordion titleValue={'WOW'} colLapsed={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <OnOff on={true}/>
            <OnOff on={false}/>
            <Rating value={5}/>
        </div>
    );
}

type PagePropsType = {
    title: string
}

function PageTitle(props: PagePropsType) {
    return <h1>{props.title}</h1>
}


export default App;
