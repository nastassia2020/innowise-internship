import React from 'react';
import './CalendarDay.css';

const CalendarDay = ({
  item,
  changeDayHandler,
  hasTasks,
  isActive,
  setIsActive,
  currentDay,
}) => {
  const weekDay = item.toUTCString().slice(0, 3);
  const day = item.toUTCString().slice(5, 7);

  const showDots = hasTasks(item);

  return (
    <div className="day-wrapper">
      <button
        className={`calendar-day ${isActive ? 'calendar-day-active' : ''} ${
          currentDay ? 'calendar-day-current' : ''
        }`}
        onClick={() => {
          setIsActive(item);
          changeDayHandler(item.toISOString().slice(0, 10));
        }}
      >
        <div>{day}</div>
        <div> {weekDay}</div>
      </button>
      {showDots}
    </div>
  );
};

export default CalendarDay;
