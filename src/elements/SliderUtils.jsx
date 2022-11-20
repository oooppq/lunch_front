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
import { getData } from "../api/getApi";

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

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const url = "http://127.0.0.1:8000/restaurants/";

  useEffect(() => {
    getData(setData, setLoading, url);
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <img src={loadingIcon} alt="" />
        </div>
      ) : (
        <StyledSlider {...settings} height="100%;">
          {data.map((props) => {
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
      <SliderElemImg src={props.store_image}></SliderElemImg>
      <SliderElemInfo>
        <div className="mName">{props.store_name}</div>
        <div className="rName">{props.explain}</div>
        <div className="rName">{props.explain}</div>
      </SliderElemInfo>
    </SliderElem>
  );
};
