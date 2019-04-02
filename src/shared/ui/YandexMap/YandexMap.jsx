import React, { Component } from 'react';
import './YandexMap.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { YMaps, Map } from 'react-yandex-maps';

class YandexMap extends Component {
    static propTypes = {
        handleCenterPosition: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            center: [45.041251, 38.972137]
        }
    };

    setMapBehavior = map => {
        map.behaviors.disable('scrollZoom');
    }

    render() {
        const { center } = this.state;

        return (
            <div className={cx('yandex-map')}>
                <YMaps>
                    <Map
                        instanceRef={this.setMapBehavior}
                        state={{ center: center, zoom: 14 }}
                        width="100%"
                        height="100%"
                    />
                </YMaps>
            </div>
        );
    }
};

export default YandexMap;
