import React, { Component } from 'react';
import './Authorization.scss';
import cx from 'classnames';
import Icon from '../../ui/Icon/Icon';
import Link from '../../ui/Link/Link';
import icons from '../../constants/icons';

class Authorization extends Component {
    renderLogin() {
        return (
            <div className={cx('authorization__login')}>
                <div className={cx('authorization__enter')}>
                    <Link
                        href="/login/"
                        className={cx('authorization__link', 'authorization__enter-link')}
                        hoverColor="sandy"
                        title="Войти"
                    />
                </div>
                <div className={cx('authorization__register')}>
                    <Link
                        href="/register/"
                        className={cx('authorization__link', 'authorization__register-link')}
                        hoverColor="sandy"
                        title="Регистрация"
                    />
                </div>
            </div>
        );
    }

    renderLk() {
        return (
            <div className={cx('authorization__personal')}>
                <Link
                    href="/lk/"
                    className={cx('authorization__link', 'authorization__lk-link')}
                    hoverColor="sandy"
                    title="Личный кабинет"
                />
            </div>
        );
    }

    render() {
        return (
            <div className={cx('authorization')}>
                <Icon className={cx('authorization__icon')} icon={icons.AUTHORISE} />
                {this.renderLogin()}
                {this.renderLk()}
            </div>
        );
    }
};

export default Authorization;