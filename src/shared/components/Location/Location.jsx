import React, { PureComponent } from 'react';
import './Location.scss';
import PropTypes from 'prop-types';
import Icon from '../../ui/Icon/Icon';
import icons from '../../constants/icons';

class Location extends PureComponent {
    static propTypes = {
        city: PropTypes.string
    };

    render() {
        const { city } = this.props;

        return (
            <div className="location">
                <Icon className="location__icon" icon={icons.REGION} />
                <div className="location__city">{city}</div>
                <Icon className="location__arrow" icon={icons.REGION_ARROW} />
            </div>
        );
    }
}

export default Location;