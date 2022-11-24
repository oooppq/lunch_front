import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  StyledSlider,
  SliderElem,
  SliderMenu,
  SliderElemImg,
  SliderElemInfo,
} from "../styledComponents";
import imgtwo from "../img/recom/1.png";
import left from "../img/left.png";
import right from "../img/right.png";
import loadingIcon from "../img/loading.svg";
import { getRestaurantById } from "../utils/findData";
import { useNavigate } from "react-router-dom";

export const HomeSlider = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    textAlign: "center",
    autoplay: true, //자동 재생 할 것인지
    autoplaySpeed: 3000,
  };
  const navigate = useNavigate();

  return (
    <div>
      {props.loading ? (
        <div className="loading">
          <img src={loadingIcon} alt="" />
        </div>
      ) : (
        <StyledSlider {...settings} height="100%;">
          {props.menu.map((menu) => {
            let restaurant = getRestaurantById(
              props.restaurant,
              menu.restaurant
            );
            return SliderElemMaker(restaurant, menu, navigate);
          })}
        </StyledSlider>
      )}
    </div>
  );
};

export const SliderElemMaker = (restaurant, menu, navigate) => {
  const gotoDetailOnClick = async (e) => {
    const id = e.currentTarget.id;
    navigate("index/" + id);
  };

  return (
    <SliderElem id={restaurant.id} key={menu.id} onClick={gotoDetailOnClick}>
      <SliderMenu> <img src={left} />{menu.menu_name}<img src={right} /></SliderMenu>
      <SliderElemImg src={imgtwo}></SliderElemImg>
      <SliderElemInfo>

        <div className="rName">{restaurant.explain}</div>

        <div className="rgroup">
          <span className="rName">#{restaurant.store_name} </span>
          <span className="rName">#가격 #{menu.menu_price}원</span>
        </div>

      </SliderElemInfo>
    </SliderElem>
  );
};
