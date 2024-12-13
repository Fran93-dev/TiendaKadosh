import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo1 from '../Styles/images/001.jpg';
import logo2 from '../Styles/images/chocolate.png';
import logo3 from '../Styles/images/delicioso-surtido-chocolate.jpg';

const MySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const sliderContainerStyle = {
    width: '100%',
    height: '400px', // Puedes ajustar la altura según tus necesidades
    overflow: 'hidden',
    position: 'relative',
  };

  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  return (
    <div style={sliderContainerStyle}>
      <Slider {...settings}>
        <div>
          <img src={logo1} alt="Slide 1" style={imgStyle} />
        </div>
        <div>
          <img src={logo2} alt="Slide 2" style={imgStyle} />
        </div>
        <div>
          <img src={logo3} alt="Slide 3" style={imgStyle} />
        </div>
      </Slider>
    </div>
  );
};

export default MySlider;
