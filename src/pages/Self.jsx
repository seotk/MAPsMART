import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

// ===========================================================================

import location from "../store/location";
import SelfHotList from "../component/SelfHotList";
import Tour from "../component/Tour";
import Food from "../component/Food";
import Shop from "../component/Shop";
import Room from "../component/Room";
import SubHeader from "../component/SubHeader";
import TempCartList from "../component/TempCartList";
import Select from "../component/Select";
import Paginations from "../component/Pagination";

// ===========================================================================

import "../css/Self.css";
// ===========================================================================

function Self() {
  let cart = useSelector((state) => state.cart);
  // ===========================================================================

  const [dataT, setDataT] = useState([]);
  const [dataR, setDataR] = useState();
  const [dataF, setDataF] = useState();
  const [dataS, setDataS] = useState();
  let [locatoinList] = useState(location);
  let [chooseGu, setChooseGu] = useState([]);
  let [data1, setData1] = useState();
  let [data2, setData2] = useState();
  let [recentItems, setRecentItems] = useState([]);
  const [selectedOption, setSelectedOption] = useState("1");
  const [showModal, setShowModal] = useState(false);

  //==============component==================
  let [itemsPerPage] = useState(10);
  const [showModalA, setShowModalA] = useState(false);
  let [storage, setStorage] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let dispatch = useDispatch();
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFrirstItem = indexOfLastItem - itemsPerPage;
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [id, setId] = useState(false);
  const openModal = (e) => {
    setShowModal(true);
    e.preventDefault();
    const hotList = e.target.closest(".hotList");
    const id = hotList.querySelector("span").textContent;
    console.log(id); //
    setId(id - 1);
  };
  const openModalA = (e) => {
    setShowModalA(true);
    e.preventDefault();
  };
  const closeModal = () => setShowModal(false);
  const closeModalA = () => setShowModalA(false);

  // ========================================================

  useEffect(() => {
    const savedData = localStorage.getItem("data");
    if (savedData) {
      setData1(JSON.parse(savedData));
    }
    setRecentItems(JSON.parse(savedData));
  }, []);
  // ========================================================

  const saveDataToLocalStorage = (
    title,
    addr,
    tel,
    mapLat,
    mapLot,
    summ,
    dtlAddr
  ) => {
    const data = { title, addr, tel, mapLat, mapLot, summ, dtlAddr };
    localStorage.setItem("selected", JSON.stringify(data));
    setStorage([data]);
  };
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

  let SelfList = null;
  if (selectedOption === "1") {
    SelfList = (
      <>
        <Tour
          list={dataT}
          storage={storage}
          saveDataToLocalStorage={saveDataToLocalStorage}
          openModalA={openModalA}
          showModalA={showModalA}
          closeModalA={closeModalA}
          dispatch={dispatch}
          indexOfFrirstItem={indexOfFrirstItem}
          indexOfLastItem={indexOfLastItem}
        />
        <Paginations
          itemsPerPage={itemsPerPage}
          totalItems={dataT.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </>
    );
  } else if (selectedOption === "2") {
    SelfList = (
      <>
        <Food
          list={dataF}
          storage={storage}
          saveDataToLocalStorage={saveDataToLocalStorage}
          openModalA={openModalA}
          showModalA={showModalA}
          closeModalA={closeModalA}
          dispatch={dispatch}
          indexOfFrirstItem={indexOfFrirstItem}
          indexOfLastItem={indexOfLastItem}
        />
        <Paginations
          itemsPerPage={itemsPerPage}
          totalItems={dataF.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </>
    );
  } else if (selectedOption === "3") {
    SelfList = (
      <>
        <Shop
          list={dataS}
          storage={storage}
          saveDataToLocalStorage={saveDataToLocalStorage}
          openModalA={openModalA}
          showModalA={showModalA}
          closeModalA={closeModalA}
          dispatch={dispatch}
          indexOfFrirstItem={indexOfFrirstItem}
          indexOfLastItem={indexOfLastItem}
        />
        <Paginations
          itemsPerPage={itemsPerPage}
          totalItems={dataS.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </>
    );
  } else if (selectedOption === "4") {
    SelfList = (
      <>
        <Room
          list={dataR}
          storage={storage}
          saveDataToLocalStorage={saveDataToLocalStorage}
          openModalA={openModalA}
          showModalA={showModalA}
          closeModalA={closeModalA}
          dispatch={dispatch}
          indexOfFrirstItem={indexOfFrirstItem}
          indexOfLastItem={indexOfLastItem}
        />
        <Paginations
          itemsPerPage={itemsPerPage}
          totalItems={dataR.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </>
    );
  }
  // ===========================================================================

  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
    console.log(isOn);
  };
  // ===========================================================================

  // =========================================================

  return (
    <>
      <SubHeader />
      <section className="Self mw mw700 mw420">
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
          <SelfHotList
            openModal={openModal}
            showModal={showModal}
            closeModal={closeModal}
            id={id}
          />
          {/* ====================================================== */}

          <h2>
            <span>골라</span>
            <span>담기</span>
            <img src={`${process.env.PUBLIC_URL}/img/pick.png`} alt="불" />
          </h2>
          {SelfList}
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
