import React, { useState } from 'react';
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
  const [hasTasksIndex, setHasTasksIndex] = useState(null);
  const dispatch = useDispatch();
  const { showCalendar } = useSelector(state => state.main);

  const date = new Date(Date.now()).toISOString().slice(0, 10);

  const endDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

  const dateArr = [];

  const toggleEditHandler = index => {
    setHasTasksIndex(index === hasTasksIndex ? null : index);
  };

  for (let i = 0; i < 32; i++) {
    let innerDate = new Date(Date.now() + i * 24 * 60 * 60 * 1000);
    dateArr[i] = innerDate;
  }

  const changeDayHandler = day => {
    dispatch(changeCalendarDay(day));
    dispatch(fetchTasks(day));
  };

  const dateHasTasks = date => {
    return tasks.some(task => task.dataBaseKey === date);
  };

  const renderIndicator = date => {
    if (dateHasTasks(date)) {
      const tasksOfTheDay = tasks.filter(task => task.dataBaseKey === date);
      if (tasksOfTheDay.every(item => item.isDone === true)) {
        return (
          <div className="show-dots">
            <div className="second-dot"> </div>
          </div>
        );
      } else if (tasksOfTheDay.every(item => item.isDone === false)) {
        return (
          <div className="show-dots">
            <div className="dot"> </div>
          </div>
        );
      } else {
        return (
          <div className="show-dots">
            <div className="dot"> </div>
            <div className="second-dot"> </div>
          </div>
        );
      }
    }
    return null;
  };

  return (
    <div>
      <div className="calendar">
        <div className="calendar-item">
          {dateArr.map((item, index) => (
            <CalendarDay
              item={item}
              key={item}
              changeDayHandler={changeDayHandler}
              currentDay={item.toISOString().slice(0, 10) === date}
              isActive={hasTasksIndex === index}
              setIsActive={() => toggleEditHandler(index)}
              hasTasks={() => renderIndicator(item.toISOString().slice(0, 10))}
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
