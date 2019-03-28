import React, { PureComponent } from 'react';
import './ShopAdvantages.scss';
import cx from 'classnames';
import Advantage from './ShopAdvantage'
import advantages from './constants/advantages-list';

class ShopAdvantages extends PureComponent {
    renderAdvantages() {
        return (
            <div className={cx('shop-advantages__list')}>
                {advantages.map((advantage, index) => {
                    const { id, ...advatageProps } = advantage;

                    return <Advantage {...advatageProps} key={id + index} />
                })}
            </div>
        );
    }

    render() {
        return (
            <div className={cx('shop-advantages')}>
                <div className={cx('shop-advantages__title')}>
                    Преимущества Интернет-гипермаркета «POGOS.RU»
                </div>
                {this.renderAdvantages()}
            </div>
        );
    }
};

export default ShopAdvantages;
