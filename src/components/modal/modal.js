import React from 'react';
import './modal.scss';

export const Modal = (props) => {
    return (<div className="modal">
        <div className="modal-content">
            <header className='modal-header'>
                <div className="modal-header-title">{props.heading}</div>
                <div className="close" onClick={props.handleClose}>&times;</div>
            </header>
            {props.children}
        </div>

    </div>)
}