import React, { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const { kakao } = window;

const KakaoMap = (props) => {
  const [loc, setLoc] = useState({
    lat: 37.5509442,
    lng: 126.9410023,
  });
  const [level, setLevel] = useState(5);
  const locs = document.querySelectorAll(".loc");
  for (let l of locs) {
    l.addEventListener("click", () => {
      if (l.innerHTML == "정문") {
        setLoc({
          lat: 37.5523313,
          lng: 126.9373731,
        });
        setLevel(3);
      }
      if (l.innerHTML == "남문") {
        setLoc({
          lat: 37.5491012,
          lng: 126.9390893,
        });
        setLevel(4);
      }
      if (l.innerHTML == "후문") {
        setLoc({
          lat: 37.5500832,
          lng: 126.9438919,
        });
        setLevel(3);
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
      }
      if (l.innerHTML == "공덕") {
        setLoc({
          lat: 37.544359,
          lng: 126.9507534,
        });
        setLevel(3);
      }
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
        return <MapMarker key={rest.id} position={l} />;
      })}
    </Map>
  );
};

export default KakaoMap;
