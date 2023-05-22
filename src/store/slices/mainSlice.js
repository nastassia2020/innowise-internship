import { createSlice, current } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    showCalendar: false,
    choosenDate: new Date(Date.now()).toISOString().slice(0, 10),
    tasks: [],
  },
  reducers: {
    addTasks: (state, action) => {
      if (action.payload) {
        state.tasks = [...action.payload];
      }
    },
    addNewTaskHandler: (state, action) => {
      if (action.payload) {
        state.tasks.push({ id: uuid(), description: action.payload, isDone: false });
      }
    },
    taskIsDoneHandler: (state, action) => {
      state.tasks.map(task =>
        task.id === action.payload ? (task.isDone = !task.isDone) : task,
      );
    },
    mainErrorHandler: (state, action) => {
      state.error = action.payload;
      state.isError = true;
    },
    showCalendarHandler: state => {
      state.showCalendar = !state.showCalendar;
    },
    changeCalendarDay: (state, action) => {
      state.choosenDate = action.payload;
    },
    clearTasksWhenLogOut: state => {
      state.tasks.map(item => {
        localStorage.removeItem(`${item.description}`);
      });
    },
  },
});

export default mainSlice;
