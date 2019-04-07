import React, { Component } from 'react';
import './MainMapTile.scss';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Link from '../../ui/Link/Link';
import Button from '../../ui/Button/Button';

class MainMapTile extends Component {
    static propTypes = {
        id: PropTypes.number,
        title: PropTypes.string,
        adress: PropTypes.string,
        phone: PropTypes.string,
        email: PropTypes.string,
        working: PropTypes.string,
        spot: PropTypes.array,
        buttonClick: PropTypes.func
    };

    handleButtonClick = () => {
        const { buttonClick, spot } = this.props;
        
        buttonClick && buttonClick(spot);
    }

    renderTileBody(shop) {
        const { title, adress, phone, email, working } = this.props;

        return (
            <div className={cx('main-map-tile__body')}>
                <div className={cx('main-map-tile__title')}>{title}</div>
                <div className={cx('main-map-tile__adress')}>{adress}</div>
                <div className={cx('main-map-tile__phone')}>
                    Телефон: 
                    <Link
                        className={cx('main-map-tile__phone-link')}
                        href={`tel:${phone.trim()}`}
                        title={phone}
                    />
                </div>
                <div className={cx('main-map-tile__email')}>
                    Почта:
                    <Link
                        className={cx('main-map-tile__email-link')}
                        href={`mailto:${email}`}
                        title={email}
                    />
                </div>
                <div className={cx('main-map-tile__working')}>
                    Часы работы:
                    <span dangerouslySetInnerHTML={{ __html: working }} />
                </div>
            </div>
        );
    }

    renderTileButton() {
        return (
            <div className={cx('main-map-tile__button-wrapper')}>
                <Button
                    size="small"
                    className={cx('main-map-tile__button')}
                    title="Посмотреть на карте"
                    onClick={this.handleButtonClick}
                />
            </div>
        );
    }

    render() {
        return (
            <div className={cx('main-map-tile__tile')}>
                {this.renderTileBody()}
                {this.renderTileButton()}
            </div>
        );
    }
};

export default MainMapTile;
