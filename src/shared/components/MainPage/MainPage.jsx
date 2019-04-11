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
import MainNewsList from '../../components/MainNewsList/MainNewsList'
import MainReviewsList from '../../components/MainReviewsList/MainReviewsList'
import BlockWrapper from '../../ui/BlockWrapper/BlockWrapper'
import TwoColumenedBlock from '../../ui/TwoColumenedBlock/TwoColumenedBlock'
import Popup from '../../ui/Popup/Popup'
import MainMap from '../../components/MainMap/MainMap'
import PageFooter from '../../components/PageFooter/PageFooter'
import { ApiConsumer } from '../../utils/context-provider'
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
				<div className={cx('main-page__partners-image-wrapper')}>
					<img src={images.PARTNER} className={cx('main-page__partners-image')} alt="" />
				</div>
			</div>
		);
	}

	renderPageHeader(api) {
		return (
			<>
				<PageHeader handleFetchMenu={api.topMenu} />
				<Contacts onDescriptionClick={this.handlePopupShow} />
				<BlockWrapper
					innerColor="white"
					className={cx('main-page__header-wrapper')}
					bottomBorder={true}
				>
					<div className={cx('main-page__header-left')}>
						<MainMenu handleFetchMenu={api.mainMenu} />
					</div>
					<div className={cx('main-page__header-right')}>
						<Search />
						<Slider handleFetchSlider={api.sliderParams} />
						<BrandsCarousel handleFetchCarousel={api.brandsCarousel} />
					</div>
				</BlockWrapper>
			</>
		)
	}

	renderPageBody(api) {
		return (
			<>
				<BlockWrapper innerColor="white" className={cx('main-page__body-wrapper')}>
					<GoodsCarousel handleFetchGoodsCarousel={api.specialsCarousel} />
				</BlockWrapper>
				<BlockWrapper innerColor="gray" className={cx('main-page__body-wrapper')}>
					<ShopAdvantages />
				</BlockWrapper>
				<BlockWrapper innerColor="white" className={cx('main-page__body-wrapper')}>
					<GoodsCarousel handleFetchGoodsCarousel={api.hitsCarousel} />
				</BlockWrapper>
				<BlockWrapper innerColor="gray" className={cx('main-page__body-wrapper')}>
					<TwoColumenedBlock left={this.renderMainAbout()} right={<MainNewsList />}/>
				</BlockWrapper>
				<BlockWrapper
					innerColor="white"
					className={cx('main-page__body-wrapper')}
					bottomBorder={true}
				>
					<TwoColumenedBlock left={this.renderMainPartners()} right={<MainReviewsList />}/>
				</BlockWrapper>
			</>
		);
	}
	
	render() {
		const { isPopupOpened } = this.state

		return (
			<ApiConsumer>
				{api => (
						<>
							{this.renderPageHeader(api)}
							{this.renderPageBody(api)}
							<MainMap handleFetchMap={api.mainYmap} />
							<PageFooter handleFetchMenu={api.footerMenu} onDescriptionClick={this.handlePopupShow}/>
							{isPopupOpened &&
								<Popup handleClose={this.handlePopupShow}>
									<CallbackForm />
								</Popup>
							}
						</>
					)
				}
			</ApiConsumer>
		)
	}
}

export default MainPage
