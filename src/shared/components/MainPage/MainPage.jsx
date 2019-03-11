import React, { Component, Fragment } from 'react';
import './MainPage.scss';
import PageHeader from '../../components/PageHeader/PageHeader';
import Contacts from '../../components/Contacts/Contacts';
import Search from '../../components/Search/Search';

class MainPage extends Component {
    render() {
        return (
            <Fragment>
                <PageHeader />
                <Contacts />
                <Search />
            </Fragment>
        );
    }
};

export default MainPage;
