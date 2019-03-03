import React, { Component } from 'react';
import './Authorization.scss';
import Icon from '../../ui/Icon/Icon';
import icons from '../../constants/icons';

class Authorization extends Component {
    renderLogin() {
        return (
            <div className="authorization__login">
                <div className="authorization__enter">
                    <a href="/login/" className="authorization__enter-link">
                        Войти
                    </a>
                </div>
                <div className="authorization__register">
                    <a href="/register/" className="authorization__register-link">
                        Регистрация
                    </a>
                </div>
            </div>
        );
    }

    renderLk() {
        return (
            <div className="authorization__personal">
                <a href="/lk/" className="authorization__lk-link">
                    Личный кабинет
                </a>
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