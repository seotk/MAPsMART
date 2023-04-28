import Pagination from "./Pagination";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../store/cartStore,";
import { Link } from "react-router-dom";
import ItemModalA from "./ItemModalA";

function Food({ list }) {
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
  const [showModalT, setShowModalT] = useState(false);
  const openModal = (e) => {
    setShowModalT(true);
    e.preventDefault();
  };
  const closeModal = () => setShowModalT(false);
  console.log(storage);
  return (
    <>
      <section className="Food selfList">
        {currentData.map((a, i) => {
          return (
            <p
              key={i}
              onClick={() => {
                saveDataToLocalStorage(
                  a.restrntNm,
                  a.restrntAddr,
                  a.restrntInqrTel,
                  a.mapLat,
                  a.mapLot,
                  a.restrntSumm,
                  a.restrntDtlAddr
                );
              }}
            >
              <Link to="#" onClick={openModal}>
                <div className="Text">
                  <span hidden>{i}</span>
                  <span>{a.restrntNm}</span>
                </div>
              </Link>
              <div className="Fn">
                {/* <img
                  src={`${process.env.PUBLIC_URL}/img/favorites.svg`}
                  alt="북마크"
                /> */}
                <button
                  onClick={() => {
                    dispatch(
                      addItem({
                        title: a.restrntNm,
                        addr: a.restrntAddr,
                        tel: a.restrntInqrTel,
                        mapLat: "a.mapLat",
                        mapLot: "a.mapLot",
                        summ: a.restrntSumm,
                        dtlAddr: a.restrntDtlAddr,
                      })
                    );
                  }}
                >
                  담기
                </button>
              </div>
            </p>
          );
        })}
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
export default Food;
