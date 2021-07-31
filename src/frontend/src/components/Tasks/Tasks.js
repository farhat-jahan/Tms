import React from "react";
import './Tasks.css';
import searchimage from "./TemSrchImage.svg"

function Tasks(){

    return (
        <div className="container-fluid Tms-page-bg">
            <br/><br/><br/>
            <div className="row">
                <div className="col col-md-6 offset-md-3">
                    <a href="#" className="card-link text-decoration-none Tms-para4"> &lt; Back to Listings</a>

                    <div className="card task-details">
                        <div className="card-body my-task-header">

                            <div className="row">
                                <div className="col-md-8">
                                    <h4 className="card-title Tms-h4">Tasks</h4>
                                </div>

                               <div className="col-md-4">
                                    <div className="col">
                                        <button type="submit" id="create-a-task" className="btn form-button active-tab">Creat a Task</button>
                                    </div>

                                    <div className="col">
                                        <img src={searchimage} alt="searchimage" />
                                    </div>
                                </div>
                            </div>

                            <br/><br/><br/>

                        <div>
                            <form>
                                <div className="row">
                                    <div className="col col-4">
                                        <input type="text" className="form-control" placeholder="Department"/>
                                    </div>
                                    <div className="col col-4">
                                        <input type="text" className="form-control" placeholder="Role"/>
                                    </div>
                                    <div className="col col-3">
                                        <input type="text" className="form-control" placeholder="Program"/>
                                    </div>
                                    <div className="col col-1">
                                        <button type="submit" className="btn btn-color mb-2">Apply</button>
                                    </div>
                                </div>
                            </form>
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
export default Tasks;

