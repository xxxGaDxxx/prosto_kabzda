import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledAccordion';
import {UncontrolledRatint} from './components/UncontrolledRatint/UncontrolledAccordion';

function App() {
    return (
        <div className="App">
            <PageTitle title={'This is APP'}/>

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
            <h3>--- useState ---</h3>

            <UncontrolledOnOff/>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledRatint/>
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
