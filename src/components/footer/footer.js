import React, { useState } from 'react';
import { Button } from '../button/button';
import { Modal } from '../modal/modal';
import { IMAGE_RULES } from '../constants/constants';
import './footer.scss';

export const Footer = () => {
    let [showModal, toggleModal] = useState(false);

    return (<footer className="footer">
        <Button shape="regular" onClick={() => toggleModal(!showModal)}>RULES</Button>
        {showModal && <Modal heading='RULES' handleClose={() => toggleModal(!showModal)}>
            <img src={IMAGE_RULES} alt='rules' />
            <div className="rules">
                <ul>
                    <li> If you Win you get 2 points.</li>
                    <li> DRAW Match gives 1 point to each player.</li>
                    <li> If you LOSE you get 0 points.</li>
                </ul>
            </div>
        </Modal>}
    </footer>)
}
