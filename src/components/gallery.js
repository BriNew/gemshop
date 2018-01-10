import React from 'react';
import Gallery from 'react-grid-gallery';
import {Slideshow} from './slideshow';
import './gallery.css';


 
export class PhotoGallery extends React.Component {
 
  render() {
 
    const IMAGES =
[{
        src: "https://source.unsplash.com/5EoWFa_Htdo/800x599",
        thumbnail: "https://source.unsplash.com/5EoWFa_Htdo/320x212",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Look at these rocks"
},
{
        src: "https://source.unsplash.com/Zjd6NvWUf5k/800x599",
        thumbnail: "https://source.unsplash.com/Zjd6NvWUf5k/320x212",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Just look at them"
},
 
{
        src: "https://source.unsplash.com/FO7bKvgETgQ/800x599",
        thumbnail: "https://source.unsplash.com/FO7bKvgETgQ/320x212",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "You won't find better rocks than these"
},
{
        src: "https://source.unsplash.com/EMgRlkN6uOM/800x599",
        thumbnail: "https://source.unsplash.com/EMgRlkN6uOM/320x212",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "more rocks"
},
{
        src: "https://source.unsplash.com/CEeoDFpVxxw/800x599",
        thumbnail: "https://source.unsplash.com/CEeoDFpVxxw/320x212",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "more rocks"
}
]
 
    return (
      <div>
        <Slideshow />
        <div className="gallery_container_container">
          <ul className="gallery_title">
            <li className="gallery"><h2>Gallery</h2></li>
          </ul>
          <div className="gallery_container">
            <div className = "gallery_info">
              <Gallery images={IMAGES}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
 
}