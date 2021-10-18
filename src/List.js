
import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ items, removeTask, editTask }) => {
  return (
    <div className="main-list">
      {items.map((item) => {
        const { id, title } = item;
        return <article key={id} className="main-item">
          <p className="title">{title}</p>
          <div className="btn-container">
            <button type="button" className="edit-btn" onClick={() => editTask(id)}>
              <FaEdit />
            </button>
            <button type="button" className="delete-btn" onClick={() => removeTask(id)}>
              <FaTrash />
            </button>
          </div>
        </article>
      })}
    </div>
  );
}

export default List
