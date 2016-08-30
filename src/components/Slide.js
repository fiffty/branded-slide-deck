import React, {Component} from 'react'
import Column from './Column'
import styles from '../styles/slide'

class Slide extends Component {
	render() {
		const {title, columns, background, companyName, pageNum, isCurrentSlide, inSidebar} = this.props;
		const backgroundStyles = {
			color: (background.type === 'light') ? '#2B95FD' : '#FFFFFF',
			background: (background.backgroundImage) ? background.backgroundImage : background.backgroundColor
		}
		const visibilityStyles = {
			visibility: (!isCurrentSlide && !inSidebar)? 'hidden' : 'visible'
		}
		const slideStyle = (inSidebar) ? styles.sidebarSlide : styles.slide
		return (
			<div style={Object.assign({}, slideStyle, backgroundStyles, visibilityStyles)}>
				{((background.type === 'dark') && background.backgroundImage) ? <div style={styles.overlay}></div> : null}

				<div style={styles.title}>{title}</div>

				{columns.map((column, i) => {
					return (
						<Column 
							key={'column-' + i} 
							size={column.size} 
							elems={column.elems} />
					)
				})}

				<div style={styles.copyright}>© {companyName} {new Date().getFullYear()}. All rights reserved.</div>
				<div style={styles.pageNum}>{pageNum}</div>
			</div>
		)
	}
}

export default Slide