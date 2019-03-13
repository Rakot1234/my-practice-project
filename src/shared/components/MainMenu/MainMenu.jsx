import React, { Component } from 'react';
import './MainMenu.scss';
import cx from 'classnames';
import { MENU_TITLE, mainMenu } from '../../constants/mainMenu';

class MainMenu extends Component {
    render() {
        return (
            <div className={cx('main-menu')}>
                <div className={cx('main-menu__title')}>
                     {MENU_TITLE}
                </div>
            </div>
        );
    }
};

export default MainMenu;
