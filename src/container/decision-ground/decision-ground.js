import React, { useState, useEffect } from 'react';
import './decision-ground.scss';
import { ButtonGenerator } from '../../components/button-generator/button-generator';

export const DecisionGround = (props) => {

    let [systemChoice, setSystemChoice] = useState();

    useEffect(() => {
        helper();
    }, [])


    let generateSystemPick = () => {
        let choices = ['rock', 'paper', 'scissors'];
        let systemPick = Math.floor((Math.random() * 10) + 1) % 3;
        setSystemChoice(systemChoice = choices[parseInt(systemPick)]);
        let timer = setTimeout(() => {
            props.updateSystemSelection(systemChoice);
            props.updateGroundChange();
            clearTimeout(timer);
        }, 1000);
    }

    let helper = () => {
        let timer = setTimeout(() => {
            generateSystemPick();
            clearTimeout(timer);
        }, 1500);
    }

    return (<div className="decision-ground-main">
        <div className="user-section">
            <header className='decision-header'> you picked</header>
            {<ButtonGenerator selection={props.userSelection} />}
        </div>
        <div className="house-section">
            <header className='decision-header'> the House picked</header>
            {!!systemChoice ? <ButtonGenerator selection={systemChoice} /> : <div className="background-circle"></div>}
        </div>
    </div>)
}
