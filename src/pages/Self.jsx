import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import Dropdown from "react-bootstrap/Dropdown";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import location from "./location";

import Tour from "../component/Tour";
import Food from "../component/Food";
import Shop from "../component/Shop";
import Room from "../component/Room";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import { addItem, deleteItem } from "../store/cartStore,";
SwiperCore.use([Autoplay]);
function Self({ allDatas, datas, recentItems }) {
  let [carted, setCarted] = useState([]);
  let cart = useSelector((state) => state.cart);
  let hot = useSelector((state) => state.hot);
  let dispatch = useDispatch();

  console.log(allDatas);
  console.log(datas);
  console.log(recentItems);
  let [locatoinList] = useState(location);
  let [chooseGu, setChooseGu] = useState([]);
  let [allData, setAllData] = useState();
  let [data, setData] = useState();
  let [data2, setData2] = useState();
  let [isLoading, setIsLoading] = useState(true);
  const [dataT, setDataT] = useState([]);
  const [dataR, setDataR] = useState([]);
  const [dataF, setDataF] = useState([]);
  const [dataS, setDataS] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [itemsPerPage] = useState(10);
  const [selectedOption, setSelectedOption] = useState("");
  // ========================================================
  useEffect(() => {
    const watched = JSON.parse(localStorage.getItem("watched")) || [];
    watched.push(data);
    localStorage.setItem("watched", JSON.stringify(watched));
    console.log(watched);
  }, [data]);

  // =========================================================
  const handleSearchGu = (e) => {
    const inputText = e.target.value.trim();
    const newDataF = [];
    const newDataT = [];
    const newDataR = [];
    const newDataS = [];
    setChooseGu(locatoinList[inputText]);
    setData(
      inputText === "구전체"
        ? [...allDatas]
        : [...allDatas].filter((a) => {
            return Object.values(a).some(
              (val) => typeof val === "string" && val.includes(inputText)
            );
          })
    );
    recentItems.forEach((data) => {
      if (data.restrntNm) {
        newDataF.push(data);
      } else if (data.tourspotNm) {
        newDataT.push(data);
      } else if (data.romsNm) {
        newDataR.push(data);
      } else if (data.shppgNm) {
        newDataS.push(data);
      }
    });

    setDataF(newDataF);
    setDataT(newDataT);
    setDataR(newDataR);
    setDataS(newDataS);
    setData2(
      inputText === "구전체"
        ? [...allDatas]
        : allDatas.filter((a) => {
            return Object.values(a).some(
              (val) => typeof val === "string" && val.includes(inputText)
            );
          })
    );
    recentItems.forEach((data) => {
      if (data.restrntNm) {
        newDataF.push(data);
      } else if (data.tourspotNm) {
        newDataT.push(data);
      } else if (data.romsNm) {
        newDataR.push(data);
      } else if (data.shppgNm) {
        newDataS.push(data);
      }
    });

    setDataF(newDataF);
    setDataT(newDataT);
    setDataR(newDataR);
    setDataS(newDataS);
    setCurrentPage(1);
    console.log(data);
    console.log(data2);
  };

  const handleSearchDong = (e) => {
    const inputText2 = e.target.value.trim();
    setData(
      inputText2 === "전체"
        ? [...data2]
        : data2.filter((a) => {
            return Object.values(a).some(
              (val) => typeof val === "string" && val.includes(inputText2)
            );
          })
    );
    const newDataF = [];
    const newDataT = [];
    const newDataR = [];
    const newDataS = [];

    recentItems.forEach((data) => {
      if (data.restrntNm) {
        newDataF.push(data);
      } else if (data.tourspotNm) {
        newDataT.push(data);
      } else if (data.romsNm) {
        newDataR.push(data);
      } else if (data.shppgNm) {
        newDataS.push(data);
      }
    });

    setDataF(newDataF);
    setDataT(newDataT);
    setDataR(newDataR);
    setDataS(newDataS);
    setCurrentPage(1);
    console.log(data);
    console.log(data2);
  };

  const handleSelect = (eventKey) => {
    setSelectedOption(eventKey);
  };

  let selectedComponent = null;
  if (selectedOption === "1") {
    selectedComponent = <Tour list={dataT} />;
  } else if (selectedOption === "2") {
    selectedComponent = <Food list={dataF} />;
  } else if (selectedOption === "3") {
    selectedComponent = <Shop list={dataS} />;
  } else if (selectedOption === "4") {
    selectedComponent = <Room list={dataR} />;
  }

  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
    console.log(isOn);
  };
  return (
    <section className="mw p4">
      <h1>구 입력</h1>
      <span onClick={handleToggle}>장바구니</span>

      <div className="">
        <select onChange={handleSearchGu} name="name1" id="">
          <option value="구전체">구전체</option>
          <option value="서구">서구</option>
          <option value="중구">중구</option>
          <option value="동구">동구</option>
          <option value="유성구">유성구</option>
          <option value="대덕구">대덕구</option>
        </select>
        <select onChange={handleSearchDong} name="name2">
          <option value="전체">전체</option>
          {chooseGu.map((key, i) => (
            <option key={i} value={key}>
              {key}
            </option>
          ))}
        </select>
        <Dropdown onSelect={handleSelect}>
          <Dropdown.Toggle variant="success" id="dropdown-basic" default="1">
            Select an option
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="1" active>
              관광지
            </Dropdown.Item>
            <Dropdown.Item eventKey="2">음식점</Dropdown.Item>
            <Dropdown.Item eventKey="3">쇼핑몰</Dropdown.Item>
            <Dropdown.Item eventKey="4">숙박업소</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="hot">
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {hot.map((a, i) => {
              return (
                <>
                  <SwiperSlide
                    key={i}
                    onClick={() => {
                      dispatch(
                        addItem({
                          id: i,
                          title: a.title,
                          addr: a.addr,
                          tel: a.tel,
                          mapLat: a.mapLat,
                          mapLot: a.mapLot,
                          summ: a.summ,
                          dtlAddr: a.dtlAddr,
                        })
                      );
                    }}
                  >
                    <div className="hotList">
                      <div className="listImg">
                        <img src={`/img/${a.img}`} alt={a.title} />
                      </div>
                      <div className="listTxt">
                        {a.title}
                        {a.dtlAddr}
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
        {selectedComponent}

        {/* {data.length === 0 && <p>결과가 존재하지 않습니다.</p>} */}
      </div>
      <div className={`Cart ${isOn ? "cart--active" : ""}`}>
        <button
          onClick={() => {
            setIsOn(!isOn);
          }}
        >
          x
        </button>
        <div className="cart">
          {cart.map((a, i) => {
            return (
              <div className="course" key={i}>
                <p>{i + 1}차</p>
                <div className="choiced">{a.title}</div>
                <button
                  onClick={(e) => {
                    return dispatch(
                      deleteItem(
                        e.target.parentNode.querySelector(".choiced")
                          .textContent
                      )
                    );
                  }}
                >
                  삭제
                </button>
                {/* <CartList list={a} />; */}
              </div>
            );
          })}
          <Link to="/Cart">저장하기</Link>
        </div>
      </div>
      {isLoading ? <div>로딩중</div> : <></>}
    </section>
  );
}
export default Self;
