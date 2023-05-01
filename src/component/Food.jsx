import { addItem } from "../store/cartStore";
import { Link } from "react-router-dom";
import ItemModalA from "./ItemModalA";

function Food({
  list,
  storage,
  saveDataToLocalStorage,
  openModalA,
  showModalA,
  closeModalA,
  dispatch,
  indexOfFrirstItem,
  indexOfLastItem,
}) {
  const currentData = list.slice(indexOfFrirstItem, indexOfLastItem);

  return (
    <>
      <section className="Food selfList">
        {list.length ? (
          currentData.map((a, i) => {
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
                <Link to="#" onClick={openModalA}>
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
          })
        ) : (
          <div className="nulled">
            <span>데이터가 존재하지 않습니다...</span> <br />
            <span>대전 시청에 문의하세요.</span>
          </div>
        )}
      </section>

      {showModalA && (
        <ItemModalA currentData={storage} closeModal={closeModalA} />
      )}
    </>
  );
}
export default Food;
