import React, { Component } from 'react';
import './YandexMap.scss';
import cx from 'classnames';
import { YMaps, Map } from 'react-yandex-maps';

class YandexMap extends Component {
    render() {
        return (
            <div className={cx('yandex-map')}>
                <YMaps>
                    <Map defaultState={{ center: [55.75, 37.57], zoom: 10 }} width="100%" height="100%" />
                </YMaps>
            </div>
        );
    }
};

export default YandexMap;
