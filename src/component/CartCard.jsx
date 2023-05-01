import { useState } from "react";

function CartCard({ a }) {
  let [like, setLike] = useState(false);
  const handleClick = () => {
    setLike(!like);
  };
  return (
    <li className="cartCard">
      <div>
        <span>{a.title}의 장바구니</span>
        <div onClick={handleClick}>
          {like === false ? (
            <img
              src={`${process.env.PUBLIC_URL}/img/favorites.svg`}
              alt="즐겨찾기"
            />
          ) : (
            <img
              src={`${process.env.PUBLIC_URL}/img/favorites2.png`}
              alt="즐겨찾기"
            />
          )}
        </div>
      </div>
      <div>
        <span>{a.cate1.title}</span>
        <span>{a.cate2.title}</span>
        <span>{a.cate3.title}</span>
        <span>{a.cate4.title}</span>
      </div>
    </li>
  );
}
export default CartCard;
