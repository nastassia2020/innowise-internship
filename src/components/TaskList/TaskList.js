import { useState, useEffect } from 'react';
import { Task } from './Task';
import { useSelector, useDispatch } from 'react-redux';
//import { addTasks } from '../../store/actions/actions';
import {
  addNewTask,
  taskIsDoneHandler,
  taskIsDonePatch,
  changeTaskHandler,
} from '../../store/actions/actions';

import './TaskList.css';

const TaskList = ({ tasks }) => {
  const [addTask, setAddTask] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const { choosenDate } = useSelector(state => state.main);
  //console.log('tasks from taskList******', tasks);
  const userDataBaseKey = JSON.parse(localStorage.getItem('data'));

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

  // const saveChangedTask = id => {
  //   changeTaskHandler(id);
  // };

  const toggleEditHandler = index => {
    setEditIndex(index === editIndex ? null : index);
  };

  return (
    <div className="task-list">
      <p> {tasks.length} Tasks Today </p>
      {tasks.map(item => (
        <Task
          key={item.id}
          id={item.id}
          item={item}
          description={item.description}
          isDone={item.isDone}
          dataBaseKey={item.dataBaseKey}
          onCheckBoxClick={item => {
            dispatch(taskIsDonePatch(item, choosenDate));
            console.log('taskIsDone!!!!', item.isDone);
          }}
          // isEdit={editIndex === index}
          // changeTask={() => toggleEditHandler(index)}
          // typeTaskHandler={onChangeHandler(setTaskChanged)}
          // changedTask={taskChanged}
          // saveChangedTask={() => saveChangedTask(item.id)}
        />
      ))}

      {addTask ? (
        <form className="form">
          <input className="form_input" onChange={onChangeHandler(setTask)} />
          <button type="button" className="add-new-task" onClick={addNewTaskHandler}>
            Add task
          </button>
        </form>
      ) : (
        <>
          <p> add new task </p>
          <button className="add-new-task" onClick={() => setAddTask(true)}>
            +
          </button>
        </>
      )}
    </div>
  );
};

export default TaskList;
