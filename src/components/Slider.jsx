// images
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/js.png'
import react from '../assets/react.png'
import node from '../assets/nodejs.png'
import express from '../assets/express.png'
import mongo from '../assets/mongo.png'
// css
import '../style/Slider.css'
import SliderImg from './SliderImg'


function Slider() {
    const langiagesImages = [html, css, javascript, react, node, express, mongo];
    return <div className='custom-slider my-4'>
        <div>
            {langiagesImages.map((image, index) => <SliderImg key={index} img={image} alt='programming languages' />)}
        </div>
  </div>;
}

export default Slider;
