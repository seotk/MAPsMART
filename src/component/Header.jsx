import { Link } from "react-router-dom";
import React from "react";
// Header.jsx 파일 상단에 다음 코드 추가

function Header() {
  return (
    <header className="hdCon ">
      <div className="hd mw">
        <div>
          <Link to="/" className="logo">
            <img src="/img/logo.svg" alt="logo" />
          </Link>
        </div>
        <nav className="gnb">
          <Link to="/Self">직접</Link>
          <Link to="/Login">로그인</Link>
          <Link to="/Mypage">마이페이지</Link>
        </nav>
      </div>
    </header>
  );
}
export default Header;