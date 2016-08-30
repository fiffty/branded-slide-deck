import React, {Component} from 'react'
import Slides from './Slides'
import styles from '../styles/sidebar'

class Sidebar extends Component {
	constructor() {
		super()
		this.state = {
			mainContainerHeight: {
				height: 0
			},
			innerContainerHeight: {
				height: 0
			}
		}

		this.adjustContainerHeight = () => {
			const parentHeight = this.refs.mainContainer.parentNode.clientHeight
			this.setState({
				mainContainerHeight: {
					height: parentHeight
				}
			})			
		}

		this.adjustInnerContainerHeight = (numberOfSlides) => {
			const selfHeight = this.refs.innerContainer.clientWidth * 0.6 * numberOfSlides
			this.setState({
				innerContainerHeight: {
					height: selfHeight
				}
			})	
		}
	}
	componentDidMount() {
		this.adjustContainerHeight()
		this.adjustInnerContainerHeight(this.props.children.props.slides.length)
		if (this.props.canResize) {
			window.addEventListener('resize', this.adjustContainerHeight)
		}
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.adjustContainerHeight)
	}
	render() {
		const {children} = this.props
		return (
			<div 
				ref="mainContainer"
				style={Object.assign({}, styles.mainContainer, this.state.mainContainerHeight)}>
				<div 
					ref="innerContainer"
					style={Object.assign({}, styles.innerContainer, this.state.innerContainerHeight)}>
					{children}
				</div>
			</div>
		)
	}
}

export default Sidebar