import React, { PureComponent } from 'react';
import './Preloader.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';
import spinner from '../../../images/spinner.gif';

class Preloader extends PureComponent {
    static propTypes = {
        size: PropTypes.oneOf(["small", "medium", "large"])
    };

    static defaultProps = {
        size: "medium"
    }

    render() {
        const { size } = this.props;

        return (
            <div className={cx('preloader', `preloader_size_${size}`)}>
                <img src={spinner} className={cx('preloader__image')} alt="preloader"/>
            </div>
        );
    }
};

export default Preloader;
