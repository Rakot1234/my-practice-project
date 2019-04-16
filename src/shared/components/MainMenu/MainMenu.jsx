import React, { Component } from 'react';
import './MainMenu.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';
import MenuElement from './MainMenuElement';
import Preloader from '../../ui/Preloader/Preloader';
import Icon from '../../ui/Icon/Icon';
import icons from '../../constants/icons';
import { menuParams } from './constants/settings';

class MainMenu extends Component {
    static propTypes = {
        isHidden: PropTypes.bool,
        handleFetchMenu: PropTypes.func
    };

    static defaultProps = {
        isHidden: false,
        isFullHeight: true,
    };

    constructor(props) {
        super(props);

        this.state = {
            isHidden: props.isHidden,
            isFullHeight: !props.isHidden,
            title: '',
            items: [],
            isFetching: true
        };
    };

    componentDidMount() {
        this.handleFetchMenu();
    }

    handleTitleClick = () => {
        const { isFullHeight } = this.state;

        isFullHeight ? this.handleCloseMenu() : this.handleOpenMenu();
    };

    handleOpenMenu = () => {
        this.setState(({ isHidden }) => ({ isHidden: !isHidden }));

        setTimeout(() => {
            this.setState(({ isFullHeight }) => ({ isFullHeight: !isFullHeight }));
        }, menuParams.MENU_SHOW_TIMEOUT);
    }

    handleCloseMenu = () => {
        this.setState(({ isFullHeight }) => ({ isFullHeight: !isFullHeight }));

        setTimeout(() => {
            this.setState(({ isHidden }) => ({ isHidden: !isHidden }));
        }, menuParams.MENU_HIDE_TIMEOUT);
    }

    handleFetchMenu = async () => {
        const { handleFetchMenu } = this.props;
        const menu = await handleFetchMenu();

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
                <div className={cx('main-menu__wrapper')}>
                    {isFetching ?
                        <Preloader /> :
                        this.renderMenu()
                    }
                </div>
            </div>
        );
    }
};

export default MainMenu;
