import styled from "styled-components";
// import titleFont from "./fonts/title.ttf";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/** 각 element에 필요한 styled component를 모아둠 */
/** 엄청 많으니까 수정하고자하는 element 이름으로 검색해서 찾는게 빠름 */

/** page wrapper */
export const Wrap = styled.div`
  box-sizing: border-box;
  align-items: center;
  width: 100%;
  padding-bottom: 100px;
  margin: auto;
  // border-top: 15px solid #ffe8c6;

  @media only screen and (min-width: 400px) {
    width: 398px;
    margin: 0 auto;
    left: 0;
    right: 0;
    height: 100%;
  }

  .loading {
    text-align: center !important;
  }
`;

/** Header components */
export const HeaderDiv = styled.div`
  text-align: center;

  height: 90px;
  padding: 10px 0;
  background-color: #ffe8c6;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  margin-bottom: 20px;
  img {
    height: 50px;
    padding: 20px;
  }

  #logo {
    height: 100%;
    margin: 0 auto;
    padding: 0;
  }
  .account {
  }
`;

/** Nav components */
export const NavUl = styled.ul`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 9999;
  background-color: #ffe8c6;
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  margin: 0;

  box-shadow: 0 -3px 3px #dcdcdc;
  @media only screen and (min-width: 400px) {
    width: 400px;
    margin: 0 auto;
    left: 0;
    right: 0;
  }
`;

export const NavLi = styled.li`
  padding: 0 7%;
  margin: auto;
  hight: 15%;
  width: 15%;
  .icon {
    height: 100%;
    width: 100%;
  }
`;

export const NavImg = styled.img`
  height: 100%;
  width: 100%;
`;

/** home page components */
export const HomeContainer = styled.div`
  width: 100%;
`;

export const RecommContainer = styled.div`
  width: 90%;
  height: 480px;

  margin: 30px auto;
  position: relative;
  border-radius: 1%;
  box-shadow: 0px 0px 5.5px lightgrey;
`;

export const RecommTitle = styled.div`
  img {
    padding: 8px;
    width: 3%;
  }
  span {
    color: white;
  }
  background-color: white;
  position: absolute;

  top: 0px;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  font-weight: bolder;
  text-align: center;
`;

export const StyledSlider = styled(Slider)`
  margin-top: 20px;
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
  //   width: 80% !important;
  //   margin: 0 auto !important;
  width: 100%;
  height: 10%;
  padding-top: 10px;
  text-align: center;
`;

export const SliderMenu = styled.div`
  padding-top: 20px;
  font-size: 17px;
  text-align: center;
  font-weight: bolder;
  img {
    display: inline;
    width: 2.5%;
    padding: 6px;
  }
`;

export const SliderElemImg = styled.img`
  width: 90% !important;
  margin: 0 auto !important;
  border-radius: 6% !important;
  height: 300px;
  padding: 10px;
`;

export const SliderElemInfo = styled.div`
  width: 80% !important;

  margin: 0 auto !important;

  .rgroup {
    color: gray;
    font-weight: 600;
  }
  .rName {
    padding-bottom: 5px;
  }
  line-height: 160%;
`;

export const SaleContainer = styled.div`
  width: 350px;
  margin: 0 auto;
`;

export const SaleTitle = styled.div`
  font-size: 20px;
  font-weight: bolder;
  text-align: center;
  span {
    color: orange;
    text-emphasis-style: dot;
    text-emphasis-position: over left;
  }
`;

export const SaleUl = styled.ul`
  list-style: none;
  padding: 0;
`;

export const SaleLi = styled.li`
  padding: 10px 0;
  border-top: 2px solid grey;

  img {
    width: 96%;
    height: 100%;
    margin-left: 10px;
    border-radius: 5%;
  }
`;
export const SaleBox = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
`;
export const SaleLiLeft = styled.div`
  margin-left: 5px;
  font-size: 15px;
  padding: 5px;

  .name {
    font-weight: bolder;
    font-size: 18px;
  }
  .price {
    text-decoration: line-through;
    color: red;
  }
  .salePrice {
    font-weight: bolder;
  }
