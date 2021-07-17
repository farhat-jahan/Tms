import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import AddNewUser from "./components/AddNewUser/AddNewUser"
import './App.css';

function App() {
  return (
    <>
      <div>
        < Navbar />
      </div>
      <div className="Tms-page-bg">
        < Login />
      </div>
      {/* <div>
        <AddNewUser />
      </div> */}
    </>
  );
}

export default App;
