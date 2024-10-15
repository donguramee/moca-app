import React, { useEffect } from "react";
import { KakaoMap } from "./Map.style";
import markerImageSrc from "../../assets/images/marker.png";

const Map = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAOMAP}&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const mapOptions = {
          center: new kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        const map = new kakao.maps.Map(mapContainer, mapOptions);
        // 장소 검색 객체를 생성합니다
        const ps = new kakao.maps.services.Places(map);

        // 카테고리로 은행을 검색합니다
        ps.categorySearch("BK9", placesSearchCB, { useMapBounds: true });

        // 키워드 검색 완료 시 호출되는 콜백함수 입니다
        function placesSearchCB(data, status, pagination) {
          if (status === kakao.maps.services.Status.OK) {
            for (var i = 0; i < data.length; i++) {
              displayMarker(data[i]);
            }
          }
        }

        // 사용자 위치를 가져오는 함수
        const displayMarker = (locPosition, message) => {
          const imageSize = new kakao.maps.Size(36, 48); // 마커 이미지의 크기
          const imageOption = { offset: new kakao.maps.Point(18, 48) }; // 마커의 좌표와 일치시킬 이미지의 위치

          // 마커 이미지를 생성합니다
          const markerImage = new kakao.maps.MarkerImage(
            markerImageSrc,
            imageSize,
            imageOption
          );

          // 마커를 생성합니다
          const marker = new kakao.maps.Marker({
            map: map,
            position: locPosition,
            image: markerImage, // 커스텀 마커 이미지 설정
          });

          // 커스텀 인포윈도우 내용
          const iwContent = `
            <div>
            <span class="info-title">${message}</span>
            </div>
          `;

          // 인포윈도우를 생성합니다
          const infowindow = new kakao.maps.InfoWindow({
            content: iwContent,
          });

          // 인포윈도우를 마커 위에 표시합니다
          infowindow.open(map, marker);

          // 지도 중심 좌표를 접속 위치로 변경합니다
          map.setCenter(locPosition);
          // 마커에 마우스오버 이벤트를 등록합니다
          kakao.maps.event.addListener(marker, "mouseover", function () {
            // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
            infowindow.open(map, marker);
          });

          // 마커에 마우스아웃 이벤트를 등록합니다
          kakao.maps.event.addListener(marker, "mouseout", function () {
            // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
            infowindow.close();
          });
        };

        // 사용자 위치를 찾기
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const lat = position.coords.latitude;
              const lon = position.coords.longitude;
              const locPosition = new kakao.maps.LatLng(lat, lon);
              displayMarker(locPosition, "현재 위치입니다.");
            },
            () => {
              // 위치 정보 사용 불가 시 기본 위치로 설정
              const locPosition = new kakao.maps.LatLng(33.450701, 126.570667);
              displayMarker(locPosition, "geolocation을 사용할 수 없어요.");
            }
          );
        } else {
          // 브라우저에서 geolocation을 지원하지 않을 때
          const locPosition = new kakao.maps.LatLng(33.450701, 126.570667);
          displayMarker(
            locPosition,
            "geolocation을 지원하지 않는 브라우저입니다."
          );
        }
      });
    };
  }, []);

  return <KakaoMap id="map" />;
};

export default Map;
