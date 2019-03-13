import React, { PureComponent } from 'react';
import './Location.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../../ui/Icon/Icon';
import icons from '../../constants/icons';

class Location extends PureComponent {
    static propTypes = {
        city: PropTypes.string
    };

    render() {
        const { city } = this.props;

        return (
            <div className={cx('location')}>
                <Icon className={cx('location__icon')} icon={icons.REGION} />
                <div className={cx('location__city')}>{city}</div>
                <Icon className={cx('location__arrow')} icon={icons.REGION_ARROW} />
            </div>
        );
    }
}

export default Location;