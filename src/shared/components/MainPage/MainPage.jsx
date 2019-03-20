import React, { Component } from 'react'
import cx from 'classnames'
import PageHeader from '../../components/PageHeader/PageHeader'
import Contacts from '../../components/Contacts/Contacts'
import Search from '../../components/Search/Search'
import MainMenu from '../../components/MainMenu/MainMenu'
import Slider from '../../components/HeadSlider/HeadSlider'
import BrandsCarousel from '../../components/BrandsCarousel/BrandsCarousel'
import BlockWrapper from '../../ui/BlockWrapper/BlockWrapper'
import Popup from '../../ui/Popup/Popup'
import { ContextConsumer } from '../../utils/ContextProvider'
import './MainPage.scss'

class MainPage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isPopupOpened: false,
		}
	}

	handlePopupShow = () => {
		this.setState(({ isPopupOpened }) => ({ isPopupOpened: !isPopupOpened }))
    }

	renderPageHeader(api) {
		return (
			<>
				<PageHeader fetchMenu={api.topMenu} />
				<Contacts descriptionClick={this.handlePopupShow} />
				<BlockWrapper
					innerColor="white"
					className={cx('main-page__header-wrapper')}
					bottomBorder
				>
					<div className={cx('main-page__header-left')}>
						<MainMenu fetchMenu={api.mainMenu} />
					</div>
					<div className={cx('main-page__header-right')}>
						<Search />
						<Slider fetchSlider={api.sliderParams} />
						<BrandsCarousel fetchCarousel={api.brandsCarousel} />
					</div>
				</BlockWrapper>
			</>
		)
	}

	render() {
		const { isPopupOpened } = this.state

		return (
			<ContextConsumer>
				{api => {
					return (
						<>
							{this.renderPageHeader(api)}
							{isPopupOpened &&
								<Popup handleClose={this.handlePopupShow}>
									контент
								</Popup>
							}
						</>
					)
				}}
			</ContextConsumer>
		)
	}
}

export default MainPage
