import React, { Component } from 'react';
import './MainMenu.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';
import MenuElement from './MainMenuElement';
import Preloader from '../../ui/Preloader/Preloader';

class MainMenu extends Component {
    static propTypes = {
        fetchMenu: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            isHidden: true,
            title: '',
            items: [],
            isFetching: true
        };
    };

    componentDidMount() {
        this.fetchMenu();
    }

    handleTitleClick = () => {
        this.setState(({ isHidden }) => ({ isHidden: !isHidden }));
    };

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
        const { items = [], isHidden, title } = this.state;

        return (
            <>
                <div className={cx('main-menu__title')} onClick={this.handleTitleClick}>
                    {title}
                </div>
                {!isHidden && 
                    <ul className={cx('main-menu__list')}>
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
