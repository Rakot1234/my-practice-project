import React, { PureComponent } from 'react';
import './Phone.scss';
import PropTypes from 'prop-types';
import Link from '../../ui/Link/Link';

class Phone extends PureComponent {
    static propTypes = {
        phone: PropTypes.string.isRequired,
        description: PropTypes.string,
        className: PropTypes.string,
        view: PropTypes.oneOf(['header', 'footer']),
        descriptionEvent: PropTypes.func
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
            descriptionEvent
        } = this.props;
        const isEvent = descriptionEvent ? 'phone__description_with-event' : '';

        return (
            <div className={`phone ${className} phone__view-${view}`}>
                <Link
                    href={`tel:${phone.replace(/[^\d]/g, '')}`}
                    title={phone}
                    className="phone__value"
                />
                <div className={`phone__description ${isEvent}`} onClick={descriptionEvent}>
                    {description}
                </div>
            </div>
        );
    }
};

export default Phone;
