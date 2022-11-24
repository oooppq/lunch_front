import React, { useEffect, useState } from "react";
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import marker from "../img/marker.png";
import { MapInfo } from "../styledComponents";

const { kakao } = window;

const KakaoMap = (props) => {
  const [loc, setLoc] = useState({
    lat: 37.5509442,
    lng: 126.9410023,
  });
  const [level, setLevel] = useState(5);
  const locs = document.querySelectorAll(".loc");
  const cookieSet = () => {
    document.cookie = "safeCookie1=foo; SameSite=Lax";
    document.cookie = "safeCookie2=foo";
    document.cookie = "crossCookie=bar; SameSite=None; Secure";
  };
  cookieSet();
  for (let l of locs) {
    l.addEventListener("click", (e) => {
      if (l.innerHTML == "정문") {
        setLoc({
          lat: 37.5523313,
          lng: 126.9373731,
        });
        setLevel(3);
        cookieSet();
      }
      if (l.innerHTML == "남문") {
        setLoc({
          lat: 37.5491012,
          lng: 126.9390893,
        });
        setLevel(4);
        cookieSet();
      }
      if (l.innerHTML == "후문") {
        setLoc({
          lat: 37.5500832,
          lng: 126.9438919,
        });
        setLevel(3);
        cookieSet();
      }
      if (l.innerHTML == "신촌") {
        setLoc({
          lat: 37.5550592,
          lng: 126.9364998,
        });
        setLevel(3);
      }
      if (l.innerHTML == "대흥") {
        setLoc({
          lat: 37.547631,
          lng: 126.942467,
        });
        setLevel(3);
        cookieSet();
      }
      if (l.innerHTML == "공덕") {
        setLoc({
          lat: 37.544359,
          lng: 126.9507534,
        });
        setLevel(3);
        cookieSet();
      }
    });
  }
  let mis = document.querySelectorAll(".mapInfo");
  for (let mi of mis) {
    console.log(mi);
    mi.addEventListener("click", () => {
      console.log("check!");
    });
  }
  return (
    <Map // 지도를 표시할 Container
      center={loc}
      style={{
        // 지도의 크기
        width: "100%",
        height: "450px",
      }}
      level={level} // 지도의 확대 레벨
    >
      {props.data.map((rest) => {
        let l = { lat: rest.latitude, lng: rest.longitude };
        return (
          <MapMarker
            key={rest.id}
            position={l}
            image={{
              src: marker,
              size: { width: 40, height: 40 },
            }}
          >
            {/* <CustomOverlayMap position={l} yAnchor={1}>
              <div className="customoverlay">test</div>
              <div onClick={() => console.log("check")}>setfes</div>
            </CustomOverlayMap> */}
            {/* <MapInfo
              className="mapInfo"
              onClick={() => {
                // props.setModal(true);
                console.log("check!");
              }}
            >
              test
            </MapInfo> */}
          </MapMarker>
        );
      })}
    </Map>
  );
};

export default KakaoMap;
