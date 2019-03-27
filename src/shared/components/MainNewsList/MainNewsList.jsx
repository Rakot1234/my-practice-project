
import React, { PureComponent } from 'react';
import './MainNewsList.scss';
import cx from 'classnames';
import Link from '../../ui/Link/Link';
import News from './MainNews';
import texts from './constants/texts';
import { news } from './constants/news';

class MainNewsList extends PureComponent {
    renderNewsHeader() {
        const { TITLE, LINK_TEXT } = texts;

        return (
            <div className={cx('main-news-list__title-row')}>
                <div className={cx('main-news-list__title')}>{TITLE}</div>
                <Link className={cx('main-news-list__all-link')} href="/news/" title={LINK_TEXT} />
            </div>
        );
    }

    renderNews() {
        return (
            <div className={cx('main-news-list__news')}>
                {news.map((news, index) => {
                    const { id, ...newsParams } = news;

                    return <News {...newsParams} key={id + index} />;
                })}
            </div>
        );
    }

    render() {
        return (
            <div className={cx('main-news-lst')}>
                {this.renderNewsHeader()}
                {this.renderNews()}
            </div>
        );
    }
};

export default MainNewsList;
