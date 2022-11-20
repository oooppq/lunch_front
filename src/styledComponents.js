import styled from "styled-components";
// import titleFont from "./fonts/title.ttf";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg from "./img/bg.png";

/** page wrapper */
export const Wrap = styled.div`
  align-items: center;
  width: 100%;
  //   height: 1000px;
  align-items: center;
  //   background-image: url(${bg});
  //   background-repeat: repeat;
  @media only screen and (min-width: 400px) {
    width: 400px;
    margin: 0 auto;
    left: 0;
    right: 0;
  }
`;

/** Header components */
export const HeaderDiv = styled.div`
  text-align: center;
  height: 70px;
  font-size: 70px;
  padding-bottom 10px;
`;

/** Nav components */
export const NavUl = styled.ul`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 9999;
  background-color: #ffe4bc;
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  margin: 0;
  border-radius: 10px 10px 0 0;
  @media only screen and (min-width: 400px) {
    width: 400px;
    margin: 0 auto;
    left: 0;
    right: 0;
  }
`;

export const NavLi = styled.li`
  padding: 0 7%;
  hight: 15%;
  width: 15%;
`;

export const NavImg = styled.img`
  hight: 100%;
  width: 100%;
`;

/** home page components */
export const HomeContainer = styled.div`
  width: 100%;
`;

export const RecommContainer = styled.div`
  width: 100%;
  height: 500px;
`;

export const RecommTitle = styled.div`
  font-size: 20px;
  font-weight: bolder;
  text-align: center;
`;

export const StyledSlider = styled(Slider)`
  .slick-list {
    width: 100%;
  }

  .slick-prev {
    display: none !important;
  }
  .slick-next {
    display: none !important;
  }
`;

export const RecommSlider = styled.div`
  width: 90%;
  hight: 600px;
  border-radius: 10px;
  background-color: orange;
  margin: 10px auto;
`;

export const SliderElem = styled.div`
  width: 100%;
  height: 10%;
  padding-top: 10px;
`;

export const SliderElemImg = styled.img`
  width: 80%;
  margin: auto;
`;

export const SliderElemInfo = styled.div`
  width: 100%;
  .mName {
    text-align: center;
    font-weight: bolder;
  }
  .rName {
    text-align: center;
  }
`;

export const SaleContainer = styled.div`
  width: 100%;
`;

export const SaleTitle = styled.div`
  font-size: 20px;
  font-weight: bolder;
  text-align: center;
`;

export const SaleUl = styled.ul`
  list-style: none;
  padding: 0;
`;

export const SaleLi = styled.li``;

/** roulette page components */
export const RouletteContainer = styled.div`
  text-align: center;
  canvas {
    transition: 2s;
  }

  button {
    background: #febf00;
    margin-top: 1rem;
    padding: 0.8rem 1.8rem;
    border: none;
    font-size: 1.5rem;
    font-weight: bold;
    border-radius: 5px;
    transition: 0.2s;
    cursor: pointer;
  }

  button:active {
    background: #444;
    color: #f9f9f9;
  }

  div {
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
  }

  div::before {
    content: "";
    position: absolute;
    left: 50%;
    top: -10px;
    margin-left: -25px;
    width: 0;
    height: 0;
    border: 25px solid black;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    z-index: 9999;
  }
`;

export const IndexContainer = styled.div`
  width: 350px;
  margin: 0 auto;
  border-radius: 20px;
`;

export const LocationNavBar = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  justify-content: center;
`;
export const LocationElement = styled.li`
  padding: 0 10px;
`;

export const RestaurantListDiv = styled.div``;
export const RestaurantElem = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
`;
export const RestaurantImg = styled.img``;
export const RestaurantInfo = styled.div``;
