import React from "react";

import CreateList from "./CreateList";
import Header from "./Header";
import ToDoList from "./ToDoList";


export default function App() {
  const [lists, setLists] = React.useState([]);
  const domain = "http://localhost:2000";

    var url = domain + "/todolist"
    React.useEffect(() => {
      geteData();
    },[url]);

  function postData(json) {
    const url = domain + "/todolist";
    fetch(url,{
      method: "POST",
      headers: { 
        "Content-type": "application/json; charset=UTF-8"
      }, 
      body: JSON.stringify(json)
    })
    .then(res => res.json())
    .then(response => {
      geteData();
    });
  }

  function geteData() {
    const url = domain + "/todolist";
    fetch(url,{
      method: "GET",
      headers: { 
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(res => res.json())
    .then(response => {
      setLists(response);
    });
  }

  function onAdd(item) {
    const json = {
      list: item 
    }
    postData(json);
  }

  function onDelete(id) {
    const url = domain + "/todolist/"+id;
    fetch(url,{
      method: "DELETE",
      headers: { 
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(res => res.json())
    .then(response => {
      geteData();
    });
  }

  return (
    <div className="App">
      <Header />
      <CreateList onAdd={onAdd} />
      <div>
        {lists.map((list) => {
          return (
            <ToDoList key={list.id} id={list.id} list={list.list} onDelete={onDelete} />
          );
        })}
      </div>
    </div>
  );
}
