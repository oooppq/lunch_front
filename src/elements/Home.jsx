import React from "react";
import {
  HomeContainer,
  RecommContainer,
  RecommTitle,
  SaleContainer,
  SaleTitle,
  SaleUl,
  SaleLi,
} from "../styledComponents";

import { HomeSlider } from "./SliderUtils";

const Home = () => {
  return (
    <HomeContainer>
      <RecommContainer>
        <RecommTitle>오늘의 추천메뉴</RecommTitle>
        <HomeSlider></HomeSlider>
      </RecommContainer>

      <SaleContainer>
        <SaleTitle>오늘의 할인</SaleTitle>
        <SaleUl>
          <SaleLi>test1</SaleLi>
          <SaleLi>test2</SaleLi>
          <SaleLi>test3</SaleLi>
        </SaleUl>
      </SaleContainer>
    </HomeContainer>
  );
};

export default Home;
