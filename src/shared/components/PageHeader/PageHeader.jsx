import React, { Component } from 'react';
import './PageHeader.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Authorization from '../../components/Authorization/Authorization';
import Location from '../../components/Location/Location';
import TopMenu from '../../components/TopMenu/TopMenu';

class PageHeader extends Component {
    static propTypes = {
        handleFetchMenu: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            region: 'Красноярск',
            isFetching: true,
            topMenu: []
        };
    };

    componentDidMount() {
        this.handleFetchMenu();
    }

    handleFetchMenu = async () => {
        const { handleFetchMenu } = this.props;
        const menu = await handleFetchMenu();

        this.setState({
            topMenu: menu,
            isFetching: false 
        });
    }

    render() {
        const { region, topMenu, isFetching } = this.state;

        return (
            <div className={cx('header')}>
                <div className={cx('header__left')}>
                    <Location city={region}/>
                    <TopMenu menu={topMenu} fetching={isFetching} />
                </div>
                <div className={cx('header__right')}>
                    <Authorization />
                </div>
            </div>
        );
    };
}

export default PageHeader;