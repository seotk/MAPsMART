import { Link, useLocation } from "react-router-dom";

function SubHeader() {
  let urlName = useLocation().pathname;
  let bar = urlName === "/" ? "" : "bar";
  document.querySelectorAll(".gnb a").forEach((item) => {
    item.classList.remove("on");
    if (item.getAttribute("href") === urlName) item.classList.add("on");
    // else if (
    //   urlName.indexOf("/detail/") === 0 &&
    //   item.getAttribute("href") === "/Self"
    // ) {
    //   item.classList.add("on");
    // } else if (
    //   urlName.indexOf("/detail/") === 0 &&
    //   item.getAttribute("href") === "/MainList"
    // ) {
    //   item.classList.add("on");
    // }
  });
  return (
    <nav className={`gnb mw ${bar}`}>
      <Link to="/Self">직접 담아보기</Link>
      <Link to="/MainList">추천 찾아보기</Link>
    </nav>
  );
}
export default SubHeader;
