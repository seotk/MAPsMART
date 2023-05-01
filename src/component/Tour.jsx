import { addItem } from "../store/cartStore";
import { Link } from "react-router-dom";
import ItemModalA from "./ItemModalA";

function Tour({
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

  // let [like, setlike] = useState(false);
  // const handleClick = (e) => {
  //   setlike(!like);
  //   let parentDiv = e.target.closest("div");
  //   if (parentDiv.tagName === "DIV") {
  //     console.log(parentDiv);
  //   }
  // };
  // 시도중
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
              <Link to="#" onClick={openModalA}>
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

      {showModalA && (
        <ItemModalA currentData={storage} closeModal={closeModalA} />
      )}
    </>
  );
}
export default Tour;
