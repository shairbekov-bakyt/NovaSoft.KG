import React from 'react';
import './main.scss'
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Services from "../../components/services/Services";

const Main = () => {
    return (
        <div className={'main'}>
            {/*HELLO*/}
            <Header/>
            <Banner/>
            <Services/>
        </div>
    );
};

export default Main;