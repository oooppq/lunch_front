import React, { useState } from "react";
import KakaoMap from "./KakaoMap";
import {
  IndexContainer,
  LocationNavBar,
  LocationElement,
  RestaurantListDiv,
  RestaurantElem,
  RestaurantImg,
  RestaurantInfo,
} from "../styledComponents";

import { getData } from "../api/getApi";
import loadingIcon from "../img/loading.svg";

const Index = () => {
  const [isMap, setMap] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const url = "http://127.0.0.1:8000/restaurants/";

  const indexOnclick = (e) => {
    setMap(!isMap);
  };

  useState(() => {
    getData(setData, setLoading, url);
  });

  const restaurantElemMaker = (props) => {
    return (
      <RestaurantElem key={props.id}>
        <RestaurantImg src={props.store_image}></RestaurantImg>
        <RestaurantInfo>
          <div>{props.store_name}</div>
          <div>{props.location_type}</div>
          <div>{props.type}</div>
        </RestaurantInfo>
      </RestaurantElem>
    );
  };

  return (
    <IndexContainer>
      {isMap ? (
        <div onClick={indexOnclick}>목록보기</div>
      ) : (
        <div onClick={indexOnclick}>지도보기</div>
      )}

      <LocationNavBar>
        <LocationElement>정문</LocationElement>
        <LocationElement>남문</LocationElement>
        <LocationElement>후문</LocationElement>
        <LocationElement>신촌</LocationElement>
        <LocationElement>대흥</LocationElement>
        <LocationElement>공덕</LocationElement>
      </LocationNavBar>
      {loading ? (
        <div>
          <img src={loadingIcon} alt="" />
        </div>
      ) : isMap ? (
        <KakaoMap data={data}></KakaoMap>
      ) : (
        <div>
          <RestaurantListDiv>
            <div>한식</div>
            {data.map((props) => {
              if (props.type === "한식") return restaurantElemMaker(props);
              else return null;
            })}
            <div>중식</div>
            {data.map((props) => {
              if (props.type === "중식") return restaurantElemMaker(props);
              else return null;
            })}
            <div>일식</div>
            {data.map((props) => {
              if (props.type === "일식") return restaurantElemMaker(props);
              else return null;
            })}
          </RestaurantListDiv>
        </div>
      )}
    </IndexContainer>
  );
};

export default Index;
