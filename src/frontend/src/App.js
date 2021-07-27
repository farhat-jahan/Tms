import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import axios from 'axios';

import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import AddNewUser from "./components/AddNewUser/AddNewUser";
import CreateTaskStudent from "./components/CreateTask/CreateTaskStudent";
import CreateTaskFaculty from './components/CreateTask/CreateTaskFaculty';
import StudentDashBoard from "./components/StudentDashBoard/StudentDashBoard";
import EditTask from "./components/EditTask/EditTask";
import './App.css';

import { getToken, removeUserSession, setUserSession } from './components/Utils/Common';

function App() {

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }
  }, []);
  
  return (
    <div>
      <BrowserRouter>
        <div>
            <Navbar></Navbar>
            {/* <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/login">Login</NavLink>
            <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink> */}
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/add" component={AddNewUser} />
              <Route path="/inquiry" component={CreateTaskStudent} />
              <Route path="/task" component={CreateTaskFaculty} />
              <Route path="/student" component={StudentDashBoard} />
              <Route path="/edittask" component={EditTask} />
            </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
