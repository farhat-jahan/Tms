import React, { Component } from "react";
import './StaffDashBoard.css';
import { Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import StaffCalendarimg from './StaffCalendar.svg';

class DepartmentOverview extends React.Component {
    state = {
      dataDoughnut: {
        labels: ["UNASSIGNED", "BACKLOG", "In PROGRESS", "CLOSED"],
        datasets: [
          {
            data: [16, 25, 51, 8],
            backgroundColor: ["#F7F5F5", "#ABF089", "#767676", "#FF8A00"],
            hoverBackgroundColor: [
              "#F7F5F5",
              "#ABF089",
              "#767676",
              "#FF8A00"
            ]
          }
        ]
      }
    }
    
    render() {
        return (
        <MDBContainer>
          <h4 className="Tms-h5">DEPARTMENT OVERVIEW</h4>
          <Doughnut data={this.state.dataDoughnut} options={{ responsive: true }} />
        </MDBContainer>
        );
      }
}

const StaffCalendar = () => {
    return (
        <div>
           <img src={StaffCalendarimg} alt="StaffCalendar" />
        </div>
    );
}

const StaffNewTask = () => {
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
                <div className="col col-md-9 offset-md-2">
                    <h4 className="card-title Tms-h3">ISO Department</h4>
                    <br /> <br/>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card staff-department-overview">
                                <div className="card-body">
                                    <DepartmentOverview></DepartmentOverview>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card staff-calender">
                                <div className="card-body">
                                    <StaffCalendar></StaffCalendar>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card staff-recent-tasks">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h4 className="card-title Tms-h5">Recently Updated Tasks</h4>
                                        </div>
                                        <div className="col-md-6">
                                            <button className="btn view-task-btn view-task-text ">View All</button>
                                        </div>
                                    </div>
                                    <br/> <br/>
                                    <StaffNewTask></StaffNewTask>
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