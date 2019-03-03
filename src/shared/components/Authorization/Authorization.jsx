import React, { Component } from 'react';
import './Authorization.scss';
import Icon from '../../ui/Icon/Icon';
import Link from '../../ui/Link/Link';
import icons from '../../constants/icons';

class Authorization extends Component {
    renderLogin() {
        return (
            <div className="authorization__login">
                <div className="authorization__enter">
                    <Link
                        href="/login/"
                        className="authorization__link authorization__enter-link"
                        hoverColor="sandy"
                        title="Войти"
                    />
                </div>
                <div className="authorization__register">
                    <Link
                        href="/register/"
                        className="authorization__link authorization__register-link"
                        hoverColor="sandy"
                        title="Регистрация"
                    />
                </div>
            </div>
        );
    }

    renderLk() {
        return (
            <div className="authorization__personal">
                <Link
                    href="/lk/"
                    className="authorization__link authorization__lk-link"
                    hoverColor="sandy"
                    title="Личный кабинет"
                />
            </div>
        );
    }

    render() {
        return (
            <div className="authorization">
                <Icon className="authorization__icon" icon={icons.authorise} />
                {this.renderLogin()}
                {this.renderLk()}
            </div>
        );
    }
};

export default Authorization;