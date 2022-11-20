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
import { type, location_type } from "../data";
import classnames from "classnames";

const { kakao } = window;

const Index = () => {
  const [isMap, setMap] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loc, setLoc] = useState(null);
  const url = "http://127.0.0.1:8000/restaurants/";

  const indexOnclick = (e) => {
    setMap(!isMap);
  };

  useState(() => {
    getData(setData, setLoading, url);
  });

  const restaurantElemMaker = (props) => {
    return (
      <RestaurantElem
        key={props.id}
        className={classnames("restElem", props.location_type)}
      >
        <RestaurantImg src={props.store_image}></RestaurantImg>
        <RestaurantInfo>
          <div>{props.store_name}</div>
          <div>{props.location_type}</div>
          <div>{props.type}</div>
        </RestaurantInfo>
      </RestaurantElem>
    );
  };

  const locOnClick = (e) => {
    if (!isMap) {
      let loc = e.target.innerHTML;
      let restElems = document.querySelectorAll(".restElem");
      for (let restElem of restElems) {
        if (loc == restElem.classList[3]) {
          restElem.style.display = "flex";
        } else {
          restElem.style.display = "none";
        }
      }
    }
  };
  return (
    <IndexContainer>
      {isMap ? (
        <div onClick={indexOnclick}>목록보기</div>
      ) : (
        <div onClick={indexOnclick}>지도보기</div>
      )}

      <LocationNavBar>
        {location_type.map((loc) => {
          return (
            <LocationElement onClick={locOnClick} key={loc.id} className="loc">
              {loc.loc_type}
            </LocationElement>
          );
        })}
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
