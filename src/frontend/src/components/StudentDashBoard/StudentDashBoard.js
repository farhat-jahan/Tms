import React from "react";
import './StudentDashBoard.css';

function StudentDashBoard(){

    let priority = document.getElementsByClassName("priority-value").namedItem("priority-val")
    console.log("data-----", priority);
    if (priority != null){
        if (priority === "Low"){
        priority.style.background="#BBFFBB";
        }
    }

    return (
        <div className="container-sm pt-3 my-3 border Tms-page-bg" >

            <div className="row">
                <div className="col-4" >
                    <p id="mytask-header">My Task</p>

                </div>
                <div className="col-6">
                    <button type="submit" id="create-new-task" className="btn form-button active-tab">Creat New Task</button>
                </div>
            </div>

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
                        <td>Iso question</td>
                        {/*<td className="priority-value" name="priority-val">Low</td>*/}
                        <button className="priority-value" name="priority-val">Low</button>
                        <td>Active</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Admission question</td>
                        {/*<td>Medium</td>*/}
                        <button className="priority-value" name="priority-val">Medium</button>
                        <td>In-active</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        {/*<td>the Bird</td>*/}
                        <button className="priority-value" name="priority-val">Low</button>
                        <td>@twitter</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        {/*<td>the Bird</td>*/}
                        <button className="priority-value" name="priority-val">Low</button>
                        <td>@twitter</td>
                    </tr>
                     <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        {/*<td>the Bird</td>*/}
                        <button className="priority-value" name="priority-val">Low</button>
                        <td>@twitter</td>
                    </tr>
                     <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        {/*<td>the Bird</td>*/}
                        <button className="priority-value" name="priority-val">Low</button>
                        <td>@twitter</td>
                    </tr>
                     <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        {/*<td>the Bird</td>*/}
                        <button className="priority-value" name="priority-val">Low</button>
                        <td>@twitter</td>
                    </tr>
                     <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        {/*<td>the Bird</td>*/}
                        <button className="priority-value" name="priority-val">Low</button>
                        <td>@twitter</td>
                    </tr>

                    </tbody>
                </table>
                </div>
            </div>
        </div>
    );
}
export default StudentDashBoard;

