import React, { useState } from 'react';
import './cockpit.scss';
import { USER_WIN, SYSTEM_WIN, TOUR_DRAW } from '../../components/constants/constants'
import { Modal } from '../../components/modal/modal';
import { Playground } from '../playground/playground';
import { DecisionGround } from '../decision-ground/decision-ground';
import { ResultsGround } from '../results-ground/results-ground';
import { ScoreBoard } from '../score-board/score-board';
import { TournamentPicker } from '../tournament-picker/tournament-picker';
import { Button } from '../../components/button/button';

export const Cockpit = () => {
    let [userScore, setUserScore] = useState(0);
    let [maxScore, setMaxScore] = useState();
    let [showTournamentGrd, setTournamentGrd] = useState(true);
    let [systemScore, setSystemScore] = useState(0);
    let [showPlayGround, setPlayGroundFlag] = useState(false);
    let [showDecisionGround, setDecisionGroundFlag] = useState(false);
    let [showResultsGround, setResultsGroundFlag] = useState(false);
    let [userSelection, updateUserSelection] = useState();
    let [systemSelection, updateSystemSelection] = useState();
    let [winner, setWinner] = useState();
    let [tournamentWinner, setTournamentWinner] = useState();
    let [showWinnerModal, setWinnerModal] = useState(false);


    let handleUserSelection = (e) => {
        updateUserSelection(userSelection = e.currentTarget.name);
        setPlayGroundFlag(showPlayGround = false);
        setDecisionGroundFlag(showDecisionGround = true)
    }

    let setTournament = (value) => {
        setTournamentGrd(showTournamentGrd = false);
        setPlayGroundFlag(showPlayGround = true);
        setMaxScore(maxScore = value);
    }

    let updateGroundChange = () => {
        setDecisionGroundFlag(showDecisionGround = false)
        setResultsGroundFlag(showResultsGround = true);
        let winnerObj = decideWinner();
        setUserScore(userScore = userScore + winnerObj.userScore);
        setSystemScore(systemScore = systemScore + winnerObj.systemScore);
        setWinner(winner = winnerObj.user);
        checkAgainstMaxScore();
    }

    let checkAgainstMaxScore = () => {
        if (userScore === systemScore && userScore >= maxScore) {
            setTournamentWinner(tournamentWinner = 'THE TOURNAMENT RESULTED IN A DRAW');
            setWinnerModal(showWinnerModal = true);
        }
        else if (userScore >= maxScore) {
            setTournamentWinner(tournamentWinner = 'YOU WON THE TOURNAMENT');
            setWinnerModal(showWinnerModal = true);
        } else if (systemScore >= maxScore) {
            setTournamentWinner(tournamentWinner = 'SYSTEM WON THE TOURNAMENT');
            setWinnerModal(showWinnerModal = true);
        } else {
            return false;
        }
    }

    let decideWinner = () => {
        if ((userSelection === 'rock' && systemSelection === 'paper') || (userSelection === 'paper' && systemSelection === 'scissors') || (userSelection === 'scissors' && systemSelection === 'rock')) {
            return { user: 'YOU LOSE', userScore: 0, systemScore: 2 };
        } else if ((userSelection === 'rock' && systemSelection === 'rock') || (userSelection === 'paper' && systemSelection === 'paper') || (userSelection === 'scissors' && systemSelection === 'scissors')) {
            return { user: 'DRAW', userScore: 1, systemScore: 1 };
        } else {
            return { user: 'YOU WIN', userScore: 2, systemScore: 0 }
        }
    }

    let replayMatch = async () => {
        new Promise(resolve => { resolve(setResultsGroundFlag(showResultsGround = false)) }).then(
            () => { setPlayGroundFlag(showPlayGround = true); }
        )
    }

    let quitHandler = async () => {
        new Promise(resolve => { resolve(setResultsGroundFlag(showResultsGround = false)) }).then(
            () => {
                setUserScore(userScore = 0);
                setSystemScore(systemScore = 0);
                setTournamentGrd(showTournamentGrd = true);
            }
        )
    }

    let resetTournament = () => {
        setWinnerModal(showWinnerModal = false)
        setResultsGroundFlag(showResultsGround = false)
        setUserScore(userScore = 0);
        setSystemScore(systemScore = 0);
        setTournamentGrd(showTournamentGrd = true);
    }

    return (<div className="cockpit-main">
        <ScoreBoard userScore={userScore} systemScore={systemScore} />
        {!!showTournamentGrd && <TournamentPicker setMaxScore={(value) => setTournament(value)} />}
        {!!showPlayGround && <Playground onClick={(e) => handleUserSelection(e)} />}
        {!!showDecisionGround &&
            <DecisionGround userSelection={userSelection}
                updateSystemSelection={(value) => { updateSystemSelection(systemSelection = value) }}
                updateGroundChange={updateGroundChange} />}
        {!!showResultsGround &&
            <ResultsGround userSelection={userSelection}
                systemSelection={systemSelection}
                winner={winner}
                playAgain={replayMatch}
                quit={quitHandler} />}
        {!!showWinnerModal && <Modal handleClose={resetTournament} heading={tournamentWinner === "YOU WON THE TOURNAMENT" ? 'CONGRATULATIONS..!!' : (tournamentWinner === "SYSTEM WON THE TOURNAMENT" ? 'BETTER LUCK NEXT TIME' : "IT'S A DRAW")}>
            {tournamentWinner === "YOU WON THE TOURNAMENT" ? <div className="winner-modal-text">{tournamentWinner}<div></div><img src={USER_WIN} alt='winner' /></div> :
                (tournamentWinner === "SYSTEM WON THE TOURNAMENT" ? <div className="winner-modal-text">{tournamentWinner}<div></div><img src={SYSTEM_WIN} alt='winner' /></div> :
                    <div className="winner-modal-text">{tournamentWinner}<div></div><img src={TOUR_DRAW} alt='winner' /></div>)}
            <Button shape="regular" onClick={resetTournament}>PLAY AGAIN</Button>
        </Modal>}
    </div >)

}