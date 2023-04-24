import { Link } from "react-router-dom";

function MainBanner2() {
  return (
    <section className="mainbg">
      <div className="MainBanner2 mw">
        <div className="img">
          <img src="/img/logo-main.svg" alt="" />
        </div>
        <div className="btns">
          <Link>직접담기</Link>
          <Link>뭘 골라야 할지 모르겠다면</Link>
        </div>
      </div>
    </section>
  );
}
export default MainBanner2;
