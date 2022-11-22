import React, { useState, useEffect } from "react";
import KakaoMap from "./KakaoMap";
import {
  IndexContainer,
  LocationNavBar,
  LocationElement,
  RestaurantListDiv,
  RestaurantElem,
  RestaurantElemLeft,
  RestaurantElemRight,
  RestaurantImg,
  RestaurantInfo,
} from "../styledComponents";

import { getData } from "../utils/getApi";
import loadingIcon from "../img/loading.svg";
import { type, location_type } from "../data";
import classnames from "classnames";
import axios from "axios";
import Modal from "./Modal";

const Index = (props) => {
  const [isMap, setMap] = useState(false);
  const [restaurants, setRestaurants] = useState(null);
  const [menu, setMenu] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const url = "http://127.0.0.1:8000/restaurants/";

  const indexOnclick = (e) => {
    setMap(!isMap);
  };

  useEffect(() => {
    getData(setRestaurants, setLoading, url);
  }, []);

  const restOnClick = async (e) => {
    const id = e.currentTarget.id;
    const menuUrl = url + id + "/menu";
    const res = await axios.get(menuUrl);
    setMenu(res.data);
    setModal(true);
  };

  const modalOff = () => {
    setModal(false);
  };

  const restaurantElemMaker = (param) => {
    return (
      <RestaurantElem
        key={param.id}
        className={classnames("restElem", param.location_type)}
      >
        <RestaurantElemLeft id={param.id} onClick={restOnClick}>
          <RestaurantImg src={param.store_image}></RestaurantImg>
          <RestaurantInfo>
            <div>{param.store_name}</div>
            <div>{param.location_type}</div>
            <div>{param.type}</div>
          </RestaurantInfo>
        </RestaurantElemLeft>
        <RestaurantElemRight>
          <div>찜하기</div>
          <div
            onClick={() => {
              props.setOptions((prev) => [...prev, param.store_name]);
            }}
          >
            룰렛에 추가
          </div>
        </RestaurantElemRight>
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
        <KakaoMap data={restaurants} setModal={setModal}></KakaoMap>
      ) : (
        <div>
          <RestaurantListDiv>
            <div>한식</div>
            {restaurants.map((restaurant) => {
              if (restaurant.type === "한식")
                return restaurantElemMaker(restaurant);
              else return null;
            })}
            <div>중식</div>
            {restaurants.map((restaurant) => {
              if (restaurant.type === "중식")
                return restaurantElemMaker(restaurant);
              else return null;
            })}
            <div>일식</div>
            {restaurants.map((restaurant) => {
              if (restaurant.type === "일식")
                return restaurantElemMaker(restaurant);
              else return null;
            })}
          </RestaurantListDiv>
        </div>
      )}
      <Modal open={modal} menu={menu} modalOff={modalOff}></Modal>
    </IndexContainer>
  );
};

export default Index;
