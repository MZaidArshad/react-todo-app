import React from "react";

const TodoItem = ({ text, Delete, edit }) => {
  return (
    <div className="todoItem">
      <p>{text}</p>
      <div className="todoItem_btns">
        <div className="edit_btn">
          <i className="fa-regular fa-pen-to-square" onClick={edit}></i>
        </div>
        <div className="delete_btn">
          <i className="fa-regular fa-trash-can" onClick={Delete}></i>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
