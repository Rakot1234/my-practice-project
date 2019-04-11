import React, { Component } from 'react';
import './YandexMap.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import defaultPosition from './constants/default-position';

class YandexMap extends Component {
    static propTypes = {
        mapCenter: PropTypes.arrayOf(
            PropTypes.number
        ),
        placemarks: PropTypes.array
    };

    constructor(props) {
        super(props);

        this.state = {
            center: defaultPosition
        }
    };

    setMapBehavior = map => {
        map.behaviors.disable('scrollZoom');
    }

    renderPlacemark(placemark, index) {
        return <Placemark geometry={placemark} key={index} />
    }

    render() {
        const { center } = this.state;
        const { mapCenter, placemarks } = this.props;
        const centerValue = mapCenter.length ? mapCenter : center;

        return (
            <div className={cx('yandex-map')}>
                <YMaps>
                    <Map
                        instanceRef={this.setMapBehavior}
                        state={{ center: centerValue, zoom: 14 }}
                        width="100%"
                        height="100%"
                    >
                        {placemarks.map((placemark, index) => {
                            return this.renderPlacemark(placemark, index);
                        })}
                    </Map>
                </YMaps>
            </div>
        );
    }
};

export default YandexMap;
