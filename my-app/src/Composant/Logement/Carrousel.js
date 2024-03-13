import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Flechegauche from '../../Photos/flechegauche.png'
import Flechedroite from '../../Photos/flechedroite.png'

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow slick-prev" onClick={onClick}>
        <img src={Flechegauche} alt="Previous" />
      </div>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow slick-next" onClick={onClick}>
        <img src={Flechedroite} alt="Next" />
      </div>
    );
  };

export default function ImageCarousel({ pictures }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />, 
    nextArrow: <NextArrow />,
};


  return (
    <Slider {...settings}>
      {pictures.map((picture, index) => (
        <div key={index}>
          <img src={picture} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
}