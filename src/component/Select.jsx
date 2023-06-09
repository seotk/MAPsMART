function Select({
  handleSearchGu,
  handleSearchDong,
  handleSelect,
  handleToggle,
  setChooseGu,
  chooseGu,
}) {
  return (
    <div className="Select">
      <select onChange={handleSearchGu} name="name1" id="">
        <option value="구전체">구전체</option>
        <option value="서구">서구</option>
        <option value="중구">중구</option>
        <option value="동구">동구</option>
        <option value="유성구">유성구</option>
        <option value="대덕구">대덕구</option>
      </select>
      <select onChange={handleSearchDong} name="name2">
        <option value="전체">전체</option>
        {chooseGu.map((key, i) => (
          <option key={i} value={key}>
            {key}
          </option>
        ))}
      </select>
      <select onChange={handleSelect} name="name2" id="">
        <option value="1">관광지</option>
        <option value="2">음식점</option>
        <option value="3">쇼핑몰</option>
        <option value="4">숙박업소</option>
      </select>
      <div className="CartHold">
        <span onClick={handleToggle}>
          <img src={`${process.env.PUBLIC_URL}/img/bag.png`} alt="장바구니" />
        </span>
      </div>
    </div>
  );
}
export default Select;
