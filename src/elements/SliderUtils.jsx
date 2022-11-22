import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  StyledSlider,
  SliderElem,
  SliderElemImg,
  SliderElemInfo,
} from "../styledComponents";

import loadingIcon from "../img/loading.svg";
import { getRestaurantById } from "../utils/findData";

export const HomeSlider = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    textAlign: "center",
    autoplay: true, //자동 재생 할 것인지
    autoplaySpeed: 3000,
  };

  return (
    <div>
      {props.loading ? (
        <div>
          <img src={loadingIcon} alt="" />
        </div>
      ) : (
        <StyledSlider {...settings} height="100%;">
          {props.menu.map((menu) => {
            let restaurant = getRestaurantById(
              props.restaurant,
              menu.restaurant
            );
            return SliderElemMaker(restaurant, menu);
          })}
        </StyledSlider>
      )}
    </div>
  );
};

export const SliderElemMaker = (restaurant, menu) => {
  return (
    <SliderElem key={menu.id}>
      <SliderElemImg src={menu.menu_image}></SliderElemImg>
      <SliderElemInfo>
        <div className="mName">{menu.menu_name}</div>
        <div className="rName">{restaurant.store_name}</div>
        <div className="rName">가격: {menu.menu_price}원</div>
        <div className="rName">"{restaurant.explain}"</div>
      </SliderElemInfo>
    </SliderElem>
  );
};
