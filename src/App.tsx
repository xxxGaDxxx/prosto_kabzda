import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';
import {UncontrolledRating} from './components/UncontrolledRatint/UncontrolledRating';
import {ControlledRating, RatingType} from './components/ControlledRating/ControlledRating';
import {ControlledAccordion} from './components/ControlledAccordion/ControlledAccordion';
import {ControlledOnOff} from './components/ControlledOnOff/ControlledOnOff';

function App() {
    let [ratingValue, setRatingValue] = useState<RatingType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className="App">
            <PageTitle title={'This is APP'}/>

            <Accordion titleValue={'Menu'} colLapsed={false}/>
            <Accordion titleValue={'WOW'} colLapsed={true}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <OnOff on={true}/>
            <OnOff on={false}/>
            <h3>--- useState ---</h3>

            <UncontrolledOnOff onChange={setSwitchOn}/>{switchOn.toString()}
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledRating onChange={setRatingValue}/>

            <h2>---Controlled---</h2>
            <ControlledRating
                value={ratingValue}
                onClick={setRatingValue}
            />
            <ControlledAccordion
                titleValue={'Menu'}
                colLapsed={accordionCollapsed}
                onChange={()=>setAccordionCollapsed(!accordionCollapsed)}
            />
            <ControlledOnOff
                on={switchOn}
                onChange={setSwitchOn}
            />
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
