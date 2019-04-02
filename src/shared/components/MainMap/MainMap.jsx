import React, { Component } from 'react';
import './MainMap.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import Map from '../../ui/YandexMap/YandexMap';
import Tiles from './MainMapTiles';


class MainMap extends Component {
    static propTypes = {
        fetchMap: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            shops: [],
            isFetching: true
        };
    };

    componentDidMount() {
        this.fetchMap();
    }

    fetchMap = async () => {
        const { fetchMap } = this.props;
        const mapData = await fetchMap();

        this.setState({
            isFetching: false,
            shops: mapData
        });
    }

    renderTabs() {
        const { shops } = this.state;

        return (
            <Tabs>
                <TabList>
                    {shops.map((element, index) => {
                        const { id, city } = element;

                        return (
                            <Tab className={cx('main-map__tab-title')} key={id + index}>
                                {city}
                            </Tab>
                        );
                    })}
                </TabList>
                {this.renderPanels()}
            </Tabs>
        );
    }

    renderPanels() {
        const { shops } = this.state;

        return (
            <div className={cx('main-map__tiles-wrapper')}>
                {shops.map((element, index) => {
                    return (
                        <TabPanel key={element.city + index}>
                            <Tiles tiles={element.salons} />;
                        </TabPanel>
                    );
                })}
            </div>
        );
    }

    render() {
        return (
            <div className={cx('main-map')}>
                <div className={cx('main-map__title')}>Наши магазины</div>
                {this.renderTabs()}
                <div className={cx('main-map__map-wrapper')}>
                    <Map />
                </div>
            </div>
        );
    }
}

export default MainMap;
