import React from 'react';
import './slideshow.css';

const slides = [
	{src: "https://source.unsplash.com/M2Kxb80gqcc/1920x450" },
	{src: "https://source.unsplash.com/3NCA3tbaE5I/1920x450" },
	{src: "https://source.unsplash.com/UVyOfX3v0Ls/1920x450" }
];



export class Slideshow extends React.Component {
	render() {
		let currentSlide = slides[1];
		return(

					<img src={currentSlide.src}/>
					
		);
	}
};





