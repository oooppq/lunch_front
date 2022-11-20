import React, { useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const { kakao } = window;

const KakaoMap = (props) => {
  // const MarkerMaker = () => {
  //   props.data.map((restaurant) => {
  //     let loc = { lat: restaurant.latitude, lng: restaurant.longitude };
  //     console.log(loc);
  //     return (
  //       <MapMarker className="test" key={restaurant.id} position={loc}>
  //         <div style={{ color: "#000" }}>test</div>
  //       </MapMarker>
  //     );
  //   });
  // };
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.5509442, 126.9410023),
      level: 5,
    };
    const map = new kakao.maps.Map(container, options);
    for (let restaurant of props.data) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(
          restaurant.latitude,
          restaurant.longitude
        ),
      });
    }
  }, []);

  return (
    <div
      // center={{ lat: 37.5509442, lng: 126.9410023 }}
      style={{ width: "100%", height: "360px" }}
      id="map"
    >
      {/* <MapMarker position={{ lat: 37.5509442, lng: 126.9410023 }}>
        <div style={{ color: "#000" }}>test</div>
      </MapMarker>
      {MarkerMaker()} */}
    </div>
  );
};

export default KakaoMap;
