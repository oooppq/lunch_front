import React, { useEffect, useState } from "react";
import {
  HomeContainer,
  RecommContainer,
  RecommTitle,
  SaleContainer,
  SaleTitle,
  SaleUl,
  SaleLi,
  SaleBox,
  SaleLiLeft,
  SaleLiRight,
} from "../styledComponents";
import { getMultiData } from "../utils/api";
import { HomeSlider } from "./SliderUtils";
import loadingIcon from "../img/loading.svg";
import imag from "../img/recom/3.png";
import left from "../img/left.png";
import right from "../img/right.png";
import noImage from "../img/no-image.png";

import { getMenuById, getRestaurantById, getSaleById } from "../utils/findData";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../data";

const Home = () => {
  const [rest, setRest] = useState(null);
  const [menu, setMenu] = useState(null);
  const [sale, setSale] = useState(null);
  const [sale2, setSale2] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const restUrl = baseUrl + "restaurants/all";
  const menuUrl = baseUrl + "menu/all";
  const saleUrl = baseUrl + "menu/sale";
  const saleUrl2 = baseUrl + "menu/allsale";

  useEffect(() => {
    getMultiData([setRest, setMenu, setSale, setSale2], setLoading, [
      restUrl,
      menuUrl,
      saleUrl,
      saleUrl2,
    ]);
  }, []);

  const gotoDetailOnClick = (e) => {
    const id = e.currentTarget.id;
    navigate("index/" + id);
  };

  return (
    <HomeContainer>
      <RecommContainer>
        <RecommTitle>
          <span>s</span>오늘의 추천메뉴<span>s</span>{" "}
        </RecommTitle>
        <HomeSlider
          restaurant={rest}
          menu={menu}
          loading={loading}
        ></HomeSlider>
      </RecommContainer>

      <SaleContainer>
        <SaleTitle>
          오늘의 <span>할인</span>{" "}
        </SaleTitle>
        {loading ? (
          <div className="loading">
            <img src={loadingIcon} alt="" />
          </div>
        ) : (
          <SaleUl>
            {sale.map((s) => {
              let m = getMenuById(menu, s.id);
              let tmp = getSaleById(sale2, m.sale);
              let restaurant = getRestaurantById(rest, m.restaurant);

              return (
                <SaleLi key={s.id}>
                  <img
                    src={m.menu_image ? m.menu_image : noImage}
                    alt=""
                    id={restaurant.id}
                    onClick={gotoDetailOnClick}
                  />
                  <SaleBox>
                    <SaleLiLeft id={restaurant.id} onClick={gotoDetailOnClick}>
                      <div>
                        <span className="name">{restaurant.store_name} </span>

                        <span>{m.menu_name}</span>
                        <br />
                        <span className="price salePrice">{m.menu_price} </span>
                        <span className="salePrice">{tmp.sale_price}</span>
                      </div>
                    </SaleLiLeft>
                    <SaleLiRight>
                      <span>찜하기</span>
                      {/* <div
                      onClick={() => {
                        props.setOptions((prev) => [...prev, param.store_name]);
                      }}
                    > */}
                      <span>룰렛에 추가</span>
                    </SaleLiRight>
                  </SaleBox>
                </SaleLi>
              );
            })}
          </SaleUl>
        )}
      </SaleContainer>
    </HomeContainer>
  );
};

export default Home;
