import { useSelector } from "react-redux";
import Kakao from "../component/Kakao";

function Cart({}) {
  let cart = useSelector((state) => state.cart);

  return (
    <section className="Cart mw">
      <h2>나의 장바구니</h2>
      <div>
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
  );
}
export default Cart;
