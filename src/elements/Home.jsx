import React, { useEffect, useState } from "react";
import {
  HomeContainer,
  RecommContainer,
  RecommTitle,
  SaleContainer,
  SaleTitle,
  SaleUl,
  SaleLi,
  SaleLiLeft,
  SaleLiRight,
} from "../styledComponents";
import { getMultiData } from "../utils/getApi";
import { HomeSlider } from "./SliderUtils";
import loadingIcon from "../img/loading.svg";
import { getMenuById, getRestaurantById } from "../utils/findData";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [rest, setRest] = useState(null);
  const [menu, setMenu] = useState(null);
  const [sale, setSale] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const restUrl = "http://127.0.0.1:8000/restaurants/all";
  const menuUrl = "http://127.0.0.1:8000/menu/all";
  const saleUrl = "http://127.0.0.1:8000/menu/allsale";

  useEffect(() => {
    getMultiData([setRest, setMenu, setSale], setLoading, [
      restUrl,
      menuUrl,
      saleUrl,
    ]);
  }, []);

  const gotoDetailOnClick = async (e) => {
    const id = e.currentTarget.id;
    navigate("index/" + id);
  };

  return (
    <HomeContainer>
      <RecommContainer>
        <RecommTitle>오늘의 추천메뉴</RecommTitle>
        <HomeSlider
          restaurant={rest}
          menu={menu}
          loading={loading}
        ></HomeSlider>
      </RecommContainer>

      <SaleContainer>
        <SaleTitle>오늘의 할인</SaleTitle>
        {loading ? (
          <div className="loading">
            <img src={loadingIcon} alt="" />
          </div>
        ) : (
          <SaleUl>
            {sale.map((s) => {
              let m = getMenuById(menu, s.id);
              let restaurant = getRestaurantById(rest, m.restaurant);

              return (
                <SaleLi key={s.id}>
                  <SaleLiLeft id={restaurant.id} onClick={gotoDetailOnClick}>
                    <img src={m.menu_image} alt="" />
                    <div>
                      <div>
                        <span>{restaurant.store_name}</span>
                        <br />

                        <span>{m.menu_name}</span>
                        <br />
                        <span>{m.menu_price} </span>
                        <span>{s.sale_price}</span>
                      </div>
                    </div>
                  </SaleLiLeft>
                  <SaleLiRight>
                    <div>찜하기</div>
                    {/* <div
                      onClick={() => {
                        props.setOptions((prev) => [...prev, param.store_name]);
                      }}
                    > */}
                    <div>룰렛에 추가</div>
                  </SaleLiRight>
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
