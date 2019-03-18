import React, { Component } from 'react';
import cx from 'classnames';
import PageHeader from '../../components/PageHeader/PageHeader';
import Contacts from '../../components/Contacts/Contacts';
import Search from '../../components/Search/Search';
import MainMenu from '../../components/MainMenu/MainMenu';
import Slider from '../../components/Slider/Slider';
import BrandsCarousel from '../../components/BrandsCarousel/BrandsCarousel';
import BlockWrapper from '../../ui/BlockWrapper/BlockWrapper';
import { ContextConsumer } from '../../utils/ContextProvider';
import './MainPage.scss';

class MainPage extends Component {
    renderPageHeader(api) {
        return (
            <>
                <PageHeader fetchMenu={api.topMenu}/>
                <Contacts />
                <BlockWrapper innerColor="white" className={cx('main-page__header-wrapper')}>
                    <div className={cx('main-page__header-left')}>
                        <MainMenu fetchMenu={api.mainMenu}/>
                    </div>
                    <div className={cx('main-page__header-right')}>
                        <Search />
                        <Slider fetchSlider={api.sliderParams}/>
                        <BrandsCarousel fetchCarousel={api.brandsCarousel}/>
                    </div>
                </BlockWrapper>
            </>
        );
    } 

    render() {
        return (
            <ContextConsumer>
                {api => (
                    this.renderPageHeader(api)
                )}
            </ContextConsumer>
        );
    }
};

export default MainPage;
