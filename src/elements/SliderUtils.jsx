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
import noImage from "../img/no-image.png";
import { useEffect, useState } from "react";

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
    pauseOnHover: true,
  };
  const navigate = useNavigate();
  const menuToRecom = [4, 12, 27, 38, 214];

  // const [menu, setMenu] = useState(props.menu);

  // useEffect(() => {
  //   console.log(menu);
  //   let tmp = [];
  //   while (tmp.lenth < 2) {
  //     let i = Math.random() % menu.length;
  //     if (!(menu[i] in tmp)) tmp.push(menu[i]);
  //   }
  //   setMenu(tmp);
  // }, []);

  return (
    <div>
      {props.loading ? (
        <div className="loading">
          <img src={loadingIcon} alt="" />
        </div>
      ) : (
        <StyledSlider {...settings} height="100%;">
          {props.menu.map((m) => {
            if (m.id in menuToRecom) {
              let restaurant = getRestaurantById(
                props.restaurant,
                m.restaurant
              );
              return SliderElemMaker(restaurant, m, navigate);
            }
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
      <SliderMenu>
        {" "}
        <img src={left} />
        {menu.menu_name}
        <img src={right} />
      </SliderMenu>
      <SliderElemImg
        src={menu.menu_image ? menu.menu_image : noImage}
      ></SliderElemImg>
      <SliderElemInfo>
        <div className="rName">{restaurant.explain}</div>

        <div className="rgroup">
          <span className="rName">#{restaurant.store_name} </span>
          <span className="rName">#가격 {menu.menu_price}원</span>
        </div>
      </SliderElemInfo>
    </SliderElem>
  );
};
