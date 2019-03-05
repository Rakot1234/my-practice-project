import React, { Component, Fragment } from 'react';
import './MainPage.scss';
import PageHeader from '../../components/PageHeader/PageHeader';
import Contacts from '../../components/Contacts/Contacts';

class MainPage extends Component {
    render() {
        return (
            <Fragment>
                <PageHeader />
                <Contacts />
            </Fragment>
        );
    }
};

export default MainPage;
