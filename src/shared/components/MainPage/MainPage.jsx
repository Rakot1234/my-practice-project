import React, { Component } from 'react';
import './MainPage.scss';
import PageHeader from '../../components/PageHeader/PageHeader';
import Contacts from '../../components/Contacts/Contacts';
import Search from '../../components/Search/Search';
import MainMenu from '../../components/MainMenu/MainMenu';
import Slider from '../../components/Slider/Slider';
import BrandsCarousel from '../../components/BrandsCarousel/BrandsCarousel';

class MainPage extends Component {
    render() {
        return (
            <>
                <PageHeader />
                <Contacts />
                <Search />
                <MainMenu />
                <Slider />
                <BrandsCarousel />
            </>
        );
    }
};

export default MainPage;
