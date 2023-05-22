import React, { useState } from "react";
import "../App.css";
import TodoItem from "./todoItem";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [editId, setEditId] = useState(null);

  const addItem = () => {
    if (inputValue.trim() === "") {
      alert("Please Write something");
    } else if (inputValue.trim() !== "" && !toggleSubmit) {
      setTodos(
        todos.map((elem) => {
          if (elem.id === editId) {
            return { ...elem, text: inputValue };
          }
          return elem;
        })
      );
      setInputValue("");
      setToggleSubmit(true);
    } else {
      const updatedData = {
        id: new Date().getTime().toString(),
        text: inputValue,
      };
      setTodos([...todos, updatedData]);
      setInputValue("");
      setEditId(null);
    }
  };

  const deleteItem = (index) => {
    const updatedItems = todos.filter((elem) => {
      return elem.id !== index;
    });
    setTodos(updatedItems);
  };

  const editItem = (id) => {
    let editedItem = todos.find((elem) => {
      return id === elem.id;
    });
    setToggleSubmit(false);
    setInputValue(editedItem.text);
    setEditId(id);
  };

  return (
    <div className="main_div">
      <div className="child-div">
        <div className="head">
          <figure>
            <img src="img.png" alt="icon" />
            <figcaption>Add your list here ✌️</figcaption>
          </figure>
          <div className="add_todo">
            <input
              type="text"
              placeholder="✍️ Write your todo"
              value={inputValue}
              onChange={(event) => {
                setInputValue(event.target.value);
              }}
            />
            {toggleSubmit ? (
              <i className="fa fa-add" onClick={addItem}></i>
            ) : (
              <i className="fa-regular fa-pen-to-square" onClick={addItem}></i>
            )}
          </div>
        </div>
        <div className="todos_container">
          {todos.map((todo) => {
            return (
              <TodoItem
                text={todo.text}
                key={todo.id}
                Delete={() => deleteItem(todo.id)}
                edit={() => editItem(todo.id)}
              />
            );
          })}
        </div>
        <div className="remove_btn">
          <button
            onClick={() => {
              setTodos([]);
            }}
          >
            Remove All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
