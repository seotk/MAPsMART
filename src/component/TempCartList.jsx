import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../store/cartStore,";
import { Link } from "react-router-dom";

function TempCartList({ cart }) {
  let dispatch = useDispatch();
  console.log(cart);

  return (
    <div className="tempCartList">
      {cart.map((a, i) => {
        return (
          <div className="course" key={i}>
            {i < 10 ? (
              <>
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
              </>
            ) : null}

            {/* <CartList list={a} />; */}
          </div>
        );
      })}
      <div className="btns">
        <Link to="/Cart">
          <button>
            <span>공유하기</span>
          </button>
        </Link>
        <Link to="/Cart">
          <button>
            <span>저장하기</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
export default TempCartList;
