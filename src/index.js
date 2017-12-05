import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Header} from './components/header';
import {Nav} from './components/nav';
import {Slideshow} from './components/slideshow';
import {SlideshowArrows} from './components/slideshowarrows';


ReactDOM.render(
	<div>
		<Header />
		<Nav />
		<Slideshow />
		<SlideshowArrows />
	</div>,
	document.getElementById('root')
);






