import React from "react";
import DeleteSharpIcon from "@material-ui/icons/DeleteSharp";

function ToDoList(props) {
  return (
    <div className="list">
      <h3 id={props.id}>{props.list}</h3>
      <DeleteSharpIcon
        className="deleteButton"
        onClick={() => {
          props.onDelete(props.id);
        }}
      />
    </div>
  );
}

export default ToDoList;
