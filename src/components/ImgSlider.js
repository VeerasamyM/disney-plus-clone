<<<<<<< HEAD
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import styled from 'styled-components';
function ImgSlider() {
let setting={
    dots:true,
    Infinite:true,
    speed:500,
    slidesToShow:1,
    slidesToScroll:1,
    autoplay:true
}

  return (
    <Carousal{...setting}>
      <Wrap><img src="/images/slider-badging.jpg" alt=''/></Wrap>
      <Wrap><img src="/images/slider-badag.jpg" alt=''/></Wrap>
      <Wrap><img src="/images/slider-scale.jpg" alt=''/></Wrap>
      <Wrap><img src="/images/slider-scales.jpg" alt=''/></Wrap>

    </Carousal>
  )
}

export default ImgSlider

const Carousal=styled(Slider)`
margin-top:20px;

ul li button{
    &:before{
        font-size:10px;
        color:rgb(150,158,171);
    }
}
li.slick-active button:before{
    color:white;
}
.slick-list{

    overflow:visible;
}
button{
    z-index:1;
}

`
const  Wrap=styled.div`
cursor:pointer;
img{
    border:4px solid transparent;
    width:100%;
    height:100%;
    border-radius:4px;
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;

    &:hover{
        border:4px solid rgba(249,249,249, 0.8);
    }
}
=======
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
function ImgSlider() {
let setting={
    dots:true,
    Infinite:true,
    speed:500,
    slidesToShow:1,
    slidesToScroll:1,
    autoplay:true
}

  return (
    <Carousal{...setting}>
      <Wrap><img src="/images/slider-badging.jpg" alt=''/></Wrap>
      <Wrap><img src="/images/slider-badag.jpg" alt=''/></Wrap>
    </Carousal>
  )
}

export default ImgSlider

const Carousal=styled(Slider)`
margin-top:20px;

ul li button{
    &:before{
        font-size:10px;
        color:rgb(150,158,171);
    }
}
li.slick-active button::before{
    color:white;
}
.slick-list{

    overflow:visible;
}
button{
    z-index:1;
}

`
const  Wrap=styled.div`
cursor:pointer;
img{
    border:4px solid transparent;
    width:100%;
    height:100%;
    border-radius:4px;
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;

    &:hover{
        border:4px solid rgba(249,249,249, 0.8);
    }
}
>>>>>>> 74885b1e1703e993d72d805187b8cc870c869ce9
`