import { Link } from "react-router-dom";

import CartCard from "./CartCard";

function BestCartList({ BestCart }) {
  return (
    <>
      <div className="CartList mw">
        <h2>
          <span>장바구니</span>
          <span> 엿보기</span>
          <img src={`${process.env.PUBLIC_URL}/img/eyes.png`} alt="눈" />
        </h2>
        <ul className="listCon">
          {BestCart.map((a) => {
            return <CartCard a={a} key={a._id} />;
          })}
        </ul>

        <span>
          <Link to="/Self">더보러 가기</Link>
        </span>
      </div>
    </>
  );
}
export default BestCartList;
