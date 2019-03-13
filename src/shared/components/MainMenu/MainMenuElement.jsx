import React, { PureComponent } from 'react';
import './MainMenuElement.scss';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Link from '../../ui/Link/Link';
import Icon from '../../ui/Icon/Icon';
import icons from '../../constants/icons';

class MainMenuList extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isChildShown: false
        };
    };

    static propTypes = {
        element: PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            link: PropTypes.string,
            children: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number,
                    title: PropTypes.string,
                    link: PropTypes.string
                })
            )
        }).isRequired
    };

    handleMouseEnter = () => {
        this.setState({isChildShown: true});
    };

    handleMouseLeave = () => {
        this.setState({isChildShown: false});
    };

    renderMenuElement(element, level) {
        const { isChildShown } = this.state;
        const { id, title, link, children } = element;
        const menuLevel = level ? level : 'first';

        return (
            <li
                className={cx('main-menu-element', `main-menu-element_level_${menuLevel}`)}
                key={id}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
            >
                {!level && 
                    <>
                        <Icon className={cx('main-menu-element__icon')} icon={icons.MENU_ICON} />
                        <Icon className={cx('main-menu-element__arrow')} icon={icons.MENU_ARROW} />
                    </>
                }
                <Link
                    className={cx('main-menu-element__link')}
                    href={link}
                    title={title}
                />
                {children && isChildShown &&
                    <ul className={cx('main-menu-element__list', 'main-menu-element__list_level_second')}>
                        {children.map(element => (this.renderMenuElement(element, 'second')))}
                    </ul>
                }
            </li>
        );
    }

    render() {
        return this.renderMenuElement(this.props.element);
    }
};

export default MainMenuList;
