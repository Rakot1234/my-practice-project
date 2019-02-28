import React, { PureComponent } from 'react';
import './Location.scss';
import PropTypes from 'prop-types';

class Location extends PureComponent {
    static propTypes = {
        city: PropTypes.string
    };

    render() {
        const { city } = this.props;

        return (
            <div className="location">
                <div className="location__arrow"/>
                <div className="location__city">{city}</div>
            </div>
        );
    }
}

export default Location;