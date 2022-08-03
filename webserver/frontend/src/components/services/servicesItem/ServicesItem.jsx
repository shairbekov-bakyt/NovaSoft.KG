import React from 'react';
import './servicesItem.scss'

const ServicesItem = (props) => {
    const {image, title, description} = props
    return (
        <button className={'servicesItem'}>
            <img src={image} alt={'service'}/>
            <h2>
                {title}
            </h2>
            <p>
                {description}
            </p>
        </button>
    );
};

export default ServicesItem;