# Branded Slide Deck

React Component for presentation slide decks with preset styles

## Usage

```
$ npm insall --save branded-slide-deck
```

```javascript
import React from 'react'
import {render} from 'react-dom'
import BrandedSlideDeck from './components/BrandedSlideDeck'


render(<BrandedSlideDeck 
	slides={slides} 
	companyName={'Company Inc'} 
	showSidebar={true}
	canResize={false} />, document.getElementById('app'))
```

**to check out demo**

```
$ git clone [this repo]
$ cd [to cloned directory]
$ cd demo
$ http-server
```

## API

### Props

| name | type | default  | description |
| --- | --- | --- | --- |
| companyName | String | undefined | Adds string to copyright text. |
| showSidebar | Boolean | false | When true, sidebar will be shown on first first render. |
| canResize | Boolean | true | When true, `branded-slide-deck` will attach a 'resize' event listner to the window to dynamically recalculate dimensions. Could cause some performance issues as it uses expensive DOM querying |
| slides | [Object] | [{'Hello World'}] | Please read below. |

### slides

**cover**

```javascript
{
	cover: {
		title: 'Amazing Cover Slide',
		subtitle: 'Best Ever',
		logo: 'img/logo.png',
		backgroundColor: '#E9E'
		backgroundImage: undefined
	}
}
```

* title: String
* subtitle: String
* logo: String. Path. Renders logo as `<img src={logo}/>` if present, nothing if `undefined`
* backgroundColor: String. CSS value. Will be used if backgroundImage is `undefined`
* backgroundImage: String. `url(path/to/img)`.


**other slides**
```javascript
{
	title: 'Title',
	background: {
		type: 'light',
		backgroundColor: '#FFFFFF',
		backgroundImage: undefined,
	},
	columns: [{
		size: 8,
		elems: [{
			tag: 'span',
			type: 'text',
			content: "Bacon ipsum dolor amet frankfurter swine pork loin spare ribs short loin sirloin salami flank. Salami rump pork belly, swine bresaola prosciutto pork chop tenderloin jerky shank landjaeger chuck biltong turkey. Hamburger pork belly jowl tail, short ribs ball tip shank porchetta swine salami pastrami doner kevin."
		}]
	}, {
		size: 4,
		elems: [{
			tag: 'img',
			type: 'imageFull',
			content: "img/map.png"
		}]			
	}]
}
```

* **title**: String.
* **background.type**: String. `'light'` or `'dark'`. Will set font-color to white if `dark` and to accent color if `light`.
* **columns**: [Object]. Each object inside the array is used to render columns as main content of slides.
* **columns[].size**: Integer. Size of column in 12 column grid.
* **columns[].elems**: [Object]. Each object inside the array is used to render rows inside the columns.
* **columns[].elems[].tag**: String. `'span'` for text content and `'img'` for images.
* **columns[].elems[].type**: String. `['supabig','kindabig','kindasmall','text','quote','author','imageFull','imageOriginal']`
  * **supabig**: Super big headings.
  * **kindabig**: Big headings.
  * **kindasmall**: Smaller headings.
  * **text**: Paragraphs.
  * **quote**: Paragraphs styled as blockquotes.
  * **author**: Author underneath quote.
  * **imageFull**: Image with width set to its parent width.
  * **imageOriginal**: Image with width set to its file width.