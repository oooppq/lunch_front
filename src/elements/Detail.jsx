import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMultiData } from "../utils/getApi";
import { getSaleById } from "../utils/findData";
import { DetailContainer } from "../styledComponents";
import loadingIcon from "../img/loading.svg";

const Detail = () => {
  const { id } = useParams();
  const [rest, setRest] = useState(null);
  const [menu, setMenu] = useState(null);
  const [sale, setSale] = useState(null);
  const [loading, setLoading] = useState(true);

  const mapLink = "https://map.kakao.com/link/to/"; // 길찾기 링크

  const restUrl = "http://127.0.0.1:8000/restaurants/all/" + id;
  const menuUrl = "http://127.0.0.1:8000/restaurants/" + id + "/menu";
  const saleUrl = "http://127.0.0.1:8000/menu/allsale";

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
          <img src={rest.store_image} />
          <div className="restName">{rest.store_name}</div>
          <div className="type">{rest.type}</div>
          <div className="locType">
            {rest.location_type}🚶
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
              길찾기
            </a>
          </div>
          <div className="explain">{rest.explain}</div>
          <div className="menuTitle">메뉴</div>
          {menu.map((m) => {
            let s = getSaleById(sale, m.id);
            if (s)
              return (
                <div key={m.id} className="menus">
                  {m.menu_name} {m.menu_price} 세일가: {s.sale_price}
                </div>
              );
            else
              return (
                <div key={m.id} className="menus">
                  {m.menu_name} {m.menu_price}
                </div>
              );
          })}
        </>
      )}
    </DetailContainer>
  );
};

export default Detail;
