import React, { PureComponent } from 'react';
import './ProductTile.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import icons from '../../constants/icons';
import { goodsImages } from '../../constants/images';
import texts, { activeBuyButton, passiveBuyButton, STARS } from './constants/constants';
import STORAGES from '../../constants/storages';

class ProductTile extends PureComponent {
    static propTypes = {
        id: PropTypes.number,
        itemCode: PropTypes.string,
        image: PropTypes.string,
        rating: PropTypes.number,
        title: PropTypes.string,
        discount: PropTypes.number,
        price: PropTypes.string,
        amount: PropTypes.number,
        storage: PropTypes.object
    };

    constructor(props) {
        super(props);

        this.state = {
            buyAmount: 1,
            isInCompare: false,
            isInWaiting: false,
            isInCart: false
        }
    }

    componentDidMount() {
        this.handleStorageCheck();
    }

    componentDidUpdate() {
        this.handleStorageCheck();
    }

    handleStorageCheck = () => {
        const { COMPARE, WAITING, CART } = STORAGES;
        const { itemCode, storage } = this.props;

        this.setState({
            isInCompare: !!storage[COMPARE][itemCode],
            isInWaiting: !!storage[WAITING][itemCode],
            isInCart: !!storage[CART][itemCode]
        });
    }

    handlePlusClick = () => {
        const { amount } = this.props;

        this.setState(({ buyAmount }) => ({
            buyAmount: buyAmount === amount ?
                       buyAmount :
                       buyAmount + 1
        }));
    }

    handleMinusClick = () => {
        this.setState(({ buyAmount }) => ({
            buyAmount: buyAmount === 1 ?
                       buyAmount :
                       buyAmount - 1
        }));
    }

    handleEqualityAdd = () => {
        const { storage: { storageRemove, storageAdd }, ...item } = this.props;
        const { isInCompare } = this.state;

        isInCompare && this.setState(
            ({ isInCompare }) => ({ isInCompare: !isInCompare }),
            () => storageRemove(STORAGES.COMPARE, item.itemCode)
        );

        !isInCompare && this.setState(
            ({ isInCompare }) => ({ isInCompare: !isInCompare }),
            () => storageAdd(STORAGES.COMPARE, item.itemCode, item)
        );
    }

    handleWaitingAdd = () => {
        const { storage: { storageRemove, storageAdd } , ...item } = this.props;
        const { amount, itemCode } = item;
        const { isInWaiting } = this.state;

        if (!!amount) {
            return;
        }

        isInWaiting && this.setState(
            ({ isInWaiting }) => ({ isInWaiting: !isInWaiting }),
            () => storageRemove(STORAGES.WAITING, itemCode)
        );

        !isInWaiting && this.setState(
            ({ isInWaiting }) => ({ isInWaiting: !isInWaiting }),
            () => storageAdd(STORAGES.WAITING, item.itemCode, item)
        );
    }

    handleCartAdd = () => {
        const { storage: { storageRemove, storageAdd }, ...item } = this.props;
        const { amount, itemCode } = item;
        const { isInCart, buyAmount } = this.state;
        const itemData = { ...item, amount: buyAmount }

        if (!amount) {
            return;
        }

        isInCart && this.setState(
            ({ isInCart }) => ({ isInCart: !isInCart }),
            () => storageRemove(STORAGES.CART, itemCode)
        );

        !isInCart && this.setState(
            ({ isInCart }) => ({ isInCart: !isInCart }),
            () => storageAdd(STORAGES.CART, itemCode, itemData)
        )
    }

    renderCompareIcon() {
        return (
            <div className={cx('product-tile__equality')}>
                <div
                    className={cx(
                        'product-tile__equality-icon',
                        { 'product-tile__equality-icon_active': this.state.isInCompare }
                    )}
                    onClick={this.handleEqualityAdd}
                />
            </div>
        );
    }

