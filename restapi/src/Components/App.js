import React from "react";
import axios from 'axios';

import CreateList from "./CreateList";
import Header from "./Header";
import ToDoList from "./ToDoList";


export default function App() {
  const [lists, setLists] = React.useState([]);
  const domain = "http://localhost:2000";

    var url = domain + "/todolist"
    React.useEffect(() => {
      fetch(url)
      .then(res => res.json())
      .then(response => {
        setLists(response);
      })
    },[url]);

  async function postData(json) {
      const response = await axios.post(domain + "/todolist", json);
      console.log(response.data);
      geteData();
  }

  async function geteData() {
    const response = await axios.get(domain + "/todolist");
    setLists(response.data);
  }

  function onAdd(item) {
    const json = {
      list: item 
    }
    postData(json);
  }

  async function onDelete(id) {
    console.log(id);
    const response = await axios.delete(domain + "/todolist/"+id);
      console.log(response.data);
      geteData();
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
