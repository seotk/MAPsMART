import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {
  let cart = useSelector((state) => state.cart);

  return (
    <div className="CartBody">
      <section className="Cart mw">
        <Link>
          <button>뒤로가기</button>
        </Link>
        <div>
          <h2>나의 장바구니</h2>
          <section>
            <p>장소이름</p>
            <p>정보</p>
          </section>
          {cart.map((a, i) => {
            return (
              <section key={i}>
                <p>{a.title}</p>
                <div>
                  <p>{a.addr}</p>
                  <p>{a.summ}</p>
                  <p>{a.tel}</p>
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </div>
  );
}
export default Cart;
