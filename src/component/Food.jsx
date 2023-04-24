import Pagination from "./Pagination";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../store/cartStore,";

function Food({ list }) {
  let cart = useSelector((state) => state.cart);
  console.log(cart);

  let [currentPage, setCurrentPage] = useState(1);
  let [itemsPerPage] = useState(20);
  let [storage, setStorage] = useState([]);
  let dispatch = useDispatch();
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFrirstItem = indexOfLastItem - itemsPerPage;
  const currentData = list.slice(indexOfFrirstItem, indexOfLastItem);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const saveDataToLocalStorage = (tourspotNm, tourspotAddr) => {
    const data = { tourspotNm, tourspotAddr };
    localStorage.setItem("selectedTour", JSON.stringify(data));
    setStorage([...storage, data]);
  };
  return (
    <>
      <section className="Food selfList">
        {currentData.map((a, i) => {
          return (
            <p
              key={i}
              onClick={() => {
                saveDataToLocalStorage(a.tourspotNm, a.tourspotAddr);
              }}
            >
              <span>장소:</span>
              {a.restrntNm}
              {a.restrntDtlAddr}
              <button
                onClick={() => {
                  dispatch(
                    addItem({
                      title: a.restrntNm,
                      addr: a.restrntAddr,
                      tel: a.restrntInqrTel,
                      mapLat: a.mapLat,
                      mapLot: a.mapLot,
                      summ: a.restrntSumm,
                      dtlAddr: a.restrntDtlAddr,
                    })
                  );
                }}
              >
                담기
              </button>
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
    </>
  );
}
export default Food;
