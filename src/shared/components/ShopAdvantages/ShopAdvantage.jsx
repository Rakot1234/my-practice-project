import React, { PureComponent } from 'react';
import './ShopAdvantage.scss';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../../ui/Icon/Icon';
import icons from '../../constants/icons';

class ShopAdvantage extends PureComponent {
    static propTypes = {
        title: PropTypes.string,
        icon: PropTypes.string
    }

    render() {
        const { title, icon } = this.props;
        return (
            <div className={cx('shop-advantage')}>
                <div className={cx('shop-advantage__icon-wrapper')}>
                    <Icon className={cx('shop-advantage__icon')} icon={icons[icon]} />
                </div>
                <div className={cx('shop-advantage__title')}>
                    {title}
                </div>
            </div>
        );
    }
};

export default ShopAdvantage;
