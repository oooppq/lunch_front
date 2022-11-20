import React, { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import {
  IndexContainer,
  LocationNavBar,
  LocationElement,
  RestaurantListDiv,
  RestaurantElem,
  RestaurantImg,
  RestaurantInfo,
} from "../styledComponents";
import temp from "../img/recom/1.png";
import { restaurants } from "../data";

const Index = () => {
  const [isMap, setMap] = useState(true);

  const indexOnclick = (e) => {
    setMap(!isMap);
  };

  const restaurantElemMaker = (props) => {
    return (
      <RestaurantElem key={props.id}>
        <RestaurantImg src={temp}></RestaurantImg>
        <RestaurantInfo>
          <div>{props.r_name}</div>
          <div>{props.location}</div>
          <div>{props.category}</div>
        </RestaurantInfo>
      </RestaurantElem>
    );
  };
  return (
    <IndexContainer>
      {isMap ? (
        <Map
          center={{ lat: 37.5509442, lng: 126.9410023 }}
          style={{ width: "100%", height: "360px" }}
          id="map"
        >
          <MapMarker position={{ lat: 37.5509442, lng: 126.9410023 }}>
            <div style={{ color: "#000" }}>test</div>
          </MapMarker>
        </Map>
      ) : (
        <></>
      )}
      {isMap ? (
        <div onClick={indexOnclick}>목록보기</div>
      ) : (
        <div>
          <div onClick={indexOnclick}>지도보기</div>
          <RestaurantListDiv>
            <LocationNavBar>
              <LocationElement>정문</LocationElement>
              <LocationElement>남문</LocationElement>
              <LocationElement>후문</LocationElement>
              <LocationElement>신촌</LocationElement>
              <LocationElement>대흥</LocationElement>
              <LocationElement>공덕</LocationElement>
            </LocationNavBar>
            <div>한식</div>
            {restaurants.map((props) => {
              if (props.category === "한식") return restaurantElemMaker(props);
              else return null;
            })}
            <div>중식</div>
            {restaurants.map((props) => {
              if (props.category === "중식") return restaurantElemMaker(props);
              else return null;
            })}
            <div>일식</div>
            {restaurants.map((props) => {
              if (props.category === "일식") return restaurantElemMaker(props);
              else return null;
            })}
          </RestaurantListDiv>
        </div>
      )}
    </IndexContainer>
  );
};

export default Index;
