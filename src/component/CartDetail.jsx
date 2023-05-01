import { useSelector } from "react-redux";

function CartDetail(params) {
  let cart = useSelector((state) => state.cart);

  return (
    <>
      <table className="CartDetail" border={1}>
        <th>장소 이름</th>
        <th>세부 정보</th>
        {cart.map((a, i) => {
          return (
            <tr key={i}>
              <td>{a.title}</td>
              <td>
                <p>
                  <span>{a.addr}</span> <br />
                  <span>{a.tel}</span> <br />
                  <span>{a.summ}</span>
                </p>
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
}
export default CartDetail;
