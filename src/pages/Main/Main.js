import React from 'react';
import { useSelector } from 'react-redux';
import { TaskList } from '../../components/TaskList';
import { CalendarList } from '../../components/CalendarList';
import './Main.css';

const Main = () => {
  const { isError, error, tasks, choosenDate } = useSelector(state => state.main);
  console.log('choosenDate****', choosenDate);

  if (error) {
    console.log('error', error);
  }

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
