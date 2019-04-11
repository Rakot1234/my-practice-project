import React, { Component } from 'react';
import './ShopServices.scss';
import cx from 'classnames';
import Icon from '../../ui/Icon/Icon';
import icons from '../../constants/icons';
import { ApiConsumer } from '../../utils/context-provider';
import { cartGoods } from '../../utils/misc-functions';

class ShopServices extends Component {
    renderCart(cart) {
        const cartItems = Object.keys(cart).length;
        const cartText = cartGoods(cartItems);

        return (
            <div className={cx('shop-services__element')}>
                <Icon className={cx('shop-services__icon')} icon={icons.CART} />
                <div className={cx('shop-services__number')}>{`${cartItems} ${cartText}`}</div>
            </div>
        );
    }
    render() {
        return (
            <ApiConsumer>
                {({ compareList, waitingList, cart }) => (
                    <div className={cx('shop-services')}>
                        <div className={cx('shop-services__element')}>
                            <Icon className={cx('shop-services__icon')} icon={icons.EQUALITY} />
                            <div className={cx('shop-services__number')}>{Object.keys(compareList).length}</div>
                        </div>
                        <div className={cx('shop-services__element')}>
                            <Icon className={cx('shop-services__icon')} icon={icons.WAITING} />
                            <div className={cx('shop-services__number')}>{Object.keys(waitingList).length}</div>
                        </div>
                        {this.renderCart(cart)}
                    </div>
                )}
            </ApiConsumer>
        );
    }
}

export default ShopServices;
