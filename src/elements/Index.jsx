import React, { useState, useEffect } from "react";
import KakaoMap from "./KakaoMap";
import {
  IndexContainer,
  MapChild,
  LocationNavBar,
  LocationElement,
  RestaurantListDiv,
  RestaurantListDivChild,
  RestaurantElem,
  RestaurantElemLeft,
  RestaurantElemRight,
  RestaurantElemRightChild,
  RestaurantImg,
  RestaurantInfo,
} from "../styledComponents";

import { getData } from "../utils/api";
import loadingIcon from "../img/loading.svg";
import { location_type, baseUrl } from "../data";
import classnames from "classnames";

// import Modal from "./Modal";
import { useNavigate } from "react-router-dom";

const Index = (props) => {
  const [isMap, setMap] = useState(false);
  const [restaurants, setRestaurants] = useState(null);
  const [menu, setMenu] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const url = baseUrl + "restaurants/all/";
  const navigate = useNavigate();
  const indexOnclick = (e) => {
    setMap(!isMap);
  };

  useEffect(() => {
    getData(setRestaurants, setLoading, url);
  }, []);

  const restOnClick = async (e) => {
    const id = e.currentTarget.id;
    navigate("./" + id);
  };

  // const modalOff = () => {
  //   // setModal(false);
  // };

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
          </RestaurantInfo>
        </RestaurantElemLeft>
        <RestaurantElemRight>
          <div>❤️찜하기</div>
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
        <MapChild onClick={indexOnclick}>목록보기</MapChild>
      ) : (
        <MapChild onClick={indexOnclick}>지도보기</MapChild>
      )}

      <LocationNavBar>
        {location_type.map((loc) => {
          return (
            <LocationElement onClick={locOnClick} key={loc.id} className="loc">
              <div>{loc.loc_type}</div>
            </LocationElement>
          );
        })}
      </LocationNavBar>
      {loading ? (
        <div className="loading">
          <img src={loadingIcon} alt="" />
        </div>
      ) : isMap ? (
        <KakaoMap data={restaurants} setModal={setModal}></KakaoMap>
      ) : (
        <div>
          <RestaurantListDiv>
            <RestaurantListDivChild>한식🍚</RestaurantListDivChild>
            {restaurants.map((restaurant) => {
              if (restaurant.type === "한식")
                return restaurantElemMaker(restaurant);
              else return null;
            })}
            <RestaurantListDivChild>중식🥮</RestaurantListDivChild>
            {restaurants.map((restaurant) => {
              if (restaurant.type === "중식")
                return restaurantElemMaker(restaurant);
              else return null;
            })}
            <RestaurantListDivChild>일식🍜</RestaurantListDivChild>
            {restaurants.map((restaurant) => {
              if (restaurant.type === "일식")
                return restaurantElemMaker(restaurant);
              else return null;
            })}
          </RestaurantListDiv>
        </div>
      )}
      {/* <Modal open={modal} menu={menu} modalOff={modalOff}></Modal> */}
    </IndexContainer>
  );
};

export default Index;
