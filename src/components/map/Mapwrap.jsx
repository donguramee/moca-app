import React, { useEffect, useState } from "react";

const MapComponent = () => {
  const [keyword, setKeyword] = useState("");
  const [places, setPlaces] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [infowindow, setInfowindow] = useState(null); // infowindow 상태 추가

  useEffect(() => {
    // 카카오맵 API 스크립트 로드
    const script = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAOMAP}&libraries=services,clusterer&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
          level: 3,
        };
        const createdMap = new window.kakao.maps.Map(container, options);
        setMap(createdMap);

        // 인포윈도우 생성
        const createdInfowindow = new window.kakao.maps.InfoWindow({
          zIndex: 1,
        });
        setInfowindow(createdInfowindow); // 생성된 infowindow를 상태로 설정
      });
    };

    return () => script.remove(); // Clean up script
  }, []);

  const handleSearch = () => {
    if (!keyword.trim()) {
      alert("키워드를 입력해주세요!");
      return;
    }

    const ps = new window.kakao.maps.services.Places();
    ps.keywordSearch(keyword, placesSearchCB);
  };

  const placesSearchCB = (data, status, pagination) => {
    if (status === window.kakao.maps.services.Status.OK) {
      setPlaces(data);
      setPagination(pagination);
      displayPlaces(data);
    } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
      alert("검색 결과가 존재하지 않습니다.");
    } else if (status === window.kakao.maps.services.Status.ERROR) {
      alert("검색 결과 중 오류가 발생했습니다.");
    }
  };

  const displayPlaces = (places) => {
    // 이전 마커 제거
    markers.forEach((marker) => marker.setMap(null));
    setMarkers([]);

    const bounds = new window.kakao.maps.LatLngBounds();
    const newMarkers = places.map((place, i) => {
      const position = new window.kakao.maps.LatLng(place.y, place.x);
      const marker = addMarker(position, i);
      bounds.extend(position);

      // 마커 및 리스트 항목 마우스 이벤트
      window.kakao.maps.event.addListener(marker, "mouseover", () => {
        displayInfowindow(marker, place.place_name);
      });
      window.kakao.maps.event.addListener(marker, "mouseout", () => {
        infowindow.close();
      });

      return marker;
    });

    setMarkers(newMarkers);
    map.setBounds(bounds);
  };

  const addMarker = (position, idx) => {
    const imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png";
    const imageSize = new window.kakao.maps.Size(36, 37);
    const imgOptions = {
      spriteSize: new window.kakao.maps.Size(36, 691),
      spriteOrigin: new window.kakao.maps.Point(0, idx * 46 + 10),
      offset: new window.kakao.maps.Point(13, 37),
    };

    const markerImage = new window.kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imgOptions
    );

    const marker = new window.kakao.maps.Marker({
      position,
      image: markerImage,
      map,
    });

    return marker;
  };

  const displayInfowindow = (marker, title) => {
    if (!infowindow) return; // infowindow가 정의되지 않은 경우
    infowindow.setContent(`<div style="padding:5px;z-index:1;">${title}</div>`);
    infowindow.open(map, marker);
  };

  const handlePagination = (page) => {
    pagination.gotoPage(page);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  console.log(...places);
  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          id="keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="검색어를 입력하세요"
        />
        <button onClick={handleSearch}>검색</button>
      </div>
      <div id="map" style={{ width: "100%", height: "500px" }}></div>
      <div id="menu_wrap" className="bg_white">
        <ul id="placesList">
          {places.map((place, i) => (
            <li key={i}>
              <span className={`markerbg marker_${i + 1}`}></span>
              <div className="info">
                <h5>{place.place_name}</h5>
                {place.road_address_name && (
                  <>
                    <span>{place.road_address_name}</span>
                    <span className="jibun gray">{place.address_name}</span>
                  </>
                )}
                <span className="tel">{place.phone}</span>
              </div>
            </li>
          ))}
        </ul>
        <div id="pagination">
          {pagination &&
            Array(pagination.last)
              .fill()
              .map((_, i) => (
                <a
                  key={i + 1}
                  href="#"
                  onClick={() => handlePagination(i + 1)}
                  className={pagination.current === i + 1 ? "on" : ""}
                >
                  {i + 1}
                </a>
              ))}
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
