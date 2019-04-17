import React, { Component } from 'react';
import './ShopService.scss';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../../ui/Icon/Icon';
import ServicesHint from '../../ui/ServicesHint/ServicesHint';
import { cartGoods } from '../../utils/misc-functions';

class ShopService extends Component {
    static propTypes = {
        storage: PropTypes.object.isRequired,
        icon: PropTypes.string.isRequired,
        storageName: PropTypes.string,
        isCart: PropTypes.bool,
        removeItem: PropTypes.func,
    };

    static defaultProps = {
        isCart: false
    };

    constructor(props) {
        super(props);

        this.state = {
            isHovered: false,
            bottomPosition: 0,
            rightPosition: 0,
        };
    }

    handleMouseIn = () => {
        const { bottom, right } = this.service.getBoundingClientRect();

        this.setState({
            bottomPosition: bottom,
            rightPosition: right,
            isHovered: true 
        });
    }

    handleMouseOut = () => this.setState({ isHovered: false })

    getServiceRef = service => this.service = service

    render() {
        const { storage, icon, isCart, removeItem, storageName } = this.props;
        const { isHovered, bottomPosition, rightPosition } = this.state;
        const storageItems = Object.keys(storage).length;

        return (
            <div
                className={cx('shop-service')}
                onMouseEnter={this.handleMouseIn}
                onMouseLeave={this.handleMouseOut}
                ref={this.getServiceRef}
            >
                <Icon className={cx('shop-service__icon')} icon={icon} />
                {isCart ? 
                    <div className={cx('shop-service__number')}>{`${storageItems} ${cartGoods(storageItems)}`}</div> :
                    <div className={cx('shop-service__number')}>{storageItems}</div>
                }
                {isHovered && !!storageItems &&
                    <ServicesHint
                        items={storage}
                        bottom={bottomPosition}
                        right={rightPosition}
                        onRemoveItem={removeItem}
                        storageName={storageName}
                    />
                }
            </div>
        );
    }
};

export default ShopService;
