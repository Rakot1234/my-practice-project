import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Link from '../../ui/Link/Link';

class MainMapTiles extends Component {
    static propTypes = {
        tiles: PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            adress: PropTypes.string,
            phone: PropTypes.string,
            email: PropTypes.string,
            working: PropTypes.string,
            spot: PropTypes.array
        })
    };

    renderTile(shop, index) {
        const { title, adress, phone, email, working, spot } = shop;

        return (
            <div className={cx('main-map-tiles__tile')} key={index + title}>
                <div className={cx('main-map-tiles__title')}>{title}</div>
                <div className={cx('main-map-tiles__adress')}>{adress}</div>
                <div className={cx('main-map-tiles__phone')}>
                    <Link href={`tel:${phone.trim()}`} title={`Телефон: ${phone}`} />
                </div>
                <div className={cx('main-map-tiles__email')}>
                    <Link href={`mailto:${email}`} title={`Почта: ${email}`} />
                </div>
                <div className={cx('main-map-tiles__working')}>
                    {`Часы работы: ${working}`}
                </div>
                {spot}
            </div>
        );
    }

    render() {
        const { tiles } = this.props;

        return (
            <div className={cx('main-map-tiles')}>
                {tiles.map((shop, index) => {
                    return this.renderTile(shop, index);
                })}
            </div>
        );
    }
};

export default MainMapTiles;
