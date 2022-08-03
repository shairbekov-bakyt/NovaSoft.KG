import React from 'react';
import './services.scss'
import ServicesItem from "./servicesItem/ServicesItem";

import design from '../../images/services/design.png'
import mobile from '../../images/services/mobile.png'
import website from '../../images/services/website.png'

const Services = () => {
    return (
        <div className={'services'}>
            <div className="container">
                <h1>
                    Our services
                </h1>
                <ul className={'services__list'}>
                    <ServicesItem title={"Design"}
                                  description={"Killer features all over the place"}
                                  image={design}
                    />
                    <ServicesItem title={"Mobile"}
                                  description={"Killer features all over the place"}
                                  image={mobile}
                    />
                    <ServicesItem title={"Website"}
                                  description={"Killer features all over the place"}
                                  image={website}
                    />
                </ul>
            </div>
        </div>
    );
};

export default Services;