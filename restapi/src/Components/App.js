import React from "react";

import CreateList from "./CreateList";
import Header from "./Header";
import ToDoList from "./ToDoList";


export default function App() {
  const [lists, setLists] = React.useState([]);
  const domain = "http://localhost:2000";

    var url = domain + "/todolist"
    React.useEffect(() => {
      getData()
    },[url]);

  const postData = async function(json) {
    const url = domain + "/todolist";
    const data = await fetch(url,{
      method: "POST",
      headers: { 
        "Content-type": "application/json; charset=UTF-8"
      }, 
      body: JSON.stringify(json)
    });
    getData();
  }

  async function getData() {
    const url = domain + "/todolist";
    const data = await fetch(url,{
      method: "GET",
      headers: { 
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    const parsedData = await data.json();
    setLists(parsedData);
  }

  function onAdd(item) {
    const json = {
      list: item 
    }
    postData(json);
  }

  const onDelete = async function(id) {
    const url = domain + "/todolist/"+id;
    const data = await fetch(url,{
      method: "DELETE",
      headers: { 
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    getData();
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
