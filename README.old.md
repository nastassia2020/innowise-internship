# innowise-internship link to the Task

https://drive.google.com/file/d/18I1PxOxZn2lwm__YeOtMNoWeiXygKwwN/view?pli=1

## How to run the app

install modules: npm install
run the app: npm start

### Database snapshot

We have user with collection folder and email/id/token data. Every collection folder has arrays with tasks.
To get access the collection folder we use URL: "https://smart-todo-645e5-default-rtdb.europe-west1.firebasedatabase.app/users/${dataBaseKey}/collection.json"
dataBaseKey it is uniq key of user, we also use it for login

### Application stack

State management: "@reduxjs/toolkit", "react-redux", "redux-thunk"

This project was created with "create-react-app", "react-router-dom", "react-calendar"

DB access: "axios"

### Folders structure

Components folder: all components fo this app (CalendarList, ErrorBoundary, Header, Modal, TaskList)
Pages folder: includes all pages (Login page, Sign page, Main page, PageNotFound page)
Store folder: folder for state management, includes store, slices and actions
