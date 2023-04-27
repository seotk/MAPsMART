import { Link } from "react-router-dom";

function MainBanner() {
  return (
    <section className="mainbg">
      <div className="MainBanner mw">
        <p>
          <span>지금 바로</span>
          <span>
            <img
              src={`${process.env.PUBLIC_URL}/img/mainbanner1.jpg`}
              alt="메인배너1"
            />
            에서
          </span>
          <img src={`${process.env.PUBLIC_URL}/img/cart.gif`} alt="카트" />
          <span>원하는 장소를 담아보세요!</span>
        </p>
        <p>
          <span>음식점, 명소, 쇼핑, 숙박까지!</span>{" "}
          <span>지역을 선택하고 대전의 모든 핫플레이스를 만나보세요.</span>{" "}
          <span>장소를 골라 나만의 장바구니를 채우고 공유할 수 있습니다.</span>
        </p>
        <div className="btns">
          <button>
            <Link to="/Self">직접 담아보기</Link>
          </button>

          <button>
            <Link to="/MainList">추천 찾아보기</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
export default MainBanner;
