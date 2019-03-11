import React, { Component } from 'react';
import './Contacts.scss';
import Phone from '../../ui/Phone/Phone';
import Button from '../../ui/Button/Button';
import Icon from '../../ui/Icon/Icon';
import Link from '../../ui/Link/Link';
import icons from '../../constants/icons';
import BlockWrapper from '../../ui/BlockWrapper/BlockWrapper';
import logo from '../../../images/logo.png';

class Contacts extends Component {
    handleDescriptionClick = () => {
        console.log(1);
    };

    renderLogo() {
        return (
            <div className="contacts__logo">
                <a href="/" className="contacts__logo-link">
                   <img className="contacts__logo-image" src={logo} alt="" />
                </a>
            </div>
        );
    }

    renderSocials() {
        return (
            <div className="contacts__socials">
                <div className="contacts__socials-wrapper">
                    <Icon icon={icons.SKYPE} className="contacts__socials-icon"/>
                    <Link
                        href="#"
                        title="Skype"
                        className="contacts__socials-link"
                    />
                </div>
                <div className="contacts__socials-wrapper">
                    <Icon icon={icons.EMAIL} className="contacts__socials-icon" />
                    <Link
                        href="#"
                        title="info@pogos.ru"
                        className="contacts__socials-link"
                    />
                </div>
            </div>
        );
    }

    render() {
        return (
            <BlockWrapper innerColor="white" className="contacts__wrapper">
                <div className="contacts">
                    {this.renderLogo()}
                    <div className="contacts__info">
                        <Phone
                            phone="8 800 77 00 155"
                            description="Звонок по России бесплатный"
                            className="contacts__phone"
                        />
                        <Phone
                            phone="+7 (391) 2 88 88 75" 
                            description="Заказать обратный звонок"
                            className="contacts__phone"
                            descriptionEvent={this.handleDescriptionClick}
                        />
                        {this.renderSocials()}
                        <Button
                            title="Акции сегодня"
                            color="red"
                            size="large"
                            fontSize="large"
                            href="/"
                            icon={icons.GRAMMOFON}
                            className="contacts__actions"
                        />
                    </div>
                </div>
            </BlockWrapper>
        );
    }
};

export default Contacts;