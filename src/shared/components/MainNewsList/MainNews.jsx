import React, { PureComponent } from 'react';
import './MainNews.scss';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { newsImages } from '../../constants/images';

class MainNews extends PureComponent {
    static propTypes = {
        data: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.string
    }

    render() {
        const { data, description, image } = this.props;

        return (
            <div className={cx('main-news')}>
                <div className={cx('main-news__image-wrapper')}>
                    <img src={newsImages[image]} alt="" className={cx('main-news__image')} />
                </div>
                <div className={cx('main-news__news-wrapper')}>
                    <div className={cx('main-news__data')}>{data}</div>
                    <div className={cx('main-news__description')}>{description}</div>
                </div>
            </div>
        );
    }
};

export default MainNews;
