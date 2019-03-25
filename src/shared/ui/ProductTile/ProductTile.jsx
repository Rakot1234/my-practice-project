import React, { Component } from 'react';
import './ProductTile.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import icons from '../../constants/icons';
import { goodsImages } from '../../constants/images';
import texts, { activeBuyButton, passiveBuyButton } from './constants/constants';

class ProductTile extends Component {
    static propTypes = {
        id: PropTypes.number,
        item_code: PropTypes.string,
        image: PropTypes.string,
        rating: PropTypes.number,
        title: PropTypes.string,
        discount: PropTypes.number,
        price: PropTypes.string,
        amount: PropTypes.number
    };

    constructor(props) {
        super(props);

        this.state = {
            buyAmount: 1
        }
    }

    renderIconsRow() {
        const { item_code } = this.props;

        return (
            <div className={cx('product-tile__icons-row')}>
                <div className={cx('product-tile__code')}>
                    {`${texts.CODE} ${item_code}`}
                </div>
                <div className={cx('product-tile__icons')}>
                    <div className={cx('product-tile__equality')}>
                        <div className={cx('product-tile__equality-icon')} />
                    </div>
                    <div className={cx('product-tile__waiting')}>
                        <div className={cx('product-tile__waiting-icon')} />
                    </div>
                </div>
            </div>
        );
    }

    renderRatingRow() {
        const { discount } = this.props;

        return (
            <div className={cx('product-tile__rating-row')}>
                <div className={cx('product-tile__rating')}>
                    <div className={cx('product-tile__star')}>
                        <div className={cx('product-tile__star')}>
                            <div className={cx('product-tile__star')}>
                                <div className={cx('product-tile__star')}>
                                    <div className={cx('product-tile__star')} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {discount &&
                    <div className={cx('product-tile__discount')}>
                        {`${texts.DISCOUNT} ${discount}%`}
                    </div>
                }
            </div>
        );
    }

    renderProductInfo() {
        const { title, price, discount } = this.props;
        const discountPrice = discount ? Number(price) * ( (100 - Number(discount)) / 100) : price;

        return (
            <>
                <div className={cx('product-tile__title')}>{title}</div>
                <div className={cx('product-tile__price-row')}>
                    <div className={cx('product-tile__price')}>
                        {`${discountPrice} ₽`}
                    </div>
                    {discount && 
                        <div className={cx('product-tile__old-price')}>
                            {`${price} ₽`}
                        </div>
                    }
                </div>
            </>
        );
    }

    renderBuyBlock() {
        const { buyAmount } = this.state;
        const { amount } = this.props;
        const buyButton = !!amount ? activeBuyButton : passiveBuyButton;

        return (
            <div className={cx('product-tile__buy-wrapper')}>
                {!!amount && 
                    <div className={cx('product-tile__amount')}>
                        <Icon
                            className={cx('product-tile__amount-icon', 'product-tile__amount-minus')}
                            icon={icons.MINUS_AMOUNT}
                        />
                        {buyAmount}
                        <Icon
                            className={cx('product-tile__amount-icon', 'product-tile__amount-plus')}
                            icon={icons.PLUS_AMOUNT}
                        />
                    </div>
                }
                <Button
                    className={cx('product-tile__buy')}
                    size="medium"
                    hoverColor="black"
                    { ...buyButton }
                />
            </div>
        );
    }

    render() {
        const { image, title } = this.props;

        return (
            <div className={cx('product-tile')}>
                {this.renderIconsRow()}
                <div className={cx('product-tile__image-wrapper')}>
                    <img src={goodsImages[image]} alt={title} className={cx('product-tile__image')}/>
                </div>
                {this.renderRatingRow()}
                {this.renderProductInfo()}
                {this.renderBuyBlock()}
            </div>
        );
    }
};

export default ProductTile;

