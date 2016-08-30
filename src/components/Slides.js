import React, {Component} from 'react'
import Cover from './Cover'
import Slide from './Slide'
import styles from '../styles/slides'

class Slides extends Component {
	constructor() {
		super()
		this.state = {
			adjustContainerWidth: {
				transform: 'scale(0.5)',
				transformOrigin: '0px 0px'
			}
		}

		this.adjustContainerWidth = () => {
			const scale = this.refs.slides.parentNode.clientWidth/700
			this.setState({
				adjustContainerWidth: {
					transform: `scale(${scale})`,
					transformOrigin: '0px 0px'
				} 
			})			
		}
	}
	componentDidMount() {
		this.adjustContainerWidth()
		window.addEventListener('resize', this.adjustContainerWidth)
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.adjustContainerWidth)
	}
	render() {
		const {slides, companyName, currentSlide} = this.props;
		return (
			<div style={styles.container}>
				<div ref="slides" style={Object.assign({}, styles.slides, this.state.adjustContainerWidth)}>
					{slides.map((slide, i) => {
						if (slide.cover) {
							return (
								<Cover
									key={'slide-' + i}
									title={slide.cover.title}
									subtitle={slide.cover.subtitle}
									logo={slide.cover.logo}
									backgroundImage={slide.cover.backgroundImage}
									companyName={companyName}
									pageNum={i + 1}
									isCurrentSlide={currentSlide === i} />
							)
						} else {
							return (
								<Slide 
									key={'slide-' + i}
									title={slide.title}
									columns={slide.columns}
									background={slide.background}
									companyName={companyName}
									pageNum={i + 1}
									isCurrentSlide={currentSlide === i} />
							)						
						}
					})}
				</div>
			</div>
		)
	}
}

export default Slides