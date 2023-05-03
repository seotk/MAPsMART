import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
function SubHeader() {
  let urlName = useLocation().pathname;
  let bar = urlName === "/" ? "" : "bar";

  useEffect(() => {
    document.querySelectorAll(".gnb a").forEach((item) => {
      item.classList.remove("on");
      if (
        item.getAttribute("href") === urlName ||
        item.getAttribute("href") === `/project4${urlName}`
      ) {
        item.classList.add("on");
      }
    });
  }, [urlName]);
  return (
    <nav className={`gnb mw  ${bar}`}>
      <Link to="/Self">직접 담아보기</Link>
      <Link to="/MainList">추천 찾아보기</Link>
    </nav>
  );
}

export default SubHeader;
