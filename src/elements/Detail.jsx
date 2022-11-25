import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMultiData } from "../utils/api";
import { getSaleById } from "../utils/findData";
import { DetailContainer } from "../styledComponents";
import loadingIcon from "../img/loading.svg";
import { baseUrl } from "../data";
import { addMyMenu } from "../utils/api";
import { CopyToClipboard } from "react-copy-to-clipboard";

import img from "../img/recom/3.png";
import noImage from "../img/no-image.png";
import locImage from "../img/location.png";
import shareIcon from "../img/share.png";

const Detail = (props) => {
  const { id } = useParams();
  const [rest, setRest] = useState(null);
  const [menu, setMenu] = useState(null);
  const [sale, setSale] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const mapLink = "https://map.kakao.com/link/to/"; // 길찾기 링크

  const restUrl = baseUrl + "restaurants/all/" + id;
  const menuUrl = baseUrl + "restaurants/" + id + "/menu";
  const saleUrl = baseUrl + "menu/allsale";

  useEffect(() => {
    getMultiData([setRest, setMenu, setSale], setLoading, [
      restUrl,
      menuUrl,
      saleUrl,
    ]);
  }, []);

  // const saveOnClick = (e) => {

  // }
  return (
    <DetailContainer>
      {loading ? (
        <div className="loading">
          <img src={loadingIcon} alt="" />
        </div>
      ) : (
        <div className="detail">
          <div className="restName">{rest.store_name}</div>
          <img src={rest.store_image ? rest.store_image : noImage} />

          <div className="explain">"{rest.explain}"</div>
          <div className="rest-info">
            <div className="type">
              <div className="left">카테고리:</div>
              <div>{rest.type}</div>
            </div>

            <div className="locType">
              <div className="left">위치:</div>
              <div>{rest.location_type}</div>
            </div>
            <div className="copy-navi">
              <a
                className="mapLink"
                href={
                  mapLink +
                  rest.store_name +
                  "," +
                  rest.latitude +
                  "," +
                  rest.longitude
                }
                target="_blank"
              >
                <img src={locImage} alt="" />
                길찾기
              </a>
              <CopyToClipboard text={window.location.href}>
                <button className="copy">
                  <img src={shareIcon} alt="" />
                  복사하기
                </button>
              </CopyToClipboard>
            </div>
          </div>

          <div className="menuBox">
            <div className="menuTitle">MENU</div>
            {menu.map((m) => {
              let s = getSaleById(sale, m.id);
              if (s)
                return (
                  <div key={m.id} className="menus">
                    <img src={m.menu_image} alt="" className="menu-img" />
                    <div className="menu-info">
                      <div className="menu">{m.menu_name}</div>
                      <span className="price">
                        <span className="line">{m.menu_price} </span>
                        {s.sale_price}
                      </span>
                    </div>
                    <div className="menu-extra">
                      <div
                        onClick={(e) => {
                          if (props.isAuth) {
                            addMyMenu(e);
                          } else navigate("/accounts");
                        }}
                      >
                        찜하기
                      </div>
                      <div>룰렛에 추가</div>
                    </div>
                  </div>
                );
              else
                return (
                  <div key={m.id} className="menus">
                    <img src={m.menu_image} alt="" className="menu-img" />
                    <div className="menu-info">
                      <div className="menu">{m.menu_name}</div>
                      <br />
                      <span className="price"> {m.menu_price}</span>
                    </div>
                    <div className="menu-extra">
                      <div
                        id={m.menu_name}
                        onClick={(e) => {
                          if (props.isAuth) {
                            addMyMenu(e);
                          } else navigate("/accounts");
                        }}
                      >
                        찜하기
                      </div>
                      <div>룰렛에 추가</div>
                    </div>
                  </div>
                );
            })}
          </div>
        </div>
      )}
    </DetailContainer>
  );
};

export default Detail;
