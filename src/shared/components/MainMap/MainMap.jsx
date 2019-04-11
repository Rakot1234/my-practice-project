import React, { Component } from 'react';
import './MainMap.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import Map from '../../ui/YandexMap/YandexMap';
import Tile from './MainMapTile';
import BlockWrapper from '../../ui/BlockWrapper/BlockWrapper';
import Carousel from '../../ui/ItemsCarousel/ItemsCarousel';
import Preloader from '../../ui/Preloader/Preloader';
import { scrollTo } from '../../utils/misc-functions';

class MainMap extends Component {
    static propTypes = {
        handleFetchMap: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            shops: [],
            carouselParams: {},
            isFetching: true,
            selectedIndex: 0,
            ymapCenter: []
        };
    };

    getMapRef = map => { this.map = map }

    componentDidMount() {
        this.handleFetchMap();
    }

    handleFetchMap = async () => {
        const { handleFetchMap } = this.props;
        const mapData = await handleFetchMap();

        this.setState({
            isFetching: false,
            shops: mapData.shops,
            carouselParams: mapData.carouselParams
        });
    }

    handleTabTitleClick = i => this.setState({ selectedIndex: i })

    handleMapCenter = ymapCenter => {
        this.setState({ ymapCenter },
        () => scrollTo(0, this.map.offsetTop))
    }

    renderTabs() {
        const { shops, selectedIndex } = this.state;

        return (
            <Tabs
                selectedIndex={selectedIndex}
                onSelect={this.handleTabTitleClick}
                className={cx('main-map__tabs')}
            >
                <div className={cx('main-map__tabs-header')}>
                    <div className={cx('main-map__title')}>Наши магазины</div>
                    <TabList className={cx('main-map__tabs-titles')}>
                        {shops.map((element, index) => {
                            const { id, city } = element;

                            return (
                                <Tab
                                    className={cx('main-map__tab-title')}
                                    key={id + index}
                                >
                                    {city}
                                </Tab>
                            );
                        })}
                    </TabList>
                </div>
                {this.renderPanels()}
            </Tabs>
        );
    }

    renderPanels() {
        const { shops, carouselParams } = this.state;

        return (
            <div className={cx('main-map__tiles-wrapper')}>
                {shops.map((element, index) => {
                    return (
                        <TabPanel key={element.city + index}>
                            <Carousel
                                carouselParams={carouselParams}
                                isCustomControls={true}
                                slidesToStop={2}
                                view="ymaps"
                            >
                                {element.salons.map((shop, index) => {
                                    return <Tile {...shop} key={index + shop.title} onButtonClick={this.handleMapCenter}/>
                                })}
                            </Carousel>
                        </TabPanel>
                    );
                })}
            </div>
        );
    }

    renderMap() {
        const { ymapCenter, shops } = this.state;
        const spots = shops.reduce((spotsList, region) => {
            return spotsList.concat(region.salons.map(shop => shop.spot));
        }, []);

        return (
            <div className={cx('main-map')}>
                <BlockWrapper
                    innerColor="white"
                    className={cx('main-page__header-wrapper')}
                    bottomBorder={true}
                >
                    {this.renderTabs()}
                </BlockWrapper>
                <div className={cx('main-map__map-wrapper')} ref={this.getMapRef}>
                    <Map placemarks={spots} mapCenter={ymapCenter} />
                </div>
            </div>
        );
    }

    render() {
        const { isFetching } = this.state;

        return isFetching ? <Preloader size="large" /> : this.renderMap();
    }
}

export default MainMap;