`;
export const SaleLiRight = styled.div`
  margin: 5px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  span {
    margin: 0px 1.5px;
    padding: 0;
    text-align: center;
    border-bottom: 3px solid rgba(166, 166, 166, 0.6);
    font-size: 12px;

    padding: 1px;
  }
  span:active {
    padding: 1px;
    border-radius: 3px;
  }
  span:active {
    background-color: rgba(166, 166, 166, 0.6);
  }
`;

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
    top: -15px;
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

/** Index page components */
export const IndexContainer = styled.div`
  width: 350px;
  margin: 0 auto;
  border-radius: 20px;
`;
export const MapChild = styled.div`
  background: linear-gradient(to top, #ffe400 30%, transparent 50%);
  display: inline;
`;

export const LocationNavBar = styled.ul`
  display: flex;
  list-style: none;
  padding: 10px;
  justify-content: center;
`;

export const LocationElement = styled.li`
 div{ padding:  5px 5px;
  margin: 0 6px;
  border-top:3px solid white;
  font-weight:bolder;
 
  // background-color:rgba(224,0,0,0.8);
  
  
 }
 div:hover{
  border-top:3px solid #FFE8C6;
 
 }

    // background-color:rgba(255,232,198,0.8);
    border-radius: 50%;
  }
  div:hover {
    background-color: rgba(255, 232, 198, 0.8);
  }
`;

export const RestaurantListDiv = styled.div`
  height: 100%;
`;
export const RestaurantListDivChild = styled.div`
  padding-bottom: 10px;
  font-weight: bold;
  border-bottom: 4px solid #ffe8c6;
`;
export const RestaurantElem = styled.div`
  margin: 15px 5px;
  width: 90%;
  padding: 10px;
  box-shadow: 0 0 20px lightgray;
  border-radius: 3%;
`;
export const RestaurantElement = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
`;

export const RestaurantElemLeft = styled.div`
  // margin-right: auto;
`;
export const RestaurantElemRight = styled.div`
  margin: 3px 15px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  span {
    margin: 0px 1px;
    text-align: center;
    border-bottom: 3px solid rgba(166, 166, 166, 0.6);
    font-size: 13px;

    padding: 1.5px;
  }
  span:active {
    background-color: rgba(166, 166, 166, 0.6);
  }
`;

export const RestaurantImg = styled.img`
  height: 80%;
  width: 100%;
  margin-right: 10px;

  border-radius: 2%;
`;
export const RestaurantInfo = styled.div`
  line-height: 160%;
  padding-left: 10px;
  padding-top: 7px;

  .name {
    font-weight: bolder;
  }
  span {
    color: grey;
    font-weight: 600;
  }
`;

export const MapInfo = styled.div`
  border-radius: 5px;
  text-align: center;
`;

