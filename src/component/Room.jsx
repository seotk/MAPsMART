import { addItem } from "../store/cartStore";
import { Link } from "react-router-dom";
import ItemModalA from "./ItemModalA";

function Room({
  list,
  storage,
  saveDataToLocalStorage,
  closeModalA,
  openModalA,
  showModalA,
  dispatch,
  indexOfFrirstItem,
  indexOfLastItem,
}) {
  const currentData = list.slice(indexOfFrirstItem, indexOfLastItem);

  return (
    <>
      <section className="Room selfList">
        {list.length ? (
          currentData.map((a, i) => {
            return (
              <p
                key={i}
                onClick={() => {
                  saveDataToLocalStorage(
                    a.romsNm,
                    a.romsAddr,
                    a.romsRefadNo,
                    a.mapLat,
                    a.mapLot,
                    a.romsSumm,
                    a.romsDtlAddr
                  );
                }}
              >
                <Link to="#" onClick={openModalA}>
                  <div className="Text">
                    <span hidden>{i}</span>
                    <span>{a.romsNm}</span>
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
                          title: a.romsNm,
                          addr: a.romsAddr,
                          tel: a.romsRefadNo,
                          mapLat: "a.mapLat",
                          mapLot: "a.mapLot",
                          summ: a.romsSumm,
                          dtlAddr: a.romsDtlAddr,
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
export default Room;
