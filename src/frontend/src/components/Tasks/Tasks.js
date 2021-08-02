import React from "react";
import './Tasks.css';
import SearchTask from './SearchTask.svg';
import CreateTaskBtn from './CreateTaskBtn.svg';

const TaskTableSearch = () => {
    return (
        <div>
            <form className="row g-3">
            <div className="col-md-3">
                <select className="form-control Tms-input-field" id="taskdepartment">
                    <option selected>Department</option>
                    <option>Admissions</option>
                    <option>ISO</option>
                    <option>Registrar</option>
                    <option>Advising</option>
                </select>
            </div>
            <div className="col-md-3">
                <select className="form-control Tms-input-field" id="taskrole">
                    <option selected>Role</option>
                    <option>Admin</option>
                    <option>Regular</option>
                </select>
            </div>
            <div className="col-md-3">
                <select className="form-control Tms-input-field" id="taskprogram">
                    <option selected>Program</option>
                    <option>Computer</option>
                </select>
            </div>
            <div className="col-md-3">
                <button type="submit" className="btn task-search-apply create-task-text">Apply</button>
            </div>
            </form>
        </div>
    );
}

const TaskTable = () => {
    return(
        <div>
            <table className="table table-hover">
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
                <ul className="pagination pagination-sm justify-content-center">
                    <li className="page-item disabled">
                        <a className="page-link" href="#">&laquo;</a>
                    </li>
                    <li className="page-item active">
                        <a className="page-link pagination-text" href="#">1</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link pagination-text" href="#">2</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link pagination-text" href="#">3</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link pagination-text" href="#">4</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link pagination-text" href="#">5</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link pagination-text" href="#">&raquo;</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

function Tasks(){
    return(
        <div className="container-fluid Tms-page-bg">
            <br/> <br />
            <div className="row">
                <div className="col col-md-7 offset-md-2">
                <div className="card student-task-detail">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <h4 className="card-title Tms-h3">Tasks</h4>
                            </div>
                            <div className="col-md-2">
                            </div>
                            <div className="col-md-4">
                                <div class="btn-group">
                                    <button className="btn"><img src={SearchTask} alt="SearchTask" /></button>
                                    <button className="btn"><img src={CreateTaskBtn} alt="CreateTask" /></button>
                                    {/* <button className="btn btn-md create-task-btn create-task-text">Create a Task</button> */}
                                </div>
                            </div>
                        </div>
                        <br/> <br/> <br/>
                        <div className="row">
                            <div className="col-md-12">
                                <TaskTableSearch></TaskTableSearch>
                                <br/>
                                <TaskTable></TaskTable>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Tasks;