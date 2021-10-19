import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  }
  return [];
}
function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(null);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: ""
  });
  useEffect(() => {

  })
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "Please Enter Value", "danger");
    }
    else if (name && isEditing) {
      setList(list.map((item) => {
        if (item.id === editID) {
          return { ...item, title: name };
        }
        return item;
      }))
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "successfully edited", "success");
    }
    else {
      showAlert(true, "Added", "success");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");

    }
  }
  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
  }
  const clearList = () => {
    showAlert(true, "empty", "danger");
    setList([]);
  }
  const removeTask = (id) => {
    showAlert(true, "Task Removed", "danger");
    setList(list.filter((item) => item.id !== id));
  }
  const editTask = (id) => {
    const task = list.find((task) => task.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(task.title);
  }
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (
    <section className="section-center">
      <form className="main-form" onSubmit={handleSubmit}>
        {
          alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />
        }
        <h3>Todo List</h3>
        <div className="form-control">
          <input type="text" className="main" placeholder="e.g Do Home Work" value={name} onChange={(e) => setName(e.target.value)} />
          <button type="submit" className="submit-btn">
            {
              isEditing ? "edit" : 'Submit'
            }
          </button>
        </div>
      </form>
      {list.length > 0 && <div className="main-container">
        <List items={list} removeTask={removeTask} editTask={editTask} />
        <button className="clear-btn" onClick={() => clearList()}>
          Clear Items
        </button>
      </div>}

    </section>
  );
}

export default App
