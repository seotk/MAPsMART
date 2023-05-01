import FavoriteMost from "./FavoriteMost";
import BookmarkMost from "./BookmarkMost";
import PickMost from "./PickMost";

function BestPlace({ favoriteMost, bookmarkMost, pickMost }) {
  return (
    <>
      <div className="BestPlace mw">
        <img
          src={`${process.env.PUBLIC_URL}/img/bestplace.svg`}
          alt="베스트플레이스"
        />
        <FavoriteMost favoriteMost={favoriteMost} />

        <BookmarkMost bookmarkMost={bookmarkMost} />
        <PickMost pickMost={pickMost} />
      </div>
    </>
  );
}
export default BestPlace;
