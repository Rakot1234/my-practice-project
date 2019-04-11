import React, { Component } from 'react';
import './ServicesHint.scss';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Portal from '../../utils/portal'

class ServicesHint extends Component {
    static propTypes = {
        items: PropTypes.object
    };

    render() {
        const { items } = this.props;
        console.log(items);

        return (
            <Portal>
                <div className={cx('services-hint')}>
                    1
                </div>
            </Portal>
        );
    }
};

export default ServicesHint;