    renderWaitingIcon() {
        return (
            <div className={cx('product-tile__waiting', { 'product-tile__waiting_disabled': !!this.props.amount })}>
                <div
                    className={cx(
                        'product-tile__waiting-icon',
                        { 'product-tile__waiting-icon_active': this.state.isInWaiting }
                    )}
                    onClick={this.handleWaitingAdd}
                />
            </div>
        );
    }

    renderIconsRow() {
        return (
            <div className={cx('product-tile__icons-row')}>
                <div className={cx('product-tile__code')}>
                    {`${texts.CODE} ${this.props.itemCode}`}
                </div>
                <div className={cx('product-tile__icons')}>
                    {this.renderCompareIcon()}
                    {this.renderWaitingIcon()}
                </div>
            </div>
        );
    }

    renderRatingRow() {
        const { discount, rating } = this.props;

        return (
            <div className={cx('product-tile__rating-row')}>
                <div className={cx('product-tile__rating')}>
                    {STARS.map((star, index) => {
                        const { id } = star;
                        const isActive = index + 1 <= rating;

                        return (
                            <div
                                className={cx('product-tile__star', { 'product-tile__star_active': isActive })}
                                key={index + id}
                            />
                        );
                    })}
                </div>
                {!!discount &&
                    <div className={cx('product-tile__discount')}>
                        {`${texts.DISCOUNT} ${discount}%`}
                    </div>
                }
            </div>
        );
    }

    renderProductInfo() {
        const { title, price, discount } = this.props;
        const discountPrice = !!discount ?
            Number(price) * ((100 - Number(discount)) / 100) :
            price;

        return (
            <>
                <div className={cx('product-tile__title')}>{title}</div>
                <div className={cx('product-tile__price-row')}>
                    <div className={cx('product-tile__price')}>
                        {`${discountPrice} ₽`}
                    </div>
                    {!!discount && 
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
        const buttonAction = !!amount ? this.handleCartAdd : this.handleWaitingAdd;
        const isPlusActive = buyAmount === amount;
        const isMinusActive = buyAmount === 1;


        return (
            <div className={cx('product-tile__buy-wrapper')}>
                {!!amount && 
                    <div className={cx('product-tile__amount')}>
                        <Icon
                            className={cx(
                                'product-tile__amount-icon',
                                'product-tile__amount-minus',
                                { 'product-tile__amount-icon_disabled': isMinusActive }
                            )}
                            icon={icons.MINUS_AMOUNT}
                            onClick={this.handleMinusClick}
                        />
                        {buyAmount}
                        <Icon
                            className={cx(
                                'product-tile__amount-icon',
                                'product-tile__amount-plus',
                                { 'product-tile__amount-icon_disabled': isPlusActive }
                            )}
                            icon={icons.PLUS_AMOUNT}
                            onClick={this.handlePlusClick}
                        />
                    </div>
                }
                <Button
                    className={cx('product-tile__buy')}
                    size="medium"
                    hoverColor="black"
                    { ...buyButton }
                    onClick={buttonAction}
                />
            </div>
        );
    }

    renderInCartButton() {
        return (
            <div className={cx('product-tile__buy-wrapper')}>
                <Button
                    className={cx('product-tile__buy')}
                    size="medium"
                    hoverColor="black"
                    color="black"
                    fontColor="white"
                    title="В корзине"
                    onClick={this.handleCartAdd}
                />
            </div>
        );
    }

    render() {
        const { image, title } = this.props;
        const { isInCart } = this.state;

        return (
            <div className={cx('product-tile')}>
                {this.renderIconsRow()}
                <div className={cx('product-tile__image-wrapper')}>
                    <img src={goodsImages[image]} alt={title} className={cx('product-tile__image')}/>
                </div>
                {this.renderRatingRow()}
                {this.renderProductInfo()}
                {isInCart ? this.renderInCartButton() : this.renderBuyBlock()}
            </div>
        );
    }
};

export default ProductTile;

