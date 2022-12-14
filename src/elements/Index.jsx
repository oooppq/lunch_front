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
  RestaurantElement,
  RestaurantImg,
  RestaurantInfo,
} from "../styledComponents";

import { getData } from "../utils/api";
import loadingIcon from "../img/loading.svg";
import { location_type, baseUrl } from "../data";
import classnames from "classnames";
import img from "../img/recom/2.png";
// import Modal from "./Modal";
import { useNavigate, useParams } from "react-router-dom";
import { addMyStore, AddMyMenu } from "../utils/api";
import noImage from "../img/no-image.png";

const Index = (props) => {
  const [isMap, setMap] = useState(false);
  const [restaurants, setRestaurants] = useState(null);
  const [menu, setMenu] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const url = baseUrl + "restaurants/all/";
  const navigate = useNavigate();
  const [tab, setTab] = useState(true);
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
        <RestaurantImg
          src={param.store_image ? param.store_image : noImage}
          id={param.id}
          onClick={restOnClick}
        ></RestaurantImg>
        <RestaurantElement>
          <RestaurantElemLeft id={param.id} onClick={restOnClick}>
            <RestaurantInfo>
              <div className="name">{param.store_name}</div>
              <span>#{param.location_type} </span>
              <span>#{param.type}</span>
            </RestaurantInfo>
          </RestaurantElemLeft>
          <RestaurantElemRight>
            <span
              id={param.store_name}
              onClick={(e) => {
                if (props.isAuth) {
                  addMyStore(e);
                } else navigate("/accounts");
              }}
            >
              ?????????
            </span>
            <span
              onClick={() => {
                if (props.options.includes(param.store_name)) return;
                props.setOptions((prev) => [...prev, param.store_name]);
              }}
            >
              ????????? ??????
            </span>
          </RestaurantElemRight>
        </RestaurantElement>
      </RestaurantElem>
    );
  };

  const locOnClick = (e) => {
    if (!isMap) {
      let loc = e.target.innerHTML;
      let restElems = document.querySelectorAll(".restElem");
      for (let restElem of restElems) {
        if (loc == restElem.classList[3]) {
          restElem.style.display = "block";
        } else {
          restElem.style.display = "none";
        }
      }
    }
  };
  return (
    <IndexContainer>
      {isMap ? (
        <MapChild onClick={indexOnclick}>????????????</MapChild>
      ) : (
        <MapChild onClick={indexOnclick}>????????????</MapChild>
      )}

      <LocationNavBar>
        {location_type.map((loc) => {
          return (
            <LocationElement onClick={locOnClick} key={loc.id}>
              <div className="loc">{loc.loc_type}</div>
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
            <RestaurantListDivChild>??????</RestaurantListDivChild>
            {restaurants.map((restaurant) => {
              if (restaurant.type === "??????")
                return restaurantElemMaker(restaurant);
              else return null;
            })}
            <RestaurantListDivChild>??????</RestaurantListDivChild>
            {restaurants.map((restaurant) => {
              if (restaurant.type === "??????")
                return restaurantElemMaker(restaurant);
              else return null;
            })}
            <RestaurantListDivChild>??????</RestaurantListDivChild>
            {restaurants.map((restaurant) => {
              if (restaurant.type === "??????")
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
