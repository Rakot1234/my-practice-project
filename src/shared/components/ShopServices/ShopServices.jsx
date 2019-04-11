import React, { Component } from 'react';
import './ShopServices.scss';
import cx from 'classnames';
import icons from '../../constants/icons';
import ShopService from './ShopService';
import { ApiConsumer } from '../../utils/context-provider';

class ShopServices extends Component {
    render() {
        const { CART, WAITING, EQUALITY } = icons;

        return (
            <ApiConsumer>
                {({ compareList, waitingList, cart }) => (
                    <div className={cx('shop-services')}>
                        <div className={cx('shop-services__element')}>
                            <ShopService storage={compareList} icon={EQUALITY} />
                        </div>
                        <div className={cx('shop-services__element')}>
                            <ShopService storage={waitingList} icon={WAITING} />
                        </div>
                        <div className={cx('shop-services__element')}>
                            <ShopService storage={cart} icon={CART} isCart={true} />
                        </div>
                    </div>
                )}
            </ApiConsumer>
        );
    }
}

export default ShopServices;
