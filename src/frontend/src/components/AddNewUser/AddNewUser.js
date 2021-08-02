import React from "react";
import './AddNewUser.css';

function selectForm(sectionType) {
    let addFacultyBtn = document.getElementById("add-faculty-btn");
    let addStudentBtn = document.getElementById("add-student-btn");
    
    let addFacultyTab = document.getElementById("add-faculty-form");
    let addStudentTab = document.getElementById("add-student-form");

    console.log("changeState Called");
    let toAddBtn = addStudentBtn;
    let toAddTab = addStudentTab;
    let toRemoveBtn = addFacultyBtn;
    let toRemoveTab = addFacultyTab;

    if (sectionType == "FACULTY") {
        toAddBtn = addFacultyBtn;
        toAddTab = addFacultyTab;
        toRemoveBtn = addStudentBtn;
        toRemoveTab = addStudentTab;
    } else {
        
    }
    toAddBtn?.classList.add("active-tab");
    toAddTab?.classList.add("show");
    toAddTab?.classList.add("active");
     
    toRemoveBtn?.classList.remove("active-tab");
    toRemoveTab?.classList.remove("show");
    toRemoveTab?.classList.remove("active");

}

function AddNewUser() {
    return (
        <div className="container-fluid Tms-page-bg">
            <br/>
            <br/>
            <br/>
            <div className="row justify-content-center text-center">
                <div className="col-md-6">
                    <div className="card card-main-add-new-user">
                        <div className="card-body">
                            <br/>
                            <div className="card-title"> 
                              <h4 className="text-3 Tms-h4"> Assign a new user to allow access</h4> 
                            </div>
                            <br/>
                            <div className="card-title"> 
                            <div className="btn-group" role="group" aria-label="Basic example" role="tablist">
                                <button type="button" onClick={() => selectForm("FACULTY")} id="add-faculty-btn"  className="btn form-button active-tab" data-bs-toggle="tab" data-bs-target="#add-faculty-form">FACULTY</button>
                                <button type="button" onClick={() => selectForm("STUDENT")} id="add-student-btn" className="btn form-button" data-bs-toggle="tab" data-bs-target="#add-student-form">STUDENT</button>
                            </div>

                            <br/>
                            <br/>
                            <br/>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="add-faculty-form" aria-labelledby="add-faculty-btn" role="tabpanel">
                                    <div className="row">
                                            <div className="col-md-11 offset-md-1">
                                                <form>
                                                    <div className="form-group">
                                                        <input type="email" className="form-control Tms-input-field" id="studentituemail" placeholder="ITU Email Address" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input className="form-control Tms-input-field" id="studentfname" placeholder="First Name" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input className="form-control Tms-input-field" id="studentlname" placeholder="Last Name" />
                                                    </div>
                                                    <div className="form-group">
                                                        <select className="form-control Tms-input-field" id="roleselection">
                                                            <option>Role</option>
                                                            <option>Student</option>
                                                            <option>Employee</option>
                                                            <option>Admin</option>
                                                            <option>Intern</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <select className="form-control Tms-input-field" id="departmentselection">
                                                            <option>Department</option>
                                                            <option>Admissions</option>
                                                            <option>ISO</option>
                                                            <option>Registrar</option>
                                                            <option>Advising</option>
                                                            <option>Accounting</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-check text-left">
                                                        <input className="form-check-input" type="checkbox" id="emailupdate" />
                                                        <label className="form-check-label" htmlFor="demailupdatecheck">Send email updates to the new user</label>
                                                    </div>
                                                    <div className="form-check text-left">
                                                        <input className="form-check-input" type="checkbox" id="temppasswordgenerate" />
                                                        <label className="form-check-label" htmlFor="temppasswordcheck">Generate a temporary password for the new user</label>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    <br /> <br />
                                    <div className="row">
                                        <div className="col-md-12 offset-md-3">
                                            <button type="submit" className="btn btn-md Tms-btn-primary">Add New User</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="add-student-form" aria-labelledby="add-student-btn" role="tabpanel">
                                    <div className="row">
                                            <div className="col-md-11 offset-md-1">
                                                <form>
                                                    <div className="form-group">
                                                        <input type="email" className="form-control Tms-input-field" id="studentituemail" placeholder="ITU Email Address" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input className="form-control Tms-input-field" id="studentfname" placeholder="First Name" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input className="form-control Tms-input-field" id="studentlname" placeholder="Last Name" />
                                                    </div>
                                                    <div className="form-check text-left">
                                                        <input className="form-check-input" type="checkbox" value="" id="emailupdate" />
                                                        <label className="form-check-label" htmlFor="demailupdatecheck">Send email updates to the new user</label>
                                                    </div>
                                                    <div className="form-check text-left">
                                                        <input className="form-check-input" type="checkbox" value="" id="temppasswordgenerate" />
                                                        <label className="form-check-label" htmlFor="temppasswordcheck">Generate a temporary password for the new user</label>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    <br /> <br />
                                    <div className="row">
                                        <div className="col-md-12 offset-md-3">
                                            <button type="submit" className="btn btn-md Tms-btn-primary">Add New User</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>         
                        </div>
                    </div>
                </div>
            </div>
        
        <br/>
        <br/>
        <br/>
        <br/>
        </div>
    )
}

export default AddNewUser;