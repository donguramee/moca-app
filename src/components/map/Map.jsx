import React, { useEffect } from "react";
import { KakaoMap } from "./Map.style";
import markerImageSrc from "../../assets/images/marker.png";

const Map = () => {
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

        // Places 서비스 객체 생성
        const ps = new kakao.maps.services.Places();

        searchPlaces();

        function searchPlaces() {
          const keywaord = document.getElementById("keyword").ariaValueMax;

          if (!keywaord.replace(/^\s+|\s+$/g, "")) {
            alert("가고싶은 카페 혹은 동네를 입력해주세요!");
            return false;
          }
          // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
          ps.keywordSearch(keyword, placesSearchCB);
        }

        // 검색 결과 콜백 함수
        const placesSearchCB = (data, status) => {
          if (status === kakao.maps.services.Status.OK) {
            // 기존 마커 초기화
            mapMarkers.forEach((marker) => marker.setMap(null));
            mapMarkers = [];

            // 검색 결과에 따라 마커 표시
            data.forEach((place) => {
              displayMarker(place);
            });
          }
        };

        // 지도에 마커를 표시하는 함수
        let mapMarkers = [];
        let currentCustomOverlay = null; // 현재 열린 인포윈도우를 저장할 변수
        const displayMarker = (place) => {
          const imageSize = new kakao.maps.Size(24, 36); // 마커 이미지의 크기
          const imageOption = { offset: new kakao.maps.Point(12, 32) };
          const markerImage = new kakao.maps.MarkerImage(
            markerImageSrc,
            imageSize,
            imageOption
          );

          // 커스텀 마커를 생성하고 지도에 표시합니다
          const marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(place.y, place.x),
            image: markerImage, // 커스텀 마커 이미지 설정
          });
          mapMarkers.push(marker);

          // 인포윈도우 생성
          const customOverlay = new kakao.maps.CustomOverlay({
            content: `
            <div class="info-title">${place.place_name}</div>`,
            map: null, // 처음에는 맵에 표시하지 않음
            position: marker.getPosition(), // 마커 위치에 표시
            yAnchor: 2.4,
          });

          // 마커 클릭 이벤트
          kakao.maps.event.addListener(marker, "click", () => {
            // 현재 열린 인포윈도우가 있으면 닫음
            if (currentCustomOverlay) {
              currentCustomOverlay.setMap(null); // 현재 오버레이 닫기
            }

            // 클릭한 인포윈도우가 열려있지 않으면 열고, 이미 열려 있으면 닫음
            if (currentCustomOverlay !== customOverlay) {
              customOverlay.setMap(map); // 현재 오버레이 열기
              currentCustomOverlay = customOverlay; // 현재 열린 인포윈도우 업데이트
            } else {
              currentCustomOverlay = null; // 인포윈도우가 닫힌 상태로 업데이트
            }
          });
        };

        // 카테고리로 장소 검색 함수
        const searchCategory = () => {
          const center = map.getCenter();
          ps.categorySearch("CE7", placesSearchCB, {
            location: center,
            useMapBounds: true,
          });
        };

        // 사용자의 현재 위치를 기반으로 지도 중심 설정 및 검색 실행
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const lat = position.coords.latitude;
              const lon = position.coords.longitude;
              const locPosition = new kakao.maps.LatLng(lat, lon);

              // 현재 위치로 지도 중심 이동
              map.setCenter(locPosition);

              // 현재 위치에서 카테고리 검색 실행
              searchCategory();
            },
            () => {
              // 위치 정보 사용 불가 시 기본 위치로 설정하고 검색 실행
              searchCategory();
            }
          );
        } else {
          // 브라우저에서 geolocation을 지원하지 않을 때 기본 위치로 검색
          searchCategory();
        }

        // 지도 중심이 변경될 때마다 새로운 위치로 검색 수행
        kakao.maps.event.addListener(map, "center_changed", searchCategory);
      });
    };
  }, []);

  return <KakaoMap id="map" />;
};

export default Map;
