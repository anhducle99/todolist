import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/todoList";
import { TodoListProp } from "./components/typeTodo";
function App() {
  const [todoList, setToDoList] = useState<any>([
    { id: 1, title: "Upload 1099-R to TurboTax", complete: false },
    { id: 4, title: "Sign contract, send back", complete: false },
    { id: 5, title: "Hand sanitizer", complete: false },
    { id: 6, title: "Check on FedEx Order", complete: true },
    { id: 7, title: "Look at new plugins", complete: true },
    { id: 8, title: "Respond to caterling company", complete: true },
    { id: 9, title: "Reschedule morning coffee", complete: true },
    { id: 10, title: "Hand sanitizer", complete: true },
  ]);
  const onHandleAdd = (todo: TodoListProp) => {
    setToDoList([...todoList, todo]);
  };
  const handleSetToDoList = (index: number) => {
    const newState = todoList.filter((item: any) => {
      if (item.id == index) {
        return { ...item, [index]: (item.complete = true) };
      } else {
        return item;
      }
    });
    setToDoList(newState);
  };
  return (
    <div>
      <TodoList
        todo={todoList}
        todoList={handleSetToDoList}
        onAdd={onHandleAdd}
      />
    </div>
  );
}

export default App;
