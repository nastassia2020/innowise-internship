import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsCalendarWeek } from 'react-icons/bs';
import {
  showCalendarHandler,
  changeCalendarDay,
  fetchTasks,
} from '../../store/actions/actions';
import { CalendarDay } from './CalendarDay';
import './CalendarList.css';

const CalendarList = ({ tasks }) => {
  const [showFirstDot, setShowFirstDot] = useState(false);
  const [hasTasksIndex, setHasTasksIndex] = useState(null);
  const dispatch = useDispatch();
  const { showCalendar } = useSelector(state => state.main);

  const date = new Date(Date.now()).toISOString().slice(0, 10);

  const endDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

  const dateArr = [];

  console.log('tasks****', tasks);

  const toggleEditHandler = index => {
    setHasTasksIndex(index === hasTasksIndex ? null : index);
  };

  for (let i = 0; i < 32; i++) {
    let innerDate = new Date(Date.now() + i * 24 * 60 * 60 * 1000);
    dateArr[i] = innerDate;
  }

  const dateArrToString = dateArr.map(item => item.toISOString().slice(0, 10));

  useEffect(() => {
    // if (tasks.length > 0) {
    dateArrToString.map(item => {
      for (let i = 0; i < tasks.length; i++) {
        const datesWithTasks = dateArrToString.filter(
          d => d === tasks[i].dataBaseKey,
        );
        console.log('datesWithTasks****', datesWithTasks);
        datesWithTasks.map(a => {});
        if (tasks[i].isDone === false) {
          console.log('tasks[i].isDone === false**** ', tasks[i].isDone === true);
          setShowFirstDot(true);
        }
      }
    });
    // }
  }, [dateArr, tasks]);

  const changeDayHandler = day => {
    dispatch(changeCalendarDay(day));
    dispatch(fetchTasks(day));
  };

  return (
    <div>
      <div className="calendar">
        <div className="calendar-item">
          {dateArr.map(item => (
            <CalendarDay
              item={item}
              key={item}
              changeDayHandler={changeDayHandler}
              // hasTasks={() => toggleEditHandler(index)}
              showFirstDot={showFirstDot}
              // showSecondDot={() => {
              //   let current = item.toISOString().slice(0, 10);
              //   console.log('current*******', current);
              //   for (let i = 0; i < tasks.length; i++) {
              //     if (current !== tasks[i].dataBaseKey) {
              //       return false;
              //     } else if (
              //       current === tasks[i].dataBaseKey &&
              //       tasks.includes(tasks[i].isDone === true)
              //     ) {
              //       return true;
              //     } else if (
              //       current === tasks[i].dataBaseKey &&
              //       !tasks.includes(tasks[i].isDone === true)
              //     ) {
              //       return false;
              //     }
              //   }
              // }}
            />
          ))}
        </div>
        <BsCalendarWeek
          onClick={() => {
            dispatch(showCalendarHandler());
          }}
        />
        {showCalendar && (
          <input
            type="date"
            defaultValue={date}
            min={date}
            onChange={event => {
              //console.log('здесь послать запрос с новой датой', event.target.value);
              dispatch(changeCalendarDay(event.target.value));
              dispatch(fetchTasks(event.target.value));
            }}
          />
        )}
      </div>
    </div>
  );
};

export default CalendarList;
