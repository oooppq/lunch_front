import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMultiData } from "../utils/api";
import { getSaleById } from "../utils/findData";
import { DetailContainer } from "../styledComponents";
import loadingIcon from "../img/loading.svg";
import { baseUrl } from "../data";

import img from "../img/recom/3.png";

const Detail = () => {
  const { id } = useParams();
  const [rest, setRest] = useState(null);
  const [menu, setMenu] = useState(null);
  const [sale, setSale] = useState(null);
  const [loading, setLoading] = useState(true);

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

  return (
    <DetailContainer>
      {loading ? (
        <div className="loading">
          <img src={loadingIcon} alt="" />
        </div>
      ) : (
        <>
          <div className="restName">{rest.store_name}</div>
          <img src={img} />
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
            🚶길찾기
          </a>
          <div className="explain">{rest.explain}</div>
          <span className="type">#{rest.type} </span>
          <span className="locType">#{rest.location_type}</span>

          <div className="menuBox">
            <div className="menuTitle">MENU</div>
            {menu.map((m) => {
              let s = getSaleById(sale, m.id);
              if (s)
                return (
                  <div key={m.id} className="menus">
                    <span className="menu">{m.menu_name}</span>{" "}
                    <span className="price">
                      <span className="line">{m.menu_price} </span>{" "}
                      {s.sale_price}
                    </span>
                  </div>
                );
              else
                return (
                  <div key={m.id} className="menus">
                    <span className="menu">{m.menu_name}</span>{" "}
                    <span className="price"> {m.menu_price}</span>
                  </div>
                );
            })}
          </div>
        </>
      )}
    </DetailContainer>
  );
};

export default Detail;
