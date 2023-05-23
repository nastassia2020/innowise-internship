import React from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { Modal } from '../../Modal/Modal';
import './Task.css';

const Task = ({
  item,
  isDone,
  isEdit,
  description,
  onCheckBoxClick,
  typeTaskHandler,
  changeTask,
  saveChangedTask,
  deleteTask,
  editedValue,
  showModal,
  handleCancelDeleting,
  handleConfirmDeleting,
  taskWasChose,
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
        <form className="changeForm">
          <input
            className="changeForm_input"
            value={editedValue}
            onChange={typeTaskHandler}
          />
          <button
            type="button"
            className="change-task-button"
            onClick={() => saveChangedTask(item)}
          >
            Save changes
          </button>
        </form>
      )}
      {showModal && (
        <Modal onConfirm={handleConfirmDeleting} onCancel={handleCancelDeleting} />
      )}
    </div>
  );
};

export default Task;
