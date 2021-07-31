
import React from "react";
import './StudentDashboard.css';

const StudentTaskTable = () => {
    return(
        <div>
            <table class="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Task</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">01</th>
                        <td> OPT Request </td>
                        <td>
                            <span className="badge status_low rounded rectangle" id="low" value="Low">Low</span>
                        </td>
                        <td className="table-text-other">In Progress</td>
                    </tr>
                    <tr>
                        <th scope="row">02</th>
                        <td> Course egistration queries </td>
                        <td>
                            <span className="badge status_low rounded rectangle" id="meduim" value="Medium">Medium</span>
                        </td>
                        <td className="table-text-other">In Progress</td>
                    </tr>
                    <tr>
                        <th scope="row">03</th>
                        <td> Fall 2021 Fees related queries</td>
                        <td>
                            <span className="badge status_low rounded text rectangle" id="high" value="High">High</span>
                        </td>
                        <td className="table-text-other">Submitted</td>
                    </tr>
                    <tr>
                        <th scope="row">04</th>
                        <td> OPT Request </td>
                        <td>
                            <span className="badge status_low rounded rectangle" id="meduim" value="Medium">Medium</span>
                        </td>
                        <td className="table-text-completed">Completed</td>
                    </tr>
                    <tr>
                        <th scope="row">05</th>
                        <td> Course registration queries</td>
                        <td>
                            <span className="badge status_low rounded rectangle" id="urgent" value="Urgent">Urgent</span>
                        </td>
                        <td className="table-text-other">Submitted</td>
                    </tr>
                    <tr>
                        <th scope="row">06</th>
                        <td> Request to add Java Course for Fall 2021 </td>
                        <td>
                            <span className="badge status_low rounded rectangle" id="low" value="Low">Low</span>
                        </td>
                        <td className="table-text-completed">Completed</td>
                    </tr>
                </tbody>
            </table>

            <br/>
            <div>
                <ul class="pagination pagination-sm justify-content-center">
                    <li class="page-item disabled">
                        <a class="page-link" href="#">&laquo;</a>
                    </li>
                    <li class="page-item active">
                        <a class="page-link pagination-text" href="#">1</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link pagination-text" href="#">2</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link pagination-text" href="#">3</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link pagination-text" href="#">4</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link pagination-text" href="#">5</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link pagination-text" href="#">&raquo;</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

function StudentDashBoard(){
    return(
        <div className="container-fluid Tms-page-bg">
            <br/> <br />
            <div className="row">
                <div className="col col-md-7 offset-md-2">
                <div className="card student-task-detail">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                                <h4 className="card-title Tms-h4">My Tasks</h4>
                            </div>
                            <div className="col-md-8">
                                <button type="submit" className="btn btn-md student-dashboard-create-btn Tms-btn-secondary">Create a New Task</button>
                            </div>
                        </div>
                        <br/> <br/> <br/>
                        <div className="row">
                            <div className="col-md-12">
                                <StudentTaskTable></StudentTaskTable>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default StudentDashBoard;

