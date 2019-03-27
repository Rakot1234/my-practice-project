import React, { Component } from 'react'
import cx from 'classnames'
import PageHeader from '../../components/PageHeader/PageHeader'
import Contacts from '../../components/Contacts/Contacts'
import Search from '../../components/Search/Search'
import MainMenu from '../../components/MainMenu/MainMenu'
import Slider from '../../components/HeadSlider/HeadSlider'
import BrandsCarousel from '../../components/BrandsCarousel/BrandsCarousel'
import CallbackForm from '../../components/CallbackForm/CallbackForm'
import GoodsCarousel from '../../components/GoodsCarousel/GoodsCarousel'
import ShopAdvantages from '../../components/ShopAdvantages/ShopAdvantages'
import MainNews from '../../components/MainNewsList/MainNewsList'
import MainReviews from '../../components/MainReviewsList/MainReviewsList'
import BlockWrapper from '../../ui/BlockWrapper/BlockWrapper'
import TwoColumns from '../../ui/TwoColumenedBlock/TwoColumenedBlock'
import Popup from '../../ui/Popup/Popup'
import { ContextConsumer } from '../../utils/context-provider'
import texts from './constants/main-texts'
import images from '../../constants/images'
import './MainPage.scss'

class MainPage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isPopupOpened: false,
		}
	}

	handlePopupShow = () => this.setState(({ isPopupOpened }) => ({ isPopupOpened: !isPopupOpened }))

	renderMainAbout() {
		const { ABOUT_TITLE, ABOUT_TEXT } = texts;

		return (
			<div className={cx('main-page__about')}>
				<div className={cx('main-page__about-title')}>{ABOUT_TITLE}</div>
				<div className={cx('main-page__about-text')}>{ABOUT_TEXT}</div>
			</div>
		);
	}

	renderMainPartners() {
		return (
			<div className={cx('main__partners')}>
				<div className={cx('main-page__partners-title')}>{texts.PARTNERS_TITLE}</div>
				<div classname={cx('main-page__partners-image-wrapper')}>
					<img src={images.PARTNER} className={cx('main-page__partners-image')} alt="" />
				</div>
			</div>
		);
	}

	renderPageHeader(api) {
		return (
			<>
				<PageHeader fetchMenu={api.topMenu} />
				<Contacts onDescriptionClick={this.handlePopupShow} />
				<BlockWrapper
					innerColor="white"
					className={cx('main-page__header-wrapper')}
					bottomBorder={true}
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

	renderPageBody(api) {
		return (
			<>
				<BlockWrapper innerColor="white" className={cx('main-page__body-wrapper')}>
					<GoodsCarousel fetchGoodsCarousel={api.specialsCarousel} />
				</BlockWrapper>
				<BlockWrapper innerColor="gray" className={cx('main-page__body-wrapper')}>
					<ShopAdvantages />
				</BlockWrapper>
				<BlockWrapper innerColor="white" className={cx('main-page__body-wrapper')}>
					<GoodsCarousel fetchGoodsCarousel={api.hitsCarousel} />
				</BlockWrapper>
				<BlockWrapper innerColor="gray" className={cx('main-page__body-wrapper')}>
					<TwoColumns left={this.renderMainAbout()} right={<MainNews />}/>
				</BlockWrapper>
				<BlockWrapper innerColor="white" className={cx('main-page__body-wrapper')}>
					<TwoColumns left={this.renderMainPartners()} right={<MainReviews />}/>
				</BlockWrapper>
			</>
		);
	}

	render() {
		const { isPopupOpened } = this.state

		return (
			<ContextConsumer>
				{api => (
						<>
							{this.renderPageHeader(api)}
							{this.renderPageBody(api)}
							{isPopupOpened &&
								<Popup handleClose={this.handlePopupShow}>
									<CallbackForm />
								</Popup>
							}
						</>
					)
				}
			</ContextConsumer>
		)
	}
}

export default MainPage
