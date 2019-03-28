import React, { PureComponent } from 'react'
import './MainMenuElement.scss'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Link from '../../ui/Link/Link'
import Icon from '../../ui/Icon/Icon'
import icons from '../../constants/icons'
import Portal from '../../utils/portal'

class MainMenuList extends PureComponent {
	static propTypes = {
		element: PropTypes.shape({
			id: PropTypes.number,
			title: PropTypes.string,
			link: PropTypes.string,
			children: PropTypes.arrayOf(
				PropTypes.shape({
					id: PropTypes.number,
					title: PropTypes.string,
					link: PropTypes.string,
				})
			),
		}).isRequired,
	}

	constructor(props) {
		super(props)

		this.state = {
			isChildShown: false,
			top: 0,
			right: 0,
		}
	}

	componentDidMount() {
		const { top, right } = this.parentElement.getBoundingClientRect()

		this.setState({
			top: top,
			right: right,
		})
	}

	handleMouseEnter = () => {
		this.setState({ isChildShown: true })
	}

	handleMouseLeave = () => {
		this.setState({ isChildShown: false })
	}

	createElementRef = parent => { this.parentElement = parent }

	renderMenuElement(element, level) {
		const { isChildShown, top, right } = this.state
		const { id, title, link, children } = element
		const menuLevel = level ? level : 'first'

		return (
			<li
				className={cx(
					'main-menu-element',
					`main-menu-element_level_${menuLevel}`
				)}
				key={id}
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
				ref={this.createElementRef}
			>
				{!level && (
					<>
						<Icon
							className={cx('main-menu-element__icon')}
							icon={icons.MENU_ICON}
						/>
						<Icon
							className={cx('main-menu-element__arrow')}
							icon={icons.MENU_ARROW}
						/>
					</>
				)}
				<Link
					className={cx('main-menu-element__link')}
					wrapperClass={cx('main-menu-element__link-wrapper')}
					href={link}
					title={title}
				/>
				{children && isChildShown && (
					<Portal>
						<ul
							className={cx(
								'main-menu-element__list',
								'main-menu-element__list_level_second'
							)}
							style={{ top: top, left: right }}
						>
							{children.map(element =>
								this.renderMenuElement(element, 'second')
							)}
						</ul>
					</Portal>
				)}
			</li>
		)
	}

	render() {
		return this.renderMenuElement(this.props.element)
	}
}

export default MainMenuList
