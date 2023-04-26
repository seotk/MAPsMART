import React from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../store/cartStore,";
function ItemModal({ hot, i, closeModal }) {
  let dispatch = useDispatch();

  // 모달 창 열고 닫기
  console.log(hot[i]);
  const handleClose = () => closeModal();
  // Item 정보
  const item = hot[i];

  return (
    <Modal show={true} onHide={handleClose}>
      {/* Header */}
      <Modal.Header closeButton>
        <Modal.Title>{item.title}</Modal.Title>
      </Modal.Header>

      {/* Body */}
      <Modal.Body>
        {/* Item 정보 */}
        {/* ... */}
      </Modal.Body>

      {/* Footer */}
      <Modal.Footer>
        <button
          onClick={() => {
            dispatch(
              addItem({
                title: item.title,
                addr: item.addr,
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

export default ItemModal;
