import { useState } from 'react';
import { Task } from './Task';
import { useSelector, useDispatch } from 'react-redux';
import {
  addNewTask,
  changeTaskPatch,
  taskIsDonePatch,
  deleteTask,
} from '../../store/actions/actions';

import './TaskList.css';

const TaskList = ({ tasks }) => {
  const [addTask, setAddTask] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [showModal, setShowModal] = useState(null);
  const { choosenDate } = useSelector(state => state.main);

  const [task, setTask] = useState('');
  const [taskChanged, setTaskChanged] = useState('');

  const dispatch = useDispatch();

  const onChangeHandler = setState => event => {
    setState(event.target.value);
  };
  const addNewTaskHandler = () => {
    if (task) {
      dispatch(addNewTask(task, choosenDate));
    }
    setAddTask(false);
    setTask('');
  };

  const toggleEditHandler = index => {
    setEditIndex(index === editIndex ? null : index);
  };

  const toggleDeleteHandler = index => {
    setShowModal(index === editIndex ? null : index);
  };

  return (
    <div className="task-list">
      <p> You have {tasks.length} tasks </p>
      {tasks.map((item, index) => (
        <Task
          key={item.id}
          id={item.id}
          item={item}
          description={item.description}
          isDone={item.isDone}
          dataBaseKey={item.dataBaseKey}
          onCheckBoxClick={item => {
            dispatch(taskIsDonePatch(item, choosenDate));
          }}
          isEdit={editIndex === index}
          changeTask={() => toggleEditHandler(index)}
          typeTaskHandler={onChangeHandler(setTaskChanged)}
          editedValue={taskChanged}
          saveChangedTask={item => {
            dispatch(
              changeTaskPatch({
                description: taskChanged,
                id: item.id,
                isDone: item.isDone,
                dataBaseKey: item.dataBaseKey,
                uniqCode: item.uniqCode,
              }),
            );
            setEditIndex(null);
            setTaskChanged('');
          }}
          deleteTask={() => toggleDeleteHandler(index)}
          showModal={showModal === index}
          handleConfirmDeleting={() => {
            dispatch(deleteTask(item, choosenDate));
            setShowModal(null);
          }}
          handleCancelDeleting={() => setShowModal(null)}
        />
      ))}

      {addTask ? (
        <form className="form">
          <input className="form_input" onChange={onChangeHandler(setTask)} />
          <button type="button" className="add-new-task" onClick={addNewTaskHandler}>
            Save task
          </button>
          <button
            type="button"
            className="close-form"
            onClick={() => setAddTask(false)}
          >
            X
          </button>
        </form>
      ) : (
        <>
          <button className="add-new-task" onClick={() => setAddTask(true)}>
            Add new task
          </button>
        </>
      )}
    </div>
  );
};

export default TaskList;
