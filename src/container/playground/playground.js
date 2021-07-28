import React from 'react';
import './playground.scss';
import { Button } from '../../components/button/button';
import * as Constant from '../../components/constants/constants';

export const Playground = (props) => {

    return (<div className="playground">
        <div className="box-top">
            <Button shape="circular" classNm="paper" name="paper" onClick={props.onClick}><img src={Constant.ICON_PAPER} alt="paper_icon" /></Button>
            <div className="background-img-div"></div>
            <Button shape="circular" classNm="scissors" name="scissors" onClick={props.onClick}><img src={Constant.ICON_SCISSORS} alt="scissors_icon" /></Button>
        </div>
        <div className="background-img-slant-1"></div>
        <div className="background-img-slant-2"></div>
        <div className="box-bottom">
            <Button shape="circular" classNm="rock" name="rock" onClick={props.onClick}><img src={Constant.ICON_ROCK} alt="rock_icon" /></Button>
        </div>
    </div>)
}