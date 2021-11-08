import React, { useState } from "react";
import Header from "./Header";
import { TodoListProp } from "./typeTodo";
import "./main.css";
import Modal from "./Modal";

const TodoList = ({ todo, todoList, onAdd }: any) => {
  const onComplete = todo.filter((item: any) => {
    return item.complete === false;
  });
  const offComplete = todo.filter((item: any) => {
    return item.complete === true;
  });

  const [onpenModal, setOpenModal] = useState(false);
  return (
    <div className="wrapper">
      <Header checkOn={onComplete} checkOff={offComplete} />

      <div className="incomplete">
        <h3 className="title">Incomplete</h3>
        <div className="complete">
          {onComplete.map((item: any, index: number) => {
            return (
              <div className="completed">
                <input type="checkbox" onClick={() => todoList(item.id)} />
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="incomplete">
        <h3 className="title">Complete</h3>
        <div className="complete">
          {offComplete.map((item: any, index: number) => {
            return (
              <div className="completed">
                <input
                  type="checkbox"
                  checked={true}
                  defaultChecked
                  disabled
                  onClick={() => todoList(item.id)}
                />
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
        <div
          className="btn--show-modal"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <i className="fas fa-plus" />
        </div>
      </div>

      {onpenModal && <Modal closeModal={setOpenModal} onAdd={onAdd} />}
    </div>
  );
};

export default TodoList;
