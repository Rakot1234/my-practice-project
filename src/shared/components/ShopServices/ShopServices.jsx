import React, { Component } from 'react';
import './ShopServices.scss';
import cx from 'classnames';
import Icon from '../../ui/Icon/Icon';
import icons from '../../constants/icons';
import { ContextConsumer } from '../../utils/context-provider';

class ShopServices extends Component {
    renderCart(cart) {
        const cartItems = Object.keys(cart).length;
        let cartText;

        switch (true) {
            case cartItems === 1:
                cartText = 'товар';
                break;
            case cartItems === 2 || cartItems === 3 || cartItems === 4:
                cartText = 'товара';
                break;
            default:
                cartText = 'товаров';
        }

        return (
            <div className={cx('shop-services__element')}>
                <Icon className={cx('shop-services__icon')} icon={icons.CART} />
                <div className={cx('shop-services__number')}>{`${cartItems} ${cartText}`}</div>
            </div>
        );
    }
    render() {
        return (
            <ContextConsumer>
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
            </ContextConsumer>
        );
    }
}

export default ShopServices;
