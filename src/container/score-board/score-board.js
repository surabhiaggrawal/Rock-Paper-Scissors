import React from 'react';
import './score-board.scss';

export const ScoreBoard = (props) => {

    return <div className="score-board-container">
        <header><span>ROCK</span><span>PAPER</span><span>SCISSORS</span></header>
        <div className="score-card">
            <div className="score-header">YOUR SCORE</div>
            <div className="score">{props.userScore}</div>
        </div>
        <div className="score-card">
            <div className="score-header">SYSTEM'S SCORE</div>
            <div className="score">{props.systemScore}</div>
        </div>
    </div>
}