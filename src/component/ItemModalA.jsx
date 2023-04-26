import React from "react";
import { Modal } from "react-bootstrap";
import { addItem, deleteItem } from "../store/cartStore,";
import { useDispatch, useSelector } from "react-redux";

function ItemModalA({ currentData, closeModal }) {
  let dispatch = useDispatch();

  // 모달 창 열고 닫기
  console.log(currentData);
  const handleClose = () => closeModal();
  // Item 정보
  const item = currentData[0];

  return (
    <Modal show={true} onHide={handleClose}>
      {/* Header */}
      <Modal.Header closeButton>
        <Modal.Title>{item.title}</Modal.Title>
      </Modal.Header>

      {/* Body */}
      <Modal.Body>
        {/* Item 정보 */}
        <p>
          <span>{item.title}</span>
          <span>{item.addr}</span>
          <span>{item.tel}</span>
          <span>{item.mapLat}</span>
          <span>{item.mapLot}</span>
          <span>{item.summ}</span>
          <span>{item.dtlAddr}</span>
        </p>
      </Modal.Body>

      {/* Footer */}
      <Modal.Footer>
        <button
          onClick={() => {
            dispatch(
              addItem({
                title: item.title,
                addr: item.addrr,
                tel: item.tel,
                mapLat: item.mapLat,
                mapLot: item.mapLot,
                summ: item.summ,
                dtlAddr: item.dtlAddr,
              })
            );
          }}
        >
          담기
        </button>
        <button onClick={handleClose}>Close</button>
      </Modal.Footer>
    </Modal>
  );
}

export default ItemModalA;
