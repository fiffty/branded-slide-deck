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
		if (this.props.canResize) {
			window.addEventListener('resize', this.adjustContainerWidth)
		}
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.adjustContainerWidth)
	}
	render() {
		const {slides, companyName, currentSlide, inSidebar, goToSlide} = this.props;
		let slidesJsx;

		if (inSidebar) {
			slidesJsx = slides
				.map((slide, i) => {
					if (slide.cover) {
						return (
							<div 
								key={'slide-' + i}
								style={styles.sidebarSlide}
								onClick={() => {
									goToSlide(i)
								}}>
								<Cover
									title={slide.cover.title}
									subtitle={slide.cover.subtitle}
									logo={slide.cover.logo}
									backgroundImage={slide.cover.backgroundImage}
									companyName={companyName}
									pageNum={i + 1}
									isCurrentSlide={currentSlide === i}
									inSidebar={inSidebar} />
							</div>
						)
					} else {
						return (
							<div
								key={'slide-' + i}
								style={styles.sidebarSlide}
								onClick={() => {
									goToSlide(i)
								}}>
								<Slide 
									title={slide.title}
									columns={slide.columns}
									background={slide.background}
									companyName={companyName}
									pageNum={i + 1}
									isCurrentSlide={currentSlide === i}
									inSidebar={inSidebar} />
							</div>
						)						
					}
				})

		} else {
			slidesJsx = slides
				.map((slide, i) => {
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
				})
		}

		return (
			<div style={(inSidebar)? styles.sidebarContainer : styles.container}>
				<div ref="slides" style={Object.assign({}, styles.slides, this.state.adjustContainerWidth)}>
					{slidesJsx}
				</div>
			</div>
		)
	}
}

export default Slides