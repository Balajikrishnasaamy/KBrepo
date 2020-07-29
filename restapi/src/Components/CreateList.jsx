import React from "react";
import AddIcon from "@material-ui/icons/Add";

function CreateList(props) {
  const [list, setList] = React.useState("");

  function handleChange(event) {
    const value = event.target.value;
    setList(value);
  }

  function onAdd() {
    props.onAdd(list);
    setList("");
  }

  return (
    <div className="note">
      <input type="text" name="text" value={list} onChange={handleChange} />
      <AddIcon className="addButton" onClick={onAdd}>
        {" "}
      </AddIcon>
    </div>
  );
}

export default CreateList;
