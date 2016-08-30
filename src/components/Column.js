import React, {Component} from 'react'
import Slide from './Slide'
import styles from '../styles/column'

class Column extends Component {
	render() {
		const {size, elems} = this.props;
		const columnWidth = {
			width: Math.round(size/12*100) + '%'
		}
		return (
			<div style={Object.assign({}, styles.column, columnWidth)}>
				<div style={styles.vertiCenter}>
					{elems.map((elem, i) => {

						if (elem.tag === 'span') {
							return (
								<span
									key={'elem-' + i}
									style={Object.assign({}, styles.span, styles[elem.type])}
									dangerouslySetInnerHTML={{__html: elem.content}} >
								</span>
							)
						} else if (elem.tag === 'img') {
							return (
								<img 
									key={'elem-' + i}
									style={styles[elem.type]}
									src={elem.content} />
							)
						}
					})}
				</div>
			</div>
		)
	}
}

export default Column