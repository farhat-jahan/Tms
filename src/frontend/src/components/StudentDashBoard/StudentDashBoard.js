import React from "react";
import './StudentDashBoard.css';
import axios from "axios";

function StudentDashBoard(){

     // WE WILL USE STAFF-ID TO GET THE ASSIGNED TASK DETAILS, THIS IS POST API CALL FOR THIS DATA
    const studentTaskDetails = ()=>{
        axios.post("http://127.0.0.1:5000/api/v1/assignee-task-list",{id:"3"})
            .then(
            (response)=>{
            console.log(response)
        })
            .catch(error=>{
                console.log(error);
            })
    }

    return (
        // <div className="container-sm pt-3 my-3 border Tms-page-bg" >
        <div className="container-fluid Tms-page-bg">


             {/*--------------------------------START-------------------------------------------------------*/}
            {/*BELOW BUTTON IS FOR TESTING THE POST API JSON DATA, WE CAN REMOVE THIS*/}
            <button id="FOR-TESTING-POST-API REMOVE-THIS-BUTTON" onClick={studentTaskDetails}>CLICK HERE</button>
            {/*---------------------------------END------------------------------------------------------*/}

            <br/><br/><br/>
            <div className="row">
                <div className="col col-md-6 offset-md-3">
                    <a href="#" className="card-link text-decoration-none Tms-para4"> &lt; Back to Listings</a>
                    <div className="card student-task-details">
                        <div className="card-body my-task-header">
                            <div className="row">
                                <div className="col">
                                    <h4 className="card-title Tms-h4">My Tasks</h4>
                                </div>
                            <div className="col-6">
                                <button type="submit" id="create-new-task" className="btn form-button active-tab">Creat New Task</button>
                            </div>
                            </div>


                        </div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="table-responsive">
                                    <table className="table table-striped my-task-table">
                                        <thead className=".thead-dark">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Task</th>
                                            <th scope="col">Priority</th>
                                            <th scope="col" id="status-col">Status</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Admissions question</td>
                                            {/*<td className="priority-value" name="priority-val">Low</td>*/}
                                            <button className="status_low rounded rectangle" id="low" value="Low" >Low</button>
                                            <td>Submitted</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Iso question</td>
                                            {/*<td className="priority-value" name="priority-val">Low</td>*/}
                                            <button className="status_low rounded rectangle" id="meduim" value="Medium">Medium</button>
                                            <td>In Progress</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Account question</td>
                                            {/*<td className="priority-value" name="priority-val">Low</td>*/}
                                            <button className="status_low rounded text rectangle" id="high" value="High">High</button>
                                            <td>Completed</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/><br/><br/>
        </div>
    );
}
export default StudentDashBoard;

