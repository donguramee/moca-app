import React, { useEffect } from "react";
import { KakaoMap } from "./Map.style";
import unmarkerImageSrc from "../../assets/images/unmarker.png";

const Map = ({ searchValue, setSearchResults }) => {
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
        const map = new kakao.maps.Map(mapContainer, mapOptions);
        const ps = new kakao.maps.services.Places();
        let mapMarkers = [];
        let currentCustomOverlay = null;
        let debounceTimer; // 디바운스 타이머

        const displayMarker = (place) => {
          const imageSize = new kakao.maps.Size(24, 36);
          const imageOption = { offset: new kakao.maps.Point(12, 32) };
          const markerImage = new kakao.maps.MarkerImage(
            unmarkerImageSrc,
            imageSize,
            imageOption
          );

          const marker = new kakao.maps.Marker({
            map,
            position: new kakao.maps.LatLng(place.y, place.x),
            image: markerImage,
          });
          mapMarkers.push(marker);

          const customOverlay = new kakao.maps.CustomOverlay({
            content: `<div class="info-title">${place.place_name}</div>`,
            position: marker.getPosition(),
            yAnchor: 2.4,
          });

          kakao.maps.event.addListener(marker, "mouseover", () => {
            if (currentCustomOverlay) {
              currentCustomOverlay.setMap(null);
            }
            customOverlay.setMap(map);
            currentCustomOverlay = customOverlay;
          });

          kakao.maps.event.addListener(marker, "mouseout", () => {
            customOverlay.setMap(null);
          });
        };

        const updateSearchResults = (data) => {
          const bounds = map.getBounds();
          const visiblePlaces = data.filter((place) => {
            const position = new kakao.maps.LatLng(place.y, place.x);
            return bounds.contain(position);
          });
          setSearchResults(visiblePlaces); // 현재 화면에 보이는 마커만 프롭스로 전달
        };

        const placesSearchCB = (data, status) => {
          if (status === kakao.maps.services.Status.OK) {
            mapMarkers.forEach((marker) => marker.setMap(null));
            mapMarkers = [];
            data.forEach((place) => displayMarker(place));
            updateSearchResults(data); // 전체 검색 결과를 사용하여 현재 화면에 보이는 마커 업데이트
          } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
            alert("검색하신 카페가 없어요.");
          }
        };

        const searchPlaces = (position) => {
          if (position) {
            ps.categorySearch("CE7", placesSearchCB, {
              location: position,
              useMapBounds: true,
            });
          }
        };

        // 지도 이동 이벤트 리스너 추가
        kakao.maps.event.addListener(map, "dragend", () => {
          clearTimeout(debounceTimer); // 기존 타이머 클리어
          debounceTimer = setTimeout(() => {
            const center = map.getCenter();
            searchPlaces(center); // 0.5초 후에 데이터 검색
          }, 500); // 0.5초 대기
        });

        // searchValue가 변경될 때마다 지도 중심 업데이트
        if (searchValue) {
          const position = new kakao.maps.LatLng(
            searchValue.lat,
            searchValue.lng
          ); // 위도와 경도 정보를 포함한 객체로 가정
          map.setCenter(position);
          searchPlaces(position); // 새로운 위치에서 카페 검색
        }

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const lat = position.coords.latitude;
              const lon = position.coords.longitude;
              const locPosition = new kakao.maps.LatLng(lat, lon);
              map.setCenter(locPosition);
              searchPlaces(locPosition); // 초기 위치에서 카페 검색
            },
            () => {
              map.setCenter(new kakao.maps.LatLng(33.450701, 126.570667));
              searchPlaces(searchValue); // 초기 위치에서 카페 검색
            }
          );
        }
      });
    };
  }, [searchValue, setSearchResults]);

  return <KakaoMap id="map" />;
};

export default Map;
