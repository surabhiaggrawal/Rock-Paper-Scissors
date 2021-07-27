import React from 'react';
import './button.scss';

export const Button = (props) => {
    const { classNm, shape = 'regular', name } = props;
    let additionalClass = shape === 'regular' ? 'regular' : 'circular';
    return <button name={name} className={['rps-button', additionalClass, classNm].join(" ")} onClick={props.onClick}>
        {props.children}
    </button>
}

