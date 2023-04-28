import { Link } from "react-router-dom";
import "../css/MainList.css";
import SubHeader from "../component/SubHeader";
import CartCard from "../component/CartCard";
import hotDataList from "../store/hotdata";
import BestCartList from "../store/BestCartListData";

function MainList() {
  let favoriteMost = [...hotDataList]
    .sort((a, b) => b.like - a.like)
    .slice(0, 3);
  let bookmarkMost = [...hotDataList]
    .sort((a, b) => b.bookmark - a.bookmark)
    .slice(0, 3);
  let pickMost = [...hotDataList].sort((a, b) => b.pick - a.pick).slice(0, 3);

  console.log(favoriteMost);
  let BestCart = [...BestCartList].slice(0, 4);
  console.log(BestCart);
  return (
    <>
      <SubHeader />
      <section className="MainList ">
        <div className="cartList mw">
          <h2>
            <span>장바구니</span>
            <span> 엿보기</span>
            <img src={`${process.env.PUBLIC_URL}/img/eyes.png`} alt="눈" />
          </h2>
          <ul className="listCon">
            {BestCart.map((a, i) => {
              return <CartCard a={a} i={i} />;
            })}
          </ul>

          <span>
            <Link to="/Self">더보러 가기</Link>
          </span>
        </div>
        <div className="BestPlace mw">
          <img
            src={`${process.env.PUBLIC_URL}/img/bestplace.svg`}
            alt="베스트플레이스"
          />
          <div className="favoriteMost">
            <h4>가장 많이 좋아하는</h4>
            <ul>
              {favoriteMost.map((a, i) => {
                return (
                  <li key={i}>
                    <img
                      src={`${process.env.PUBLIC_URL}/img/${a.img}`}
                      alt={a.title}
                    />
                    <div>
                      <p>{a.title}</p>
                      <p>{a.addr}</p>
                      <p>{a.tel}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="bookmarkMost">
            <h4>가장 많이 담긴</h4>
            <ul>
              {bookmarkMost.map((a, i) => {
                return (
                  <li key={i}>
                    <div>
                      <p>
                        <span>{a.title}</span>
                        <span>({a.addr})</span>
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="pickMost">
            <h4>가장 많이 조회된</h4>
            <ul>
              {pickMost.map((a, i) => {
                return (
                  <li key={i}>
                    <div>
                      <p>
                        <span>{a.title}</span>
                        <span>({a.addr})</span>
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
export default MainList;
