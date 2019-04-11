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
        isCart: PropTypes.bool
    };

    static defaultProps = {
        isCart: false
    };

    constructor(props) {
        super(props);

        this.state = {
            isHovered: false
        };
    }

    handleMouseIn = () => this.setState({ isHovered: true })

    handleMouseOut = () => this.setState({ isHovered: false })

    render() {
        const { storage, icon, isCart } = this.props;
        const { isHovered } = this.state;
        const storageItems = Object.keys(storage).length;

        return (
            <div
                className={cx('shop-service')}
                onMouseEnter={this.handleMouseIn}
                onMouseLeave={this.handleMouseOut}
            >
                <Icon className={cx('shop-service__icon')} icon={icon} />
                {isCart ? 
                    <div className={cx('shop-service__number')}>{`${storageItems} ${cartGoods(storageItems)}`}</div> :
                    <div className={cx('shop-service__number')}>{storageItems}</div>
                }
                {isHovered && !!storageItems && <ServicesHint items={storage} />}
            </div>
        );
    }
};

export default ShopService;
