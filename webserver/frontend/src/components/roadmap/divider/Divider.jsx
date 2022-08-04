import React from 'react';
import './divider.scss'

import arrow from '../../../images/roadmap/divider.png'

const Divider = () => {
    return (
        <div className={'divider'}>
            <img src={arrow} alt={'arrow'}/>
        </div>
    );
};

export default Divider;