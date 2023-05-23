import axios from 'axios';
import { v4 as uuid } from 'uuid';
import authSlice from '../slices/authSlice';
import mainSlice from '../slices/mainSlice';

export const {
  loginHandler,
  setTokenHandler,
  setDataBaseKey,
  loginCheckStatusHandler,
  firstLoadHandler,
  logoutHandler,
  authErrorHandler,
  clearErrorHandler,
} = authSlice.actions;

export const {
  addTasks,
  addNewTaskHandler,
  taskIsDoneHandler,
  isDoneCheckHandler,
  mainErrorHandler,
  showCalendarHandler,
  changeCalendarDay,
  clearTasksWhenLogOut,
} = mainSlice.actions;

const firebaseConfig = process.env.REACT_APP_FIREBASE_KEY;
export const signInFetch = someData => {
  const { email, password } = someData;
  return dispatch => {
    axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseConfig}`,
        JSON.stringify({
          collection: [],
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then(res => {
        if (res.status === 200) {
          axios
            .post(
              `https://smart-todo-645e5-default-rtdb.europe-west1.firebasedatabase.app/users.json`,
              JSON.stringify({
                collection: [],
                email: res.data.email,
                id: res.data.localId,
                token: res.data.idToken,
              }),
              {
                headers: {
                  'Content-Type': 'application/json',
                },
              },
            )
            .then(res => {
              dispatch(setDataBaseKey(res.data.name));
              dispatch(clearErrorHandler());
              dispatch(firstLoadHandler(false));
            })
            .catch(err =>
              dispatch(authErrorHandler(err.response.data.error.message)),
            );
        }
      })
      .catch(err => dispatch(authErrorHandler(err.response.data.error.message)));
  };
};

export const loginFetch = someData => {
  return dispatch => {
    const { email, password } = someData;
    axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseConfig}`,
        JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then(res => {
        if (res.status === 200) {
          dispatch(loginHandler({ email: res.data.email, id: res.data.localId }));
          dispatch(setTokenHandler(res.data.idToken));
          dispatch(clearErrorHandler());
        }
      })
      .catch(err => dispatch(authErrorHandler(err.response.data.error.message)));
  };
};

// день по умолчанию сегодняшнее число
const defaultDay = new Date(Date.now()).toISOString().slice(0, 10);

export const fetchTasks = () => {
  let dataBaseKey = JSON.parse(localStorage.getItem('data'));
  return dispatch => {
    axios
      .get(
        `https://smart-todo-645e5-default-rtdb.europe-west1.firebasedatabase.app/users/${dataBaseKey}/collection.json`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then(response => {
        const tasks = [];
        for (let key in response.data) {
          for (let item in response.data[key].tasks) {
            let task = {
              name: response.data[key].tasks[item],
              dataBaseKey: key,
              uniqCode: item,
            };
            localStorage.setItem(
              `${task.name.task}`,
              JSON.stringify({
                description: task.name.task,
                isDone: task.name.isDone,
              }),
            );
            tasks.push({ ...task });
          }
        }

        dispatch(
          addTasks(
            tasks.map(item => ({
              description: item.name.task,
              id: uuid(),
              isDone: localStorage.getItem(`${item.name.task}`)
                ? JSON.parse(localStorage.getItem(`${item.name.task}`)).isDone
                : false,
              dataBaseKey: item.dataBaseKey,
              uniqCode: item.uniqCode,
            })),
          ),
        );
      })
      .catch(err => dispatch(mainErrorHandler(err.response.data.message)));
  };
};

export const changeTaskPatch = (item, date = defaultDay) => {
  const userDataBaseKey = JSON.parse(localStorage.getItem('data'));
  const { uniqCode, description, id, dataBaseKey } = item;
  return dispatch => {
    // сначала изменения в базе данных
    axios
      .patch(
        `https://smart-todo-645e5-default-rtdb.europe-west1.firebasedatabase.app/users/${userDataBaseKey}/collection/${dataBaseKey}/tasks/${uniqCode}.json`,
        {
          task: description,
        },
      )
      .then(res => {
        // потом в локал сторадж
        localStorage.setItem(
          `${res.data.task}`,
          JSON.stringify({
            description: res.data.task,
            isDone: item.isDone,
          }),
        );
        dispatch(fetchTasks(date));
      });
  };
};

export const taskIsDonePatch = (item, date = defaultDay) => {
  const userDataBaseKey = JSON.parse(localStorage.getItem('data'));
  const { uniqCode, isDone, id } = item;
  return dispatch => {
    // сначала изменения в базе данных
    axios
      .patch(
        `https://smart-todo-645e5-default-rtdb.europe-west1.firebasedatabase.app/users/${userDataBaseKey}/collection/${date}/tasks/${uniqCode}.json`,
        {
          isDone: !isDone,
        },
      )
      .then(() => {
        // потом в локал сторадж
        localStorage.setItem(
          `${item.description}`,
          JSON.stringify({
            description: item.description,
            isDone: !item.isDone,
          }),
        );
        // потом изменения на клиенте
        dispatch(taskIsDoneHandler(id));
      });
  };
};

export const addNewTask = (task, date = defaultDay) => {
  let dataBaseKey = JSON.parse(localStorage.getItem('data'));
  return dispatch => {
    axios
      .post(
        `https://smart-todo-645e5-default-rtdb.europe-west1.firebasedatabase.app/users/${dataBaseKey}/collection/${date}/tasks.json`,
        JSON.stringify({ task, isDone: false }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then(res => {
        dispatch(addNewTaskHandler(JSON.parse(res.config.data).task));
        dispatch(fetchTasks(date));
      });
  };
};

export const deleteTask = (item, date = defaultDay) => {
  const userDataBaseKey = JSON.parse(localStorage.getItem('data'));
  const { uniqCode, description } = item;
  return dispatch => {
    axios
      .delete(
        `https://smart-todo-645e5-default-rtdb.europe-west1.firebasedatabase.app/users/${userDataBaseKey}/collection/${date}/tasks/${uniqCode}.json`,
      )
      .then(() => {
        localStorage.removeItem(`${description}`);
        dispatch(fetchTasks(date));
      })
      .catch(err => dispatch(mainErrorHandler(err.response.data.message)));
  };
};
