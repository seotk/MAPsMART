import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="ftCon ">
      <div className="ft mw">
        <div className="img">
          <Link to="/" className="logo">
            <img src="/img/logo-main.svg" alt="logo" />
          </Link>
        </div>
        <div className="">
          <a href="#">깃 허브</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
