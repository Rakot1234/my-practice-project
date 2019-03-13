import React, { PureComponent } from 'react';
import './Phone.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Link from '../../ui/Link/Link';

class Phone extends PureComponent {
    static propTypes = {
        phone: PropTypes.string.isRequired,
        description: PropTypes.string,
        className: PropTypes.string,
        view: PropTypes.oneOf(['header', 'footer']),
        onClickDescription: PropTypes.func
    };

    static defaultProps = {
        className: ' ',
        view: 'header'
    };

    render() {
        const {
            phone,
            description,
            className,
            view,
            onClickDescription
        } = this.props;

        return (
            <div className={cx('phone', className, `phone__view-${view}`)}>
                <Link
                    href={`tel:${phone.replace(/[^\d]/g, '')}`}
                    title={phone}
                    className={cx('phone__value')}
                />
                <div
                    className={cx('phone__description', {'phone__description_with-event': onClickDescription})}
                    onClick={onClickDescription}
                >
                    {description}
                </div>
            </div>
        );
    }
};

export default Phone;
