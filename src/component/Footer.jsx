import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="ftCon ">
      <div className="ft mw mw700 mw420">
        <div className="img">
          <Link to="/" className="logo">
            <img
              src={`${process.env.PUBLIC_URL}/img/logo-main.svg`}
              alt="logo"
            />
          </Link>
        </div>
        <div className="Email">seotkdeveloper.gmail.com</div>
        <div className="Link">
          <a href="https://xorb0719.tistory.com/">
            <img
              src={`${process.env.PUBLIC_URL}/img/tistory.svg`}
              alt="tistory"
            />
          </a>
          <a href="https://github.com/seotk">
            <img
              src={`${process.env.PUBLIC_URL}/img/github.svg`}
              alt="github"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
