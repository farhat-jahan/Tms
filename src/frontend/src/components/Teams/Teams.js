import React from "react";
import "./Teams.css";
import EmailIcon from "./EmailIcon.svg";

const DepartmentList = () => {
    return(
        <div className="card-body">
            <div className="p-3 mb-3 bg-white rounded border-left-department-list border-color-iso">
                <div className="text mb-2">
                    <h6 className="Tms-h6">International Student Office</h6>
                    <small className="department-side-text float-right">10 USERS</small>
                </div>
            </div>
            <div
                className="p-3 mb-3 bg-white rounded border-left-department-list border-color-admisions">
                <div className="text mb-2">
                    <h6 className="Tms-h6">Admissions</h6>
                    <small className="department-side-text float-right">15 USERS</small>
                </div>

            </div>
            <div
                className="p-3 mb-3 bg-white rounded border-left-department-list border-color-reg">
                <div className="text mb-2">
                    <h6 className="Tms-h6">Registrar</h6>
                    <small className="department-side-text float-right">8 USERS</small>
                </div>

            </div>
            <div
                className="p-3 mb-3 bg-white rounded border-left-department-list border-color-advising">

                <div className="text mb-2">
                    <h6 className="Tms-h6">Advising</h6>
                    <small className="department-side-text float-right">5 USERS</small>
                </div>
            </div>
            <div
                className="p-3 mb-3 bg-white rounded border-left-department-list border-color-acc">
                <div className="text mb-2">
                    <h6 className="Tms-h6">Accounting</h6>
                    <small className="department-side-text float-right">7 USERS</small>
                </div>
            </div>
        </div>
    );
}

const UserTabkeSearch = () => {
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
                <button type="submit" className="btn apply-search-btn apply-serach-text">Apply</button>
            </div>
            </form>
        </div>
    );
}

const UserTable = () => {
    return(
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Role</th>
                    <th scope="col">Department</th>
                    <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="Tms-h6"> Alex Kim </td>
                        <td className="Tms-para4"> Staff </td>
                        <td className="Tms-para4"> ISO </td>
                        <td> <img src={EmailIcon} alt="EmailIcon" /> </td>
                    </tr>
                    <tr>
                        <td className="Tms-h6"> Dave Lo </td>
                        <td className="Tms-para4"> Staff </td>
                        <td className="Tms-para4"> Admissions </td>
                        <td> <img src={EmailIcon} alt="EmailIcon" /> </td>
                    </tr>
                    <tr>
                        <td className="Tms-h6"> David Schaefer </td>
                        <td className="Tms-para4"> Student </td>
                        <td className="Tms-para4"> Student </td>
                        <td> <img src={EmailIcon} alt="EmailIcon" /> </td>
                    </tr>
                    <tr>
                        <td className="Tms-h6"> Steve Wang </td>
                        <td className="Tms-para4"> Admin </td>
                        <td className="Tms-para4"> Registrar </td>
                        <td> <img src={EmailIcon} alt="EmailIcon" /> </td>
                    </tr>
                    <tr>
                        <td className="Tms-h6"> Lorraine Pakravan </td>
                        <td className="Tms-para4"> Student </td>
                        <td className="Tms-para4"> Student </td>
                        <td> <img src={EmailIcon} alt="EmailIcon" /> </td>
                    </tr>
                    <tr>
                        <td className="Tms-h6"> Daniel Kim </td>
                        <td className="Tms-para4"> Staff </td>
                        <td className="Tms-para4"> Advising </td>
                        <td> <img src={EmailIcon} alt="EmailIcon" /> </td>
                    </tr>
                    <tr>
                        <td className="Tms-h6"> Alex Stone </td>
                        <td className="Tms-para4"> Student </td>
                        <td className="Tms-para4"> Student </td>
                        <td> <img src={EmailIcon} alt="EmailIcon" /> </td>
                    </tr>
                    <tr>
                        <td className="Tms-h6"> Henry Watson </td>
                        <td className="Tms-para4"> Staff </td>
                        <td className="Tms-para4"> Accounting </td>
                        <td> <img src={EmailIcon} alt="EmailIcon" /> </td>
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

function Teams(){
    return(
        <div className="container-fluid Tms-page-bg">
            <br/> <br />
            <div className="row">
                <div className="col-md-3">
                    <div className="card team-department-detail">
                        <div className="card-body">
                            <h4 className="card-title Tms-h3">Departments</h4>
                            <br/>
                            <DepartmentList></DepartmentList>
                        </div>
                    </div>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-7">
                    <div className="card team-users-detail">
                        <div className="card-body">
                            <h4 className="card-title Tms-h3">Users</h4>
                            <br />
                            <UserTabkeSearch></UserTabkeSearch>
                            <br /> <br />
                            <UserTable></UserTable>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Teams;