import React, {Component} from 'react'
import styles from '../styles/controls'

class Slides extends Component {
	render() {
		const {currentSlide, numberOfSlides, goToSlide, toggleSidebar, launchFullscreen, hovered} = this.props;
		const expandedStyle = {
			top: (hovered) ? 0 : 30
		}
		return (
			<div style={styles.mainContainer}>
				<div style={Object.assign({}, styles.hoverContainer, expandedStyle)}>
					<span
						style={Object.assign({}, styles.span, styles.sidebarBtn)}
						onClick={toggleSidebar}>
						sidebar
					</span>

					<span 
						style={Object.assign({}, styles.span, styles.prevBtn)}
						onClick={() => {
							goToSlide(currentSlide - 1)
						}}>
						prev
					</span>

					<span style={Object.assign({}, styles.span, styles.pagination)}>
						{currentSlide + 1} / {numberOfSlides}
					</span>

					<span 
						style={Object.assign({}, styles.span, styles.nextBtn)}
						onClick={() => {
							goToSlide(currentSlide + 1)
						}}>
						next
					</span>

					<span
						style={Object.assign({}, styles.span, styles.fullscreenBtn)}
						onClick={launchFullscreen}>
						fullscreen
					</span>
				</div>
			</div>
		)
	}
}

export default Slides
