import React, { Component } from 'react';
import './ShopServices.scss';
import cx from 'classnames';
import icons from '../../constants/icons';
import Icon from '../../ui/Icon/Icon';

class ShopServices extends Component {
    render() {
        return (
            <div className={cx('shop-services')}>
                <div className={cx('shop-services__element')}>
                    <Icon className={cx('shop-services__icon')} icon={icons.EQUALITY} />
                    <div className={cx('shop-services__number')}>0</div>
                </div>
                <div className={cx('shop-services__element')}>
                    <Icon className={cx('shop-services__icon')} icon={icons.WAITING} />
                    <div className={cx('shop-services__number')}>0</div>
                </div>
                <div className={cx('shop-services__element')}>
                    <Icon className={cx('shop-services__icon')} icon={icons.CART} />
                    <div className={cx('shop-services__number')}>0 товаров</div>
                </div>
            </div>
        );
    }
}

export default ShopServices;
