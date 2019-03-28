import { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { MODAL_CONTAINER } from '../constants/site-data'

class Portal extends Component {
	static propTypes = {
		children: PropTypes.element.isRequired,
	}

	render() {
		return ReactDOM.createPortal(this.props.children, MODAL_CONTAINER)
	}
}

export default Portal
