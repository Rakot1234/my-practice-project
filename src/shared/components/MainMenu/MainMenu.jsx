import React, { Component } from 'react';
import './MainMenu.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';
import MenuElement from './MainMenuElement';
import Preloader from '../../ui/Preloader/Preloader';
import Icon from '../../ui/Icon/Icon';
import icons from '../../constants/icons';

class MainMenu extends Component {
    static propTypes = {
        fetchMenu: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            isHidden: false,
            isFullHeight: true,
            title: '',
            items: [],
            isFetching: true
        };
    };

    componentDidMount() {
        this.fetchMenu();
    }

    handleTitleClick = () => {
        const { isFullHeight } = this.state;

        isFullHeight ? this.handleCloseMenu() : this.handleOpenMenu();
    };

    handleOpenMenu = () => {
        this.setState(({ isHidden }) => ({ isHidden: !isHidden }));

        setTimeout(() => {
            this.setState(({ isFullHeight }) => ({ isFullHeight: !isFullHeight }));
        }, 10);     
    }

    handleCloseMenu = () => {
        this.setState(({ isFullHeight }) => ({ isFullHeight: !isFullHeight }));

        setTimeout(() => {
            this.setState(({ isHidden }) => ({ isHidden: !isHidden }));
        }, 1000);
    }

    fetchMenu = async () => {
        const { fetchMenu } = this.props;
        const menu = await fetchMenu();

        this.setState({
            title: menu.menuTitle,
            items: menu.items,
            isFetching: false
        });
    }

    renderMenu() {
        const { items = [], isHidden, isFullHeight, title } = this.state;

        return (
            <>
                <div className={cx('main-menu__title')} onClick={this.handleTitleClick}>
                    {title}
                    <Icon className={cx('main-menu__title-icon')} icon={icons.MENU_BURGER} />
                </div>
                {!isHidden && 
                    <ul
                        className={cx(
                            'main-menu__list',
                            { 'main-menu__list_visible': isFullHeight },
                            { 'main-menu__list_hidden': !isFullHeight }
                        )}>
                        {items.map(element => <MenuElement element={element} key={element.id} />)}
                    </ul>
                }
            </>
        )
    }

    render() {
        const { isFetching } = this.state;

        return (
            <div className={cx('main-menu')}>
                {isFetching ?
                    <Preloader /> :
                    this.renderMenu()
                }
            </div>
        );
    }
};

export default MainMenu;
