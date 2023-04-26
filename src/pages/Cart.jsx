import { useSelector } from "react-redux";

function Cart({}) {
  let cart = useSelector((state) => state.cart);

  return (
    <section className="Cart mw">
      asd
      <h2>홍길동님의 장바구니</h2>
      {cart.map((a, i) => {
        return (
          <section key={i}>
            <p>{a.title}</p>
          </section>
        );
      })}
    </section>
  );
}
export default Cart;
