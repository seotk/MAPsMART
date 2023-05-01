function PickMost({ pickMost }) {
  return (
    <>
      <div className="PickMost">
        <h4>가장 많이 조회된</h4>
        <ul>
          {pickMost.map((a, i) => {
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
export default PickMost;
