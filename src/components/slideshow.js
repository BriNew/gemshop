import React from 'react';
import './slideshow.css';

const slides = [
	{src: "https://source.unsplash.com/4psNpOezGzQ/1920x450" },
	{src: "https://source.unsplash.com/Zjd6NvWUf5k/1920x450" },
	{src: "https://source.unsplash.com/miMIrtjk9TU/1920x450" }
];



export class Slideshow extends React.Component {
	render() {
		let currentSlide = slides[0];
		return(

					<img className="header_pic" src={currentSlide.src}/>
					
		);
	}
};





