import { Link } from "react-router-dom";
import React from "react";

function Header() {
  return (
    <>
      <header className="hdCon ">
        <div className="hd mw mw700 mw420">
          <div>
            <Link to="/" className="logo">
              <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="logo" />
            </Link>
          </div>
          <nav className="person">
            <Link to="/Login">로그인</Link>
            <Link to="/Mypage">마이페이지</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Header;
