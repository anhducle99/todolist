import React, { useState } from "react";
import "./main.css";
import { v4 as uuidv4 } from "uuid";

const Modal = ({ closeModal, onAdd }: any) => {
  const [inputContact, setInputContact] = useState("");
  const [inputStatus, setInputStatus] = useState("");

  const onHandleSubmit = (e: any) => {
    e.preventDefault();
    onAdd({ id: uuidv4(), title: inputContact, complete: false });
    setInputContact("");
    setInputStatus("");
  };
  const onHandleContact = (e: any) => {
    setInputContact(e.target.value);
  };
  const onHandleStatus = (e: any) => {
    setInputStatus(e.target.value);
  };
  return (
    <div className="modal">
      <div className="modal-body">
        <div className="title">
          <h1>Them cong viec</h1>
        </div>
        <div className="add">
          <label>Them cong viec</label>
          <br />
          <input
            type="text"
            placeholder="them"
            onChange={onHandleContact}
            value={inputContact}
          />
          <br />
          <label>Trang thai</label>
          <br />
          <input
            type="text"
            placeholder="Trang thai"
            onChange={onHandleStatus}
            value={inputStatus}
          />
        </div>
        <br />
        <div className="close">
          <button className="cancel" onClick={() => closeModal(false)}>
            Huy
          </button>
          &ensp;
          <button className="continue" onClick={onHandleSubmit}>
            Tiep tuc
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
