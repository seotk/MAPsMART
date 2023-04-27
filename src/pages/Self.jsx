import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// ===========================================================================

import location from "./location";
import ItemModal from "../component/ItemModal";
import Tour from "../component/Tour";
import Food from "../component/Food";
import Shop from "../component/Shop";
import Room from "../component/Room";
import SubHeader from "../component/SubHeader";
import TempCartList from "../component/TempCartList";
import Select from "../component/Select";
// ===========================================================================

import "swiper/css";
import "swiper/css/pagination";
import "../css/Main.css";
// ===========================================================================

import { Pagination } from "swiper";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { addItem, deleteItem } from "../store/cartStore,";
// ===========================================================================
SwiperCore.use([Autoplay]);

function Self({}) {
  let cart = useSelector((state) => state.cart);
  let hot = useSelector((state) => state.hot);
  // ===========================================================================

  const [dataT, setDataT] = useState([]);
  const [dataR, setDataR] = useState([]);
  const [dataF, setDataF] = useState([]);
  const [dataS, setDataS] = useState([]);
  let [locatoinList] = useState(location);
  let [chooseGu, setChooseGu] = useState([]);
  let [allData, setAllData] = useState();
  let [data1, setData1] = useState();
  let [data2, setData2] = useState();
  let [isLoading, setIsLoading] = useState(true);
  let [recentItems, setRecentItems] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [itemsPerPage] = useState(10);
  const [selectedOption, setSelectedOption] = useState("1");
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState(false);
  const openModal = (e) => {
    setShowModal(true);
    e.preventDefault();
    const hotList = e.target.closest(".hotList");
    const id = hotList.querySelector("span").textContent;
    console.log(id); //
    setId(id - 1);
  };
  const closeModal = () => setShowModal(false);

  // ========================================================

  useEffect(() => {
    const savedData = localStorage.getItem("data");
    if (savedData) {
      setData1(JSON.parse(savedData));
    }
    setRecentItems(JSON.parse(savedData));
  }, []);
  // ===========================================================================

  const handleSearchGu = (e) => {
    console.log(recentItems);
    const inputText = e.target.value.trim();
    // localStorage.setItem("selectedOption", inputText);
    setChooseGu(locatoinList[inputText]);

    const filteredData =
      inputText === "구전체" || null
        ? [...recentItems]
        : recentItems.filter((a) => {
            return Object.values(a).some(
              (val) => typeof val === "string" && val.includes(inputText)
            );
          });
    setData1(filteredData);
    setData2(filteredData);
    setCurrentPage(1);
  };

  const handleSearchDong = (e) => {
    const inputText2 = e.target.value.trim();

    setData1(
      inputText2 === "전체" || null
        ? [...data2]
        : data2.filter((a) => {
            return Object.values(a).some(
              (val) => typeof val === "string" && val.includes(inputText2)
            );
          })
    );
    setCurrentPage(1);
  };

  useEffect(() => {
    console.log(data1);
    if (!data1) {
      return console.log("데이터가 없음");
    }
    const newDataF = [];
    const newDataT = [];
    const newDataR = [];
    const newDataS = [];
    // data 상태값이 변경될 때마다 해당 로직을 실행합니다.
    data1.forEach((data) => {
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
  }, [data1]);
  // ======================================================================

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
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
  // ===========================================================================

  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
    console.log(isOn);
  };
  // ===========================================================================

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, []);
  //  해보는중
  // =========================================================

  return (
    <>
      <SubHeader />
      <section className="Self mw">
        <div className="">
          <Select
            handleSearchGu={handleSearchGu}
            handleSearchDong={handleSearchDong}
            handleSelect={handleSelect}
            handleToggle={handleToggle}
            setChooseGu={setChooseGu}
            chooseGu={chooseGu}
          />
          {/* ====================================================== */}

          <h2>
            <span>핫</span>
            <span>플레이스</span>
            <img src={`${process.env.PUBLIC_URL}/img/hot.png`} alt="불" />
          </h2>
          <div className="hot">
            <Swiper
              breakpoints={{
                // when window width is >= 320px (mobile)
                320: {
                  slidesPerView: 2,
                },
                // when window width is >= 768px (tablet)
                768: {
                  slidesPerView: 3,
                },
                // when window width is >= 1200px (desktop)
                1200: {
                  slidesPerView: 4,
                },
              }}
              initialSlide={6}
              slidesPerView={4}
              spaceBetween={60}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: false,
              }}
              modules={[Pagination, Autoplay, Navigation]}
              className="mySwiper"
            >
              {hot.map((a, i) => {
                return (
                  <>
                    <SwiperSlide key={i}>
                      <div className="hotList">
                        <span>{a.id}</span>
                        <div className="listImg">
                          <img
                            src={`${process.env.PUBLIC_URL}/img/${a.img}`}
                            alt={a.title}
                          />
                        </div>
                        <div className="listTxt">{a.title}</div>
                        <Link to="#" onClick={openModal}>
                          자세히보기
                        </Link>
                      </div>
                    </SwiperSlide>
                  </>
                );
              })}
            </Swiper>
            {showModal && (
              <ItemModal hot={hot} i={id} closeModal={closeModal} />
            )}
          </div>
          {/* ====================================================== */}

          <h2>
            <span>골라</span>
            <span>담기</span>
            <img src={`${process.env.PUBLIC_URL}/img/pick.png`} alt="불" />
          </h2>
          {selectedComponent}
        </div>
        {/* ====================================================== */}

        <div className={`tempCart ${isOn ? "cart--active" : ""}`}>
          <button
            onClick={() => {
              setIsOn(!isOn);
            }}
          >
            X
          </button>
          <span>담은목록</span>
          <TempCartList cart={cart} />
        </div>
      </section>
    </>
  );
}

export default Self;
