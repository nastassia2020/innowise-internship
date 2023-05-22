import React, { useState } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import './Task.css';

const Task = ({
  item,
  isDone,
  isEdit,
  description,
  onCheckBoxClick,
  typeTaskHandler,
  changeTask,
  changedTask,
  saveChangedTask,
  deleteTask,
}) => {
  return (
    <div className="task-div">
      {<AiFillDelete className="delete" onClick={() => deleteTask(item)} />}
      {<AiFillEdit className="edit" onClick={() => changeTask(item)} />}
      <div className="task">
        <input
          type="checkbox"
          className="task-input"
          onChange={() => onCheckBoxClick(item)}
          defaultChecked={isDone}
        />
        <p className="task-desc"> {description}</p>
      </div>
      {isEdit && (
        <form className="form">
          <input className="form_input" onChange={typeTaskHandler} />
          <button
            type="button"
            className="add-new-task"
            onClick={() => saveChangedTask(changedTask)}
          >
            Save changes
          </button>
        </form>
      )}
    </div>
  );
};

export default Task;
