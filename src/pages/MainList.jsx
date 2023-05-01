import "../css/MainList.css";
import SubHeader from "../component/SubHeader";
import CartList from "../component/BestCartList";
import BestPlace from "../component/BestPlace";
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
  let BestCart = [...BestCartList].slice(0, 4);
  return (
    <>
      <SubHeader />
      <section className="MainList ">
        <CartList BestCart={BestCart} />
        <BestPlace
          favoriteMost={favoriteMost}
          bookmarkMost={bookmarkMost}
          pickMost={pickMost}
        />
      </section>
    </>
  );
}
export default MainList;
