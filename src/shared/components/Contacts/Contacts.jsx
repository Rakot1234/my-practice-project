import React, { Component } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Button from '../../ui/Button/Button'
import BlockWrapper from '../../ui/BlockWrapper/BlockWrapper'
import SiteContacts from '../../ui/SiteContacts/SiteContacts'
import icons from '../../constants/icons'
import images from '../../constants/images'
import './Contacts.scss'

class Contacts extends Component {
	static propTypes = {
		onDescriptionClick: PropTypes.func,
	}

	renderLogo() {
		return (
			<div className={cx('contacts__logo')}>
				<a href="/" className={cx('contacts__logo-link')}>
					<img
						className={cx('contacts__logo-image')}
						src={images.SITE_LOGO}
						alt=""
					/>
				</a>
			</div>
		)
	}

	render() {
		return (
			<BlockWrapper
				innerColor="white"
				className={cx('contacts__wrapper')}
			>
				<div className={cx('contacts')}>
					{this.renderLogo()}
					<div className={cx('contacts__info')}>
						<SiteContacts onDescriptionClick={this.props.onDescriptionClick}/>
						<Button
							title="Акции сегодня"
							color="red"
							size="large"
							fontSize="large"
							href="/"
							icon={icons.GRAMMOFON}
							className={cx('contacts__actions')}
						/>
					</div>
				</div>
			</BlockWrapper>
		)
	}
}

export default Contacts
