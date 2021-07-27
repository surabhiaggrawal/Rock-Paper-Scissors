import React from 'react';
import { Button } from '../button/button';
import * as Constant from '../constants/constants';

export const ButtonGenerator = (props) => {
    let selectionIcon = null;
    switch (props.selection) {
        case 'rock':
            selectionIcon = <Button shape="circular" classNm="rock" name="rock" ><img src={Constant.ICON_ROCK} alt="rock_icon" /></Button>
            break;
        case 'paper':
            selectionIcon = <Button shape="circular" classNm="paper" name="paper"><img src={Constant.ICON_PAPER} alt="paper_icon" /></Button>
            break;
        case 'scissors':
            selectionIcon = <Button shape="circular" classNm="scissors" name="scissors"><img src={Constant.ICON_SCISSORS} alt="scissors_icon" /></Button>
            break;
        default:
            break;
    }
    return selectionIcon;
}