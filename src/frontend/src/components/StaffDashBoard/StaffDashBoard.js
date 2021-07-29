import React from "react";
import './StaffDashBoard.css';
import Axios from 'axios';
import axios from 'axios';

function StaffDashBoard(){

    // WE WILL USE STAFF-ID TO GET THE ASSIGNED TASK DETAILS, THIS IS POST API CALL FOR THIS DATA
    const staffTaskDetails = ()=>{
        axios.post("http://127.0.0.1:5000/api/v1/assignee-task-list",{id:"2"})
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
            <button id="FOR-TESTING-POST-API REMOVE-THIS-BUTTON" onClick={staffTaskDetails}>CLICK HERE</button>
            {/*---------------------------------END------------------------------------------------------*/}

            <br/><br/><br/>
            <div className="row">
                <div className="col col-md-2" ></div>
                <div className="col-md-4">
                    <div className="card mb-2 shadow rounded card-min-height">
                        <div className="card-header">
                            <h4 className="card-heading">Department Overview</h4>
                        </div>
                        <div className="card-body">
                            <div id="donutchart"></div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card mb-4 shadow rounded card-min-height content-overflow-hidden">
                        <div className="card-header">
                            <h4 className="card-heading">Calendar <span
                                className="badge btn-color rounded-pill float-right">+</span></h4>
                        </div>
                        <div className="card-body">
                            <div className="calendar-base">
                                <div className="days">SUN MON <span className="btn-color">TUE</span> WED THU FRI SAT
                                </div>
                                <div className="days"> 23 24 <span className="btn-color">25</span> 26 27 28 29</div>
                                <hr className="month-line"/>
                                <div className="days"><span className="grey">9:00 am</span> ISO Department Weekly
                                    Meeting
                                </div>
                                <hr className="month-line"/>
                                <div className="days"><span className="grey">2:00 pm</span> One on one meeting with
                                    Hinka Patel
                                </div>
                                <hr className="month-line"/>
                                <div className="days"><span className="grey">3:30 pm</span> Tasks handoff to Finance
                                    Department
                                </div>
                                <hr className="month-line"/>
                                <div className="days"><span className="grey">5:00 pm</span> Happy Hour with Team Staff
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <br/>


            <div className="row">
                {/*<div className="col col-md-6 offset-md-3">*/}
                <div className="col col-md-2" ></div>
                <div className="col col-md-8">
                    <div className="card staff-task-details">
                        <div className="card-body staff-task-header">
                            <div className="row">
                                <div className="col">
                                    <h4 className="card-title Tms-h4">Recently Updated Task</h4>
                                </div>
                                <div className="col-6">
                                    <button type="submit" id="view-all-task" className="btn form-button active-tab">View All</button>
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

            {/*-------------START--------------------*/}
            {/*BELOW IS CODE FOR CHART*/}
        {/*    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"*/}
        {/*            integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"*/}
        {/*            crossOrigin="anonymous"></script>*/}
        {/*<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"*/}
        {/*            integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"*/}
        {/*            crossOrigin="anonymous"></script>*/}

            {/*<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>*/}
            {/*<script>*/}
            {/*  $(document).ready(function () {*/}

            {/*      google.charts.load("current", {packages: ["corechart"]},);*/}
            {/*      google.charts.setOnLoadCallback(drawChart);*/}
            {/*      function drawChart() {*/}
            {/*          var data = google.visualization.arrayToDataTable([*/}
            {/*              ['Task', 'Hours per Day'],*/}
            {/*              ['Unassigned', 11],*/}
            {/*              ['Backlog', 8],*/}
            {/*              ['In Progress', 17],*/}
            {/*              ['Closed', 64]*/}
            {/*          ]);*/}

            {/*          var options = {*/}
            {/*              title: 'Department Overview',*/}
            {/*              pieHole: 0.4,*/}
            {/*          };*/}

            {/*          var chart = new google.visualization.PieChart(document.getElementById('donutchart'));*/}
            {/*          chart.draw(data, options);*/}
            {/*      }*/}

            {/*  });*/}
            {/*</script>*/}
             {/*-------------END--------------------*/}

        </div>
    );
}
export default StaffDashBoard;

