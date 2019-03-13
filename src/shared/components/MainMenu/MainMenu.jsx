import React, { Component } from 'react';
import './MainMenu.scss';
import cx from 'classnames';
import MenuElement from './MainMenuElement';
import { MENU_TITLE, mainMenu } from '../../constants/mainMenu';

class MainMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isHidden: true
        };
    };

    handleTitleClick = () => {
        this.setState(({isHidden}) => ({isHidden: !isHidden}));
    };

    renderMenu() {
        return (
            <ul className={cx('main-menu__list')}>
                {mainMenu.map(element => <MenuElement element={element} key={element.id} />)}
            </ul>
        )
    }

    render() {
        const { isHidden } = this.state;

        return (
            <div className={cx('main-menu')}>
                <div className={cx('main-menu__title')} onClick={this.handleTitleClick}>
                     {MENU_TITLE}
                </div>
                {!isHidden && this.renderMenu()}
            </div>
        );
    }
};

export default MainMenu;
