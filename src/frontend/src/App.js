import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import AddNewUser from "./components/AddNewUser/AddNewUser";
import CreateTaskStudent from "./components/CreateTask/CreateTaskStudent";
import CreateTaskFaculty from './components/CreateTask/CreateTaskFaculty';
import './App.css';
import StudentDashBoard from "./components/StudentDashBoard/StudentDashBoard";

function App() {
  return (
    <>
      <div>
        < Navbar />
      </div>
      <div>
          { <div>
        <StudentDashBoard />
      </div> }
        {/*< CreateTaskFaculty />*/}
        {/* < CreateTaskStudent /> */}
      </div>
      {/* <div className="Tms-page-bg">
        < Login />
      </div> */}
      {/* <div>
        <AddNewUser />
      </div> */}
    </>
  );
}

export default App;
