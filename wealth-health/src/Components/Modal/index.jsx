import React from "react";
import "../../styles/modal.css";

function Modal({ text, setShow }) {
  return (
    <>
      <div className="modal-container">
        <div className="modal-box">
          <div className="text">
            <p className="title">{text}</p>
          </div>
          <div className="closeOne">
            <button onClick={() => setShow(false)}>X</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Modal;
