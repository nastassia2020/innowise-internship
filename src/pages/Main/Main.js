import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TaskList } from '../../components/TaskList';
import { CalendarList } from '../../components/CalendarList';
import { fetchTasks } from '../../store/actions/actions';
import './Main.css';

const Main = () => {
  const { isError, error, tasks, choosenDate } = useSelector(state => state.main);

  const dispatch = useDispatch();
  if (error) {
    console.log('error', error);
  }

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const filteredTasks = tasks.filter(task => task.dataBaseKey === choosenDate);

  return (
    <div className="main">
      {!isError ? (
        <>
          <CalendarList tasks={tasks} />
          <TaskList tasks={filteredTasks} />
        </>
      ) : (
        { error }
      )}
    </div>
  );
};
export default Main;
