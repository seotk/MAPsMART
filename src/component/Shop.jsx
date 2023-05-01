import { addItem } from "../store/cartStore";
import { Link } from "react-router-dom";
import ItemModalA from "./ItemModalA";

function Shop({
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
      <section className=" selfList">
        {list.length ? (
          currentData.map((a, i) => {
            return (
              <p
                key={i}
                onClick={() => {
                  saveDataToLocalStorage(
                    a.shppgNm,
                    a.shppgAddr,
                    a.shppgInqrTel,
                    a.mapLat,
                    a.mapLot,
                    a.shppgIntrd,
                    a.shppgDtlAddr
                  );
                }}
              >
                <Link to="#" onClick={openModalA}>
                  <div className="Text">
                    <span hidden>{i}</span>
                    <span>{a.shppgNm}</span>
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
                          id: i,
                          title: a.shppgNm,
                          addr: a.shppgAddr,
                          tel: a.shppgInqrTel,
                          mapLat: a.mapLat,
                          mapLot: a.mapLot,
                          summ: a.shppgIntrd,
                          dtlAddr: a.shppgDtlAddr,
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
export default Shop;
