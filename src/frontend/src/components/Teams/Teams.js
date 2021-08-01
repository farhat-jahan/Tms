import React from "react";
import "./Teams.css"

function Teams() {
    return(
        <div className="container-fluid">
            <br/><br/><br/><br/>

                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-2">
                        <div className="card mb-2 shadow-sm">
                            <div className="card-header">
                                <h4 className="card-heading">Departments</h4>
                            </div>
                            <div className="card-body">
                                <div
                                    className="shadow p-3 mb-3 bg-white rounded border-left-department-list border-color-iso">
                                    <div className="text mb-2">
                                        <h6 className="mb-0">International Student Office</h6>
                                        <small className="text-gray-500 float-right">25 new clients</small>
                                    </div>
                                </div>
                                <div
                                    className="shadow p-3 mb-3 bg-white rounded border-left-department-list border-color-admisions">
                                    <div className="text mb-2">
                                        <h6 className="mb-0">Admissions</h6>
                                        <small className="text-gray-500 float-right">25 new clients</small>
                                    </div>

                                </div>
                                <div
                                    className="shadow p-3 mb-3 bg-white rounded border-left-department-list border-color-reg">
                                    <div className="text mb-2">
                                        <h6 className="mb-0">Registrar</h6>
                                        <small className="text-gray-500 float-right">25 new clients</small>
                                    </div>

                                </div>
                                <div
                                    className="shadow p-3 mb-3 bg-white rounded border-left-department-list border-color-advising">

                                    <div className="text mb-2">
                                        <h6 className="mb-0">Advising</h6>
                                        <small className="text-gray-500 float-right">25 new clients</small>
                                    </div>
                                </div>
                                <div
                                    className="shadow p-3 mb-3 bg-white rounded border-left-department-list border-color-acc">
                                    <div className="text mb-2">
                                        <h6 className="mb-0">Accounting</h6>
                                        <small className="text-gray-500 float-right">25 new clients</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-6">
                        <div className="card mb-4 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Users</h5>

                                <form>
                                    <div className="row">
                                        <div className="col-4">
                                            <input type="text" className="form-control" placeholder="Department"/>
                                        </div>
                                        <div className="col-4">
                                            <input type="text" className="form-control" placeholder="Role"/>
                                        </div>
                                        <div className="col-3">
                                            <input type="text" className="form-control" placeholder="Program"/>
                                        </div>
                                        <div className="col-1">
                                            <button type="submit" className="btn btn-color mb-2">Apply</button>
                                        </div>
                                    </div>
                                </form>

                                <table className="table">
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
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td><i className="fa fa-envelope-o" aria-hidden="true"></i>Mail</td>
                                    </tr>
                                    <tr>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        <td><i className="fa fa-envelope-o" aria-hidden="true"></i>Mail</td>
                                    </tr>
                                    <tr>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                        <td>Larry</td>
                                        <td><i className="fa fa-envelope-o" aria-hidden="true"></i>Mail</td>
                                    </tr>
                                    <tr>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td><i className="fa fa-envelope-o" aria-hidden="true"></i>Mail</td>
                                    </tr>
                                    <tr>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        <td><i className="fa fa-envelope-o" aria-hidden="true"></i>Mail</td>
                                    </tr>
                                    <tr>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                        <td>Larry</td>
                                        <td><i className="fa fa-envelope-o" aria-hidden="true"></i>Mail</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>

        </div>

    );
}
export default Teams