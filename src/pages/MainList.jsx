import { Link } from "react-router-dom";
import "../css/MainList.css";
import SubHeader from "../component/SubHeader";
function MainList() {
  return (
    <>
      <SubHeader />
      <section className="MainList ">
        <div className="cartList mw">
          <h2>
            <span>장바구니</span>
            <span>엿보기</span>
            <img src="/img/eyes.png" alt="눈" />
          </h2>
          <ul className="listCon">
            <li className="cartCard">
              <div>
                <span>장바구니 이름</span>
                <img src="/img/favorites.png" alt="즐겨찾기" />
              </div>
              <div>장소1 장소2 장소3 ... 내용</div>
            </li>
            <li className="cartCard">
              <div>
                <span>장바구니 이름</span>
                <img src="/img/favorites.png" alt="즐겨찾기" />
              </div>
              <div>장소1 장소2 장소3 ... 내용</div>
            </li>
            <li className="cartCard">
              <div>
                <span>장바구니 이름</span>
                <img src="/img/favorites.png" alt="즐겨찾기" />
              </div>
              <div>장소1 장소2 장소3 ... 내용</div>
            </li>
            <li className="cartCard">
              <div>
                <span>장바구니 이름</span>
                <img src="/img/favorites.png" alt="즐겨찾기" />
              </div>
              <div>장소1 장소2 장소3 ... 내용</div>
            </li>
          </ul>
          <Link to="/CartList2">더보러 가기</Link>
        </div>
        <div className="BestPlace mw">
          <img src="/img/bestplace.svg" alt="베스트플레이스" />
          <div className="favoriteMost">
            <h4>가장 많이 좋아하는</h4>
            <ul>
              <li>
                <div>
                  <img src="" alt="" />
                  <p>asdasdasdasd</p>
                </div>
              </li>
              <li>
                <div>
                  <img src="" alt="" />
                  <p>asdasdasdasd</p>
                </div>
              </li>
              <li>
                <div>
                  <img src="" alt="" />
                  <p>asdasdasdasd</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bookmarkMost">
            <h4>가장 많이 담긴</h4>
            <ul>
              <li>
                <div>
                  <p>
                    <span>장소이름</span>
                    <span>장소장소</span>
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <p>
                    <span>장소이름</span>
                    <span>장소장소</span>
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <p>
                    <span>장소이름</span>
                    <span>장소장소</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="pickMost">
            <h4>가장 많이 조회된</h4>
            <ul>
              <li>
                <div>
                  <p>
                    <span>장소이름</span>
                    <span>장소장소</span>
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <p>
                    <span>장소이름</span>
                    <span>장소장소</span>
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <p>
                    <span>장소이름</span>
                    <span>장소장소</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
export default MainList;
