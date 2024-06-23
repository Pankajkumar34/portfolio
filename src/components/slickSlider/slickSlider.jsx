'use client';
import React from "react";
import Slider from 'react-slick'

function SlickSlider({slickList}) {
  
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>

        {slickList.map((Icon, index) => (
          <div key={index} className="w-full">
            <div className="w-[300px] bg-white rounded-sm p-2">
            <Icon />
            </div>
           
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SlickSlider;
