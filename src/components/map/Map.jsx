import React, { useEffect, useState } from "react";
import { KakaoMap } from "./Map.style";
import markerImageSrc from "../../assets/images/marker.png";

const Map = ({ searchValue }) => {
  const [map, setMap] = useState(null);
  const [mapMarkers, setMapMarkers] = useState([]);
  const [currentCustomOverlay, setCurrentCustomOverlay] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAOMAP}&libraries=services&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const mapOptions = {
          center: new kakao.maps.LatLng(33.450701, 126.570667), // 기본 위치
          level: 3,
        };
        const newMap = new kakao.maps.Map(mapContainer, mapOptions);
        setMap(newMap);

        const ps = new kakao.maps.services.Places();

        const placesSearchCB = (data, status) => {
          if (status === kakao.maps.services.Status.OK) {
            // 기존 마커 초기화
            mapMarkers.forEach((marker) => marker.setMap(null));
            setMapMarkers([]);

            // 검색 결과에 따라 마커 표시
            data.forEach((place) => {
              displayMarker(place);
            });
          }
        };

        const displayMarker = (place) => {
          const imageSize = new kakao.maps.Size(24, 36);
          const imageOption = { offset: new kakao.maps.Point(12, 32) };
          const markerImage = new kakao.maps.MarkerImage(
            markerImageSrc,
            imageSize,
            imageOption
          );

          const marker = new kakao.maps.Marker({
            map: newMap,
            position: new kakao.maps.LatLng(place.y, place.x),
            image: markerImage,
          });

          // 인포윈도우 생성
          const customOverlay = new kakao.maps.CustomOverlay({
            content: `<div class="info-title">${place.place_name}</div>`,
            map: null,
            position: marker.getPosition(),
            yAnchor: 2.4,
          });

          kakao.maps.event.addListener(marker, "click", () => {
            if (currentCustomOverlay) {
              currentCustomOverlay.setMap(null);
            }

            if (currentCustomOverlay !== customOverlay) {
              customOverlay.setMap(newMap);
              setCurrentCustomOverlay(customOverlay);
            } else {
              setCurrentCustomOverlay(null);
            }
          });

          setMapMarkers((prev) => [...prev, marker]); // 상태 업데이트
        };

        // 검색어가 변경될 때마다 검색 실행
        if (searchValue) {
          ps.keywordSearch(searchValue, placesSearchCB);
        }

        // 사용자의 현재 위치를 기반으로 지도 중심 설정 및 검색 실행
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const lat = position.coords.latitude;
              const lon = position.coords.longitude;
              const locPosition = new kakao.maps.LatLng(lat, lon);
              newMap.setCenter(locPosition);
            },
            () => {
              // 위치 정보 사용 불가 시 기본 위치로 설정
              newMap.setCenter(new kakao.maps.LatLng(33.450701, 126.570667)); // 기본 위치로 설정
            }
          );
        } else {
          newMap.setCenter(new kakao.maps.LatLng(33.450701, 126.570667)); // 기본 위치로 설정
        }

        kakao.maps.event.addListener(newMap, "center_changed", () => {
          // 중심이 변경될 때도 새로운 위치로 검색 수행
          ps.categorySearch("CE7", placesSearchCB, {
            location: newMap.getCenter(),
            useMapBounds: true,
          });
        });
      });
    };
  }, []);

  return <KakaoMap id="map" style={{ width: "100%", height: "100%" }} />;
};

export default Map;
