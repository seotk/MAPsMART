function FavoriteMost({ favoriteMost }) {
  return (
    <>
      <div className="FavoriteMost">
        <h4>가장 많이 좋아하는</h4>
        <ul>
          {favoriteMost.map((a, i) => {
            return (
              <li key={i}>
                <img
                  src={`${process.env.PUBLIC_URL}/img/${a.img}`}
                  alt={a.title}
                />
                <div>
                  <p>{a.title}</p>
                  <p>{a.addr}</p>
                  <p>{a.tel}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
export default FavoriteMost;
