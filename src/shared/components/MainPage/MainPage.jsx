import React, { Component } from 'react';
import './MainPage.scss';
import PageHeader from '../../components/PageHeader/PageHeader';
import Contacts from '../../components/Contacts/Contacts';
import Search from '../../components/Search/Search';
import MainMenu from '../../components/MainMenu/MainMenu';
import Slider from '../../components/Slider/Slider';
import BrandsCarousel from '../../components/BrandsCarousel/BrandsCarousel';
import { ContextConsumer } from '../../utils/ContextProvider';

class MainPage extends Component {
    render() {
        return (
            <ContextConsumer>
                {api => (
                    <>
                        <PageHeader fetchMenu={api.topMenu}/>
                        <Contacts />
                        <Search />
                        <MainMenu fetchMenu={api.mainMenu}/>
                        <Slider fetchSlider={api.sliderParams}/>
                        <BrandsCarousel fetchCarousel={api.brandsCarousel}/>
                    </>
                )}
            </ContextConsumer>
        );
    }
};

export default MainPage;
