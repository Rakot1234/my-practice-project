import React, { Component } from 'react';
import cx from 'classnames';
import Phone from '../../ui/Phone/Phone';
import Button from '../../ui/Button/Button';
import Icon from '../../ui/Icon/Icon';
import Link from '../../ui/Link/Link';
import BlockWrapper from '../../ui/BlockWrapper/BlockWrapper';
import icons from '../../constants/icons';
import logo from '../../../images/logo.png';
import './Contacts.scss';

class Contacts extends Component {
    handleDescriptionClick = () => {
        console.log(1);
    };

    renderLogo() {
        return (
            <div className={cx('contacts__logo')}>
                <a href="/" className={cx('contacts__logo-link')}>
                   <img className={cx('contacts__logo-image')} src={logo} alt="" />
                </a>
            </div>
        );
    }

    renderSocials() {
        return (
            <div className={cx('contacts__socials')}>
                <div className={cx('contacts__socials-wrapper')}>
                    <Icon icon={icons.SKYPE} className={cx('contacts__socials-icon')} />
                    <Link
                        href="#"
                        title="Skype"
                        className={cx('contacts__socials-link')}
                    />
                </div>
                <div className={cx('contacts__socials-wrapper')}>
                    <Icon icon={icons.EMAIL} className={cx('contacts__socials-icon')} />
                    <Link
                        href="#"
                        title="info@pogos.ru"
                        className={cx('contacts__socials-link')}
                    />
                </div>
            </div>
        );
    }

    render() {
        return (
            <BlockWrapper innerColor="white" className={cx('contacts__wrapper')}>
                <div className={cx('contacts')}>
                    {this.renderLogo()}
                    <div className={cx('contacts__info')}>
                        <Phone
                            phone="8 800 77 00 155"
                            description="Звонок по России бесплатный"
                            className={cx('contacts__phone')}
                        />
                        <Phone
                            phone="+7 (391) 2 88 88 75" 
                            description="Заказать обратный звонок"
                            className={cx('contacts__phone')}
                            onClickDescription={this.handleDescriptionClick}
                        />
                        {this.renderSocials()}
                        <Button
                            title="Акции сегодня"
                            color="red"
                            size="large"
                            fontSize="large"
                            href="/"
                            icon={icons.GRAMMOFON}
                            className={cx('contacts__actions')}
                        />
                    </div>
                </div>
            </BlockWrapper>
        );
    }
};

export default Contacts;