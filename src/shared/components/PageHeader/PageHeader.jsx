import React, { Component } from 'react';
import './PageHeader.scss';
import { topMenu } from '../../constants/menu';
import Authorization from '../../components/Authorization/Authorization';
import Location from '../../components/Location/Location';
import TopMenu from '../../components/TopMenu/TopMenu';

class PageHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            region: 'Красноярск',
        };
    };

    render() {
        const { region } = this.state;

        return (
            <div className="header">
                <Location city={region}/>
                <TopMenu menu={topMenu} />
                <Authorization />
            </div>
        );
    };
}

export default PageHeader;