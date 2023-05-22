import { useState } from 'react';
import './CalendarDay.css';

const CalendarDay = ({
  item,
  changeDayHandler,
  hasTasks,
  showFirstDot,
  showSecondDot,
}) => {
  const [isActive, setIsActive] = useState(false);
  const weekDay = item.toUTCString().slice(0, 3);
  const day = item.toUTCString().slice(5, 7);

  return (
    <button
      className={isActive ? 'calendar-day calendar-day-active' : 'calendar-day'}
      onClick={() => {
        setIsActive(true);
        changeDayHandler(item.toISOString().slice(0, 10));
      }}
    >
      <div>{day}</div>
      <div> {weekDay}</div>
      {hasTasks && (
        <div className="show-dots">
          {showFirstDot && <div className="dot"> </div>}
          {showSecondDot && <div className="second-dot"> </div>}
        </div>
      )}
    </button>
  );
};

export default CalendarDay;
