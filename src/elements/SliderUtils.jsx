import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  StyledSlider,
  SliderElem,
  SliderElemImg,
  SliderElemInfo,
} from "../styledComponents";
import { restaurants } from "../data";
import chicken from "../img/recom/1.png";

export const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    textAlign: "center",
  };
  return (
    <StyledSlider {...settings} height="100%;">
      {restaurants.map((props) => {
        return SliderElemMaker(props);
      })}
    </StyledSlider>
  );
};

export const SliderElemMaker = (props) => {
  return (
    <SliderElem key={props.id}>
      <SliderElemImg src={chicken}></SliderElemImg>
      <SliderElemInfo>
        <div className="mName">{props.r_name}</div>
        <div className="rName">{props.info}</div>
        <div className="rName">{props.info}</div>
      </SliderElemInfo>
    </SliderElem>
  );
};
