import { Link } from "react-router-dom";

import CartDetail from "../component/CartDetail";
function Cart() {
  return (
    <div className="CartBody">
      <section className="Cart mw mw420 mw700">
        <Link to="/Self">
          <button>뒤로가기</button>
        </Link>
        <h2>나의 장바구니</h2>
        <CartDetail />
        <a href="/project4/">
          <button>홈으로</button>
        </a>
      </section>
    </div>
  );
}
export default Cart;
