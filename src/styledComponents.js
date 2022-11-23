import styled from "styled-components";
// import titleFont from "./fonts/title.ttf";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/** 각 element에 필요한 styled component를 모아둠 */
/** 엄청 많으니까 수정하고자하는 element 이름으로 검색해서 찾는게 빠름 */

/** page wrapper */
export const Wrap = styled.div`
  align-items: center;
  width: 100%;
  align-items: center;
  padding-bottom: 100px;

  @media only screen and (min-width: 400px) {
    width: 400px;
    margin: 0 auto;
    left: 0;
    right: 0;
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
  img {
    height: 50px;
    padding: 20px;
  }
  #logo {
    height: 100%;
    margin: 0 auto;
    padding: 0;
  }
  .account{
  
  
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
  background-color: white;
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  margin: 0;
  
  box-shadow:0 -3px 3px #dcdcdc;
  @media only screen and (min-width: 400px) {
    width: 400px;
    margin: 0 auto;
    left: 0;
    right: 0;
  }
`;

export const NavLi = styled.li`
  padding: 0 7%;
  margin:auto;
  hight: 15%;
  width: 15%;
  .icon{
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
  //   width: 80% !important;
  //   margin: 0 auto !important;
  width: 100%;
  height: 10%;
  padding-top: 10px;

`;

export const SliderElemImg = styled.img`
  width: 80% !important;
  margin: 0 auto !important;
  border-radius: 10% !important;
  
`;

export const SliderElemInfo = styled.div`
  width: 80% !important;
  margin: 0 auto !important;
  .mName {
    text-align: center;
    font-weight: bolder;
   
  }
  .rName {
    text-align: center;
  }
  line-height:160%;
  
`;

export const SaleContainer = styled.div`
  width: 350px;
  margin: 0 auto;
`;

export const SaleTitle = styled.div`
  font-size: 20px;
  font-weight: bolder;
  text-align: center;
  span{
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
  border-top: 1px solid grey;
  
  img {
    width:96%;
    height: 100%;
    margin-left:10px;
    border-radius: 10%;
   
  }
`;
export const SaleBox = styled.li`
display:grid;
  grid-template-columns: 1.5fr 1fr ;


`;
export const SaleLiLeft = styled.div`
  margin-left: 5px;
  font-size:15px;
 
  .name{
    font-weight:bolder;
    font-size:18px;
  }
  .price{
    text-decoration:line-through;

  }
`;
export const SaleLiRight = styled.div`
margin:5px;
span{
  margin:0px 1.5px;
  padding:0;
  text-align:center;
  border:3px solid rgba(166,166,166,0.6);
  font-size:12px;

  padding:1px;
  border-radius:3px;

}
span:active{

  background-color:rgba(166,166,166,0.6);
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

/** Index page components */
export const IndexContainer = styled.div`
  width: 350px;
  margin: 0 auto;
  border-radius: 20px;
  
`;
export const MapChild = styled.div`
//background: linear-gradient(to top,#FFB788 30%,transparent 50%);
display:inline;
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
  border-top:2px solid white;
 
  // background-color:rgba(224,0,0,0.8);
  
  
 }
 div:hover{
  border-top:2px solid rgba(224,0,0,0.8);
 
 }

`;

export const RestaurantListDiv = styled.div`

`;
export const RestaurantListDivChild = styled.div`
padding-bottom:10px;
 font-weight:bold;
 border-bottom: 1.5px solid gray;
`;
export const RestaurantElem = styled.div`
margin:10px 5px;
  width: 95%;
  padding: 10px 0;
box-shadow: 0 0 20px lightgray;
border-radius:5%;

`;
export const RestaurantElement = styled.div`

display: grid;
grid-template-columns: 2fr 3fr ;
`;

export const RestaurantElemLeft = styled.div`

  // margin-right: auto;
`;
export const RestaurantElemRight = styled.div`
margin-left:60px;
span{
    margin:3px;
    padding:0;
    text-align:center;
    border:2px solid rgba(166,166,166,0.9);
    font-size:13px;
    padding:1px;
    border-radius:3px;
  
  }
  span:active{
    background-color:rgba(166,166,166,0.9);
   
  }


`;



export const RestaurantImg = styled.img`
  height: 80%;
  width:100%;
  margin-right: 10px;

  border-radius: 10%;
`;
export const RestaurantInfo = styled.div`
line-height:160%;
padding-left:30px;
.name{
  font-weight:bolder;

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
  div{
    padding:3px;
  }
  img {
    width: 350px;
  }
  .restName {
    font-weight: bolder;
  }
  
`;
