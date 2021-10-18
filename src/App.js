import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: "" });
  const handleSubmit = (e) => {
    e.preventDefault();

  }
  return (
    <section className="section-center">
      <form className="main-form" onSubmit={handleSubmit}>
        {
          alert.show && <Alert />
        }
        <h3>Todo List</h3>
        <div className="form-control">
          <input type="text" className="main" placeholder="e.g HomeWork" value={name} onChange={(e) => setName(e.target.value)} />
          <button type="submit" className="submit-btn">
            {
              isEditing ? "edit" : 'Submit'
            }
          </button>
        </div>
      </form>
      <div className="main-container">
        <List />
        <button className="clear-btn">
          Clear Items
        </button>
      </div>
    </section>
  );
}

export default App
