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
                {({ compareList, waitingList, cart, storageRemove }) => (
                    <div className={cx('shop-services')}>
                        <div className={cx('shop-services__element')}>
                            <ShopService
                                storage={compareList}
                                storageName="compareList"
                                icon={EQUALITY}
                                removeItem={storageRemove}
                            />
                        </div>
                        <div className={cx('shop-services__element')}>
                            <ShopService
                                storage={waitingList}
                                storageName="waitingList"
                                icon={WAITING}
                                removeItem={storageRemove}
                            />
                        </div>
                        <div className={cx('shop-services__element')}>
                            <ShopService
                                storage={cart}
                                storageName="cart"
                                icon={CART} isCart={true}
                                removeItem={storageRemove}
                            />
                        </div>
                    </div>
                )}
            </ApiConsumer>
        );
    }
}

export default ShopServices;
