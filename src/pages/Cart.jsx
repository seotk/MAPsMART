import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {
  let cart = useSelector((state) => state.cart);

  return (
    <div className="CartBody">
      <section className="Cart mw">
        <Link to="/Self">
          <button>뒤로가기</button>
        </Link>
        <h2>나의 장바구니</h2>
        <table className="CartDetail" border={1}>
          <th>장소 이름</th>
          <th>세부 정보</th>
          {cart.map((a, i) => {
            return (
              <tr key={i}>
                <td>{a.title}</td>
                <td>
                  <p>
                    <span>{a.addr}</span> <br />
                    <span>{a.tel}</span> <br />
                    <span>{a.summ}</span>
                  </p>
                </td>
              </tr>
            );
          })}
        </table>
        <a href="/project4/">
          <button>홈으로</button>
        </a>
      </section>
    </div>
  );
}
export default Cart;
