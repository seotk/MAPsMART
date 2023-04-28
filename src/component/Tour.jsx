import Pagination from "./Pagination";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, deleteItem } from "../store/cartStore,";
import { Link } from "react-router-dom";
import ItemModalA from "./ItemModalA";

function Tour({ list }) {
  let [currentPage, setCurrentPage] = useState(1);
  let [itemsPerPage] = useState(10);
  let [storage, setStorage] = useState([]);
  let dispatch = useDispatch();
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFrirstItem = indexOfLastItem - itemsPerPage;
  const currentData = list.slice(indexOfFrirstItem, indexOfLastItem);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
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
  let [like, setlike] = useState(false);
  const handleClick = (e) => {
    setlike(!like);
    let parentDiv = e.target.closest("div");
    if (parentDiv.tagName === "DIV") {
      console.log(parentDiv);
      // 처리할 코드
    }
  };
  const [showModalT, setShowModalT] = useState(false);
  const openModal = (e) => {
    setShowModalT(true);
    e.preventDefault();
  };
  const closeModal = () => setShowModalT(false);
  console.log(storage);
  return (
    <>
      <section className="Tour selfList">
        {list.length ? (
          currentData.map((a, i) => (
            <p
              key={i}
              onClick={() => {
                saveDataToLocalStorage(
                  a.tourspotNm,
                  a.tourspotAddr,
                  a.refadNo,
                  a.mapLat,
                  a.mapLot,
                  a.restrntSumm,
                  a.tourspotDtlAddr
                );
              }}
            >
              <Link to="#" onClick={openModal}>
                <div className="Text">
                  <span hidden>{i}</span>
                  <span>{a.tourspotNm}</span>
                </div>
              </Link>
              <div className="Fn">
                {/* <div onClick={handleClick}>
                  {like === false ? (
                    <img
                      src={`${process.env.PUBLIC_URL}/img/favorites.svg`}
                      alt="북마크"
                    />
                  ) : (
                    <img
                      src={`${process.env.PUBLIC_URL}/img/favorites2.png`}
                      alt="북마크"
                    />
                  )}
                </div> */}
                <button
                  onClick={() => {
                    dispatch(
                      addItem({
                        id: i,
                        title: a.tourspotNm,
                        addr: a.tourspotAddr,
                        tel: a.refadNo,
                        mapLat: "a.mapLat",
                        mapLot: "a.mapLot",
                        summ: a.restrntSumm,
                        dtlAddr: a.tourspotDtlAddr,
                      })
                    );
                  }}
                >
                  <span>담기</span>
                </button>
              </div>
            </p>
          ))
        ) : (
          <div className="nulled">
            <span>데이터가 존재하지 않습니다...</span> <br />
            <span>대전 시청에 문의하세요.</span>
          </div>
        )}
      </section>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={list.length}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      {showModalT && (
        <ItemModalA currentData={storage} closeModal={closeModal} />
      )}
    </>
  );
}
export default Tour;