export const ModalContainer = styled.div`
  .modal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .modal button {
    outline: none;
    cursor: pointer;
    border: 0;
  }
  .modal > section {
    width: 90%;
    max-width: 450px;
    margin: 0 auto;
    border-radius: 0.3rem;
    background-color: #fff;
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: modal-show 0.3s;
    overflow: hidden;
  }
  .modal > section > header {
    position: relative;
    padding: 16px 64px 16px 16px;
    background-color: #f1f1f1;
    font-weight: 700;
  }
  .modal > section > header button {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 30px;
    font-size: 21px;
    font-weight: 700;
    text-align: center;
    color: #999;
    background-color: transparent;
  }
  .modal > section > main {
    padding: 16px;
    border-bottom: 1px solid #dee2e6;
    border-top: 1px solid #dee2e6;
  }
  .modal > section > footer {
    padding: 12px 16px;
    text-align: right;
  }
  .modal > section > footer button {
    padding: 6px 12px;
    color: #fff;
    background-color: #6c757d;
    border-radius: 5px;
    font-size: 13px;
  }
  .modal.openModal {
    display: flex;
    align-items: center;
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: modal-bg-show 0.3s;
  }
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const DetailContainer = styled.div`
  text-align: center;
  padding: auto;
  margin: auto;
  img {
    margin: 8px;
    width: 350px;
    border-radius: 3%;
  }
  .rest-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    .type,
    .locType {
      width: 150px;
      text-align: left;
      display: flex;
      margin-bottom: 10px;
      .left {
        font-weight: bolder;
        margin-right: 10px;
      }
    }
  }
  .mapLink {
    margin-left: 10px;
    text-decoration: none;
    img {
      height: 15px;
      width: 15px;
      margin: 0;
    }
  }
  .menus {
    // display: grid;
    // grid-template-columns: 1fr 1fr;
    display: flex;
  }
  .menu-img {
    height: 70px;
    width: 70px;
  }
  .menu-info {
    padding: 10px 5px;
    text-align: left;
    margin-right: auto;
  }
  .menu-extra {
    padding-top: 10px;
    div {
      margin: 0px 1px;
      margin-bottom: 10px;
      text-align: center;
      border-radius: 5px;
      font-size: 13px;
      font-weight: bolder;
      background-color: #ffb74d;
      // padding: 1.5px;
      padding: 3px 5px;
    }
    div:active {
      background-color: orange;
    }
  }
  .menu {
    font-size: 20px;
    font-weight: bold;
  }

  .restName {
    margin: 2px;
    // text-decoration: overline;
    font-weight: bolder;
    font-size: 23px;
  }
  .explain {
    padding: 10px 0;
    width: 80%;
    margin: auto;
    font-weight: bolder;
    // border-bottom: 1px solid grey;
    margin-bottom: 10px;
  }
  .menuBox {
    margin: auto;
    width: 80%;
    margin-top: 20px;
    margin-bottom: 50px;
  }
  .menuTitle {
    border-bottom: 2px solid black;
    letter-spacing: 2px;
    font-size: 25px;
    font-weight: bolder;
    text-decoration: overline;
    padding-bottom: 5px;

    margin-bottom: 5px;
  }
  .line {
    text-decoration: line-through;
    color: red;
    margin-right: 2px;
  }
  .price {
    // justify-self: start;
    padding-right: 5px;
    margin-top: 10px;
  }
`;

export const AccountsContainer = styled.div`
  text-align: center;
  width: 80%;
  margin: 20px auto;
  input {
    border: 0;
    border-bottom: 1px solid grey;
    width: 100%;
    height: 30px;
    margin: 10px 0;
  }
  button {
    width: 100%;
    height: 40px;

    font-size: 20px;
    font-weight: bolder;
    border: 0;
    border-radius: 5px;
    background-color: #ffb74d;
  }
`;

export const AuthenticatedDiv = styled.div`
  width: 100%;

  .auth-head {
    height: 50px;
    display: flex;
    margin-bottom: 10px;
    .user-greeting {
      text-align: left;
      font-size: 20px;
      margin-right: auto;
      padding-top: 5px;
      span {
        font-size: 25px;
        font-weight: bolder;
      }
    }
    img {
      height: 36px;
    }
  }
  .saved {
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.6);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    .saved-title {
      display: flex;
      border-bottom: 1px solid black;
      font-size: 20px;
      font-weight: bolder;
      div {
        width: 50%;
        height: 30px;
        padding-top: 10px;
      }
      #saved-store-title {
        // border-right: 1px solid black;
        background-color: #ffb74d;
      }
    }
    .saved-elements {
      display: flex;
      flex-wrap: wrap;

      width: 100%;

      min-height: 400px;
      .saved-elem {
        margin: 20px 0;
        width: 50%;
        .img-outer {
          position: relative;
        }
        img {
          width: 100px;
          height: 100px;
        }
        .close {
          width: 25px;
          height: 25px;
          position: absolute;
          transform: translate(-50%, -50%);
          background-color: white;
          border-radius: 50%;
        }
      }
    }
  }
`;

export const LoginDiv = styled.div`
  witdh: 100%;
  .login-title {
    font-size: 40px;
    font-weight: bolder;
  }

  .goto-register {
    margin-top: 15px;
  }
`;

export const JoinDiv = styled.div`
  witdh: 100%;
  .register-title {
    font-size: 40px;
    font-weight: bolder;
  }
`;
