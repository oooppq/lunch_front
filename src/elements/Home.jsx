import React, { useEffect, useState } from "react";
import {
  HomeContainer,
  RecommContainer,
  RecommTitle,
  SaleContainer,
  SaleTitle,
  SaleUl,
  SaleLi,
} from "../styledComponents";
import { getData, getMultiData } from "../utils/getApi";
import { HomeSlider } from "./SliderUtils";
import loadingIcon from "../img/loading.svg";
import { getMenuById, getRestaurantById } from "../utils/findData";

const Home = () => {
  const [rest, setRest] = useState(null);
  const [menu, setMenu] = useState(null);
  const [sale, setSale] = useState(null);
  const [loading, setLoading] = useState(true);

  const restUrl = "http://127.0.0.1:8000/restaurants";
  const menuUrl = "http://127.0.0.1:8000/menu/all";
  const saleUrl = "http://127.0.0.1:8000/menu/sale";

  useEffect(() => {
    // getData(setSale, setLoading, restUrl);
    getMultiData([setRest, setMenu, setSale], setLoading, [
      restUrl,
      menuUrl,
      saleUrl,
    ]);
  }, []);

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
          <div>
            <img src={loadingIcon} alt="" />
          </div>
        ) : (
          <SaleUl>
            {sale.map((s) => {
              let m = getMenuById(menu, s.id);
              let restaurant = getRestaurantById(rest, m.restaurant);

              return (
                <SaleLi key={s.id}>
                  <img src={s.menu_image} alt="" />
                  <div>
                    <span>{restaurant.store_name}</span>
                    <br />
                    <span>메뉴이름 </span>
                    <span>{s.menu_name}</span>
                    <br />
                    <span>{m.menu_price} </span>
                    <span>{s.menu_price}</span>
                  </div>
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
