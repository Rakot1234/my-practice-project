import React, { PureComponent } from 'react';
import './ServicesItem.scss';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { goodsImages } from '../../constants/images';

class ServicesItem extends PureComponent {
    static propTypes = {
        amount: PropTypes.number,
        discount: PropTypes.number,
        rating: PropTypes.number,
        image: PropTypes.string,
        itemCode: PropTypes.string,
        price: PropTypes.string,
        onRemoveItem: PropTypes.func
    };

    handleRemoveClick = () => {
        const { onRemoveItem, itemCode } = this.props;

        onRemoveItem && onRemoveItem(itemCode);
    }

    render() {
        const { discount, image, price, title } = this.props;
        const priceValue = !!discount ?
            Number(price) * ((100 - Number(discount)) / 100) :
            price;
        
        return (
            <div className={cx('services-item')}>
                <div className={cx('services-item__image-wrapper')}>
                    <img src={goodsImages[image]} alt="" className={cx('services-item__image')} />
                </div>
                <div className={cx('services-item__title')}>{title}</div>
                <div className={cx('services-item__price')}>{`${priceValue} ₽`}</div>
                <div className={cx('services-item__remove')} onClick={this.handleRemoveClick}>x</div>
            </div>
        );
    }
};

export default ServicesItem;
