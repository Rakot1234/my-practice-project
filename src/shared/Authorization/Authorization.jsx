import React, { Component } from 'react';
import './Authorization.scss';

class Authorization extends Component {
    render() {
        return (
            <div className="authorization">
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
                <div className="authorization__personal">
                    <a href="/lk/" className="authorization__lk-link">
                        Личный кабинет
                    </a>
                </div>
            </div>
        );
    }
};

export default Authorization;