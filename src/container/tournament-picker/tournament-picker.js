import React from 'react';
import './tournament-picker.scss';

export const TournamentPicker = (props) => {

    let handleClick = (e) => {
        let score = e.target.parentNode.id;
        props.setMaxScore(parseInt(score));
    }

    return (<div className="tournament-picker-main">
        <header className="tournament-heading">Pick your tournament</header>
        <div className="card-container">
            <div className="tournament-card" id="5" onClick={(e) => handleClick(e)}>
                <header className="tournament-max-score">5 Points</header>
                <div className="tournament-desc">The player who reaches score 5 or more first, wins the game</div>
            </div>
            <div className="tournament-card" id="10" onClick={(e) => handleClick(e)}>
                <header className="tournament-max-score">10 Points</header>
                <div className="tournament-desc">The player who reaches score 10 or more first, wins the game</div>
            </div>
            <div className="tournament-card" id="15" onClick={(e) => handleClick(e)}>
                <header className="tournament-max-score">15 Points</header>
                <div className="tournament-desc">The player who reaches score 15 or more first, wins the game</div>
            </div>
            <div className="tournament-card" id="25" onClick={(e) => handleClick(e)}>
                <header className="tournament-max-score">25 Points</header>
                <div className="tournament-desc">The player who reaches score 25 or more first, wins the game</div>
            </div>
        </div>
    </div>)
}