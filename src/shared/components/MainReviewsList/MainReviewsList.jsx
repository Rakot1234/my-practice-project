import React, { PureComponent } from 'react';
import './MainReviewsList.scss';
import cx from 'classnames';
import Review from './MainReview';
import texts from './constants/texts';
import reviews from './constants/reviews';

class MainReviewsList extends PureComponent {
    renderReviews() {
        return (
            <div className={cx('main-reviews-list__list')}>
                {reviews.map((review, index) => {
                    const { id, ...reviewParams} = review;

                    return <Review {...reviewParams} key={id + index} />;
                })}
            </div>
        );
    }

    render() {
        return (
            <div className={cx('main-reviews-list')}>
                <div className={cx('main-reviews-list__title')}>{texts.TITLE}</div>
                {this.renderReviews()}
            </div>
        );
    }
}

export default MainReviewsList;
