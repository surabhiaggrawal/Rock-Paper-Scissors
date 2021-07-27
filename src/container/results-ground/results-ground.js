import React from "react";
import './results-ground.scss';
import { ButtonGenerator } from '../../components/button-generator/button-generator';
import { Button } from "../../components/button/button";

export const ResultsGround = (props) => {
    return (<div className="results-ground-main">
        <div className="user-section">
            <header className='decision-header'> you picked</header>
            {<ButtonGenerator selection={props.userSelection} />}
        </div>
        <div className="declare-result">
            <div className="winner-name">{props.winner}</div>
            <Button shape="regular" onClick={props.playAgain}>PLAY AGAIN</Button>
            <Button shape="regular" classNm='quit' onClick={props.quit}>QUIT</Button>
        </div>
        <div className="house-section">
            <header className='decision-header'> the House picked</header>
            <ButtonGenerator selection={props.systemSelection} />
        </div>
    </div>);
}