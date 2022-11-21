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
import { getData } from "../utils/getApi";
import { HomeSlider } from "./SliderUtils";
import loadingIcon from "../img/loading.svg";

const Home = () => {
  const [sale, setSale] = useState(null);
  const [loading, setLoading] = useState(true);

  const restUrl = "http://127.0.0.1:8000/menu/sale";

  useEffect(() => {
    getData(setSale, setLoading, restUrl);
  }, []);

  return (
    <HomeContainer>
      <RecommContainer>
        <RecommTitle>오늘의 추천메뉴</RecommTitle>
        <HomeSlider></HomeSlider>
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
              return (
                <SaleLi key={s.id}>
                  <img src={s.menu_image} alt="" />
                  <div>
                    <span>메뉴이름 </span>
                    <span>{s.menu_name}</span>
                    <br />
                    <span>할인가 </span>
                    <span>{s.menu_price}</span>
                  </div>
                </SaleLi>
              );
            })}

            {/* <SaleLi>test1</SaleLi>
            <SaleLi>test2</SaleLi>
            <SaleLi>test3</SaleLi> */}
          </SaleUl>
        )}
      </SaleContainer>
    </HomeContainer>
  );
};

export default Home;
