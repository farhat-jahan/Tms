import React from 'react';
import './TaskDetail.css';
import { ReactComponent as HKIcon } from "./HK.svg";
import { ReactComponent as FJIcon } from "./FJ.svg";
import taskElements from './TaskHistory';
import "react-vertical-timeline-component/style.min.css";

const TaskInfo = () => {
    return(
        <div className="d-flex flex-column taskdetail-form">
            <div className="p-2">
                <p className="card-title taskdetail-title">STATUS</p>
                <p className="card-subtitle mb-2 taskdetail-subtitle">In progress</p>
            </div> <br />
            <div className="p-2">
                <p className="card-title taskdetail-title ">DEPARTMENT</p>
                <span className="card-subtitle mb-2 taskdetail-subtitle">
                    Finance <span class="badge finance-box"> </span>
                </span>
                <br />
                <span className="card-subtitle mb-2 taskdetail-subtitle">
                        ISO <span class="badge iso-box"> </span>
                </span>
                <br />
            </div> <br />
            <div className="p-2">
                <p className="card-title taskdetail-title ">ASSIGNEE</p>
                <p className="card-subtitle mb-2 taskdetail-subtitle">Farhat Jahan</p>
            </div> <br />
            <div className="p-2">
                <p className="card-title taskdetail-title ">ATTACHMENTS</p>
                <p className="card-text mb-2 taskdetail-subtitle"><small className="text-muted">Student_profile.jpg</small></p>
                <p className="card-text mb-2 taskdetail-subtitle text-muted"><small className="text-muted">Student_profile.jpg</small></p>
            </div>
        </div> 
    );
}

const TaskHistory = () => {
    return (
        <div class="container">
            <ul>
            <li>
                <span></span>
                <div>
                <div class="title">Codify</div>
                <div class="info">Let's make coolest things in css</div>
                <div class="type">Prensetation</div>
                </div>
                <span class="number">
                <span>10:00</span>
                <span>12:00</span>
                </span>
            </li>
            <li>
                <div>
                <span></span>
                <div class="title">Codify</div>
                <div class="info">Let's make coolest things in javascript</div>
                <div class="type">Prensetation</div>
                </div>
                <span class="number">
                <span>13:00</span>
                <span>14:00</span>
                </span>
            </li>
            <li>
                <div>
                <span></span>
                <div class="title">Codify</div>
                <div class="info">Let's make coolest things in css</div>
                <div class="type">Review</div>
                </div>
                <span class="number">
                <span>15:00</span>
                <span>17:45</span>
                </span>
            </li>
            </ul>
      </div>
    );
}

function TaskDetail() {
    return (
        <div className="container-fluid Tms-page-bg">
            <br/>
            <div className="row">
                <div className="col col-md-7 offset-md-3">
                    <div className="row">
                        <div className="col-md-12">
                            <a href="#" className="card-link text-decoration-none Tms-para4"> &lt; Back to Listings</a>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <p className="Tms-h2">Inter-Department Task Title</p>
                        </div>
                    </div>
        
                    <div className="row">
                        <div className="col-md-2">
                            <p className="status_low rounded border text rectangle" id="urgent" value="Urgent">Urgent</p>
                        </div>
                        <div className="col-md-5">
                            <label className="Tms-para5">Created by Hinka Patel 6 days ago</label>
                        </div>
                        <div className="col-md-3">
                            <button type="submit" className="btn btn-md Tms-btn-primary newtask-submit-btn">New Task</button>
                        </div>
                        <div className="col-md-2">
                            <button type="submit" className="btn btn-md newtask-submit-btn Tms-btn-secondary">Edit</button>
                        </div>
                    </div>
                    <br />

                    <div className="row">
                        <div className="col-md-10">
                            <TaskHistory></TaskHistory>
                        </div>
                        <div className="col-md-2">
                            <TaskInfo></TaskInfo>
                        </div>
                    </div>
                </div>
            </div>
            <br/><br/><br/>
            
        </div>
    );
}

export default TaskDetail;