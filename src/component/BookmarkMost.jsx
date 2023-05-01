function BookmarkMost({ bookmarkMost }) {
  return (
    <>
      <div className="BookmarkMost">
        <h4>가장 많이 담긴</h4>
        <ul>
          {bookmarkMost.map((a, i) => {
            return (
              <li key={i}>
                <div>
                  <p>
                    <span>{a.title}</span>
                    <span>({a.addr})</span>
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
export default BookmarkMost;
