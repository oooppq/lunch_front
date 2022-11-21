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
import { getData } from "../utils/getApi";

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

  const [restData, setRestData] = useState(null);
  const [menuData, setMenuData] = useState(null);
  const [loading, setLoading] = useState(true);
  const restUrl = "http://127.0.0.1:8000/restaurants";
  const menuUrl = "http://127.0.0.1:8000/menu/all";

  useEffect(() => {
    getData(setMenuData, setLoading, menuUrl);
    // getData(setRestData, setLoading, restUrl);
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <img src={loadingIcon} alt="" />
        </div>
      ) : (
        <StyledSlider {...settings} height="100%;">
          {menuData.map((props) => {
            return SliderElemMaker(props);
          })}
        </StyledSlider>
      )}
    </div>
  );
};

export const SliderElemMaker = (props) => {
  return (
    <SliderElem key={props.id}>
      <SliderElemImg src={props.menu_image}></SliderElemImg>
      <SliderElemInfo>
        <div className="mName">{props.menu_name}</div>
        <div className="rName">{props.menu_price}</div>
        {/* <div className="rName">{props.explain}</div> */}
      </SliderElemInfo>
    </SliderElem>
  );
};
