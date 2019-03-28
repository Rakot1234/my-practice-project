import React, { PureComponent } from 'react';
import './MainReview.scss';
import cx from 'classnames';
import PropTypes from 'prop-types';
import images from '../../constants/images';

class Review extends PureComponent {
    static propTypes = {
        description: PropTypes.string,
        image: PropTypes.string
    };

    render() {
        const { description, image } = this.props;

        return (
            <div className={cx('main-review')}>
                <div className={cx('main-review__image-wrapper')}>
                    <img src={images[image]} alt="" className={cx('main-review__image')} />
                </div>
                <div className={cx('main-review__descriprion')}>{description}</div>
            </div>
        );
    }
}

export default Review;
