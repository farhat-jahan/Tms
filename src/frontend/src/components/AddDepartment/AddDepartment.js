import React from "react";
import './AddDepartment.css';
import EmailIcon from '../Teams/EmailIcon.svg'
import axios from "axios";

const DepartmentForm = () => {

  //   // START:ADDED API HERE
  //   const [task, setTask] = React.useState(null);
  //   React.useEffect(() => {
  //   axios.post('http://127.0.0.1:5000/api/v1/create-department',
  //       {'department_name':'AdvIsing','department_email':'acccount@itu.test',
  //           'department_description':'Handles payments' })
  //       .then((response) => {
  //     setTask(response.data);
  //   });
  // }, []);
  //   console.log(task)
  //
  // if (!task) return null;
  // // END:ADDED API HERE

    return (
        <div>
            <form>
                <fieldset>
                <div className="form-group">
                    <label for="deptname" className="form-label mt-4 form-title-green">DEPARTMENT NAME</label>
                    <input type="text" className="form-control Tms-input-field" id="deptname" placeholder="Type Something" />
                </div>
                <div className="form-group">
                    <label for="ituemail" className="form-label mt-4 form-title-green">ITU EMAIL ADDRESS</label>
                    <input type="email" className="form-control Tms-input-field" id="ituemail" aria-describedby="emailHelp" placeholder="Type Something" />
                </div>
                <div className="form-group">
                    <label for="deptdescription" className="form-label mt-4 form-title-green">DESCRIPTION</label>
                    <textarea className="form-control Tms-input-field" id="deptdescription" rows="9" placeholder="Type Something" ></textarea>
                </div>
                </fieldset>
            </form>
        </div>
    );
}

const SearchDepartment = () => {
    return (
        <div>
            <form>
                <fieldset>
                <div class="form-group row">
                    <label for="deptname" className="form-label mt-4 form-title-green">ASSIGN STAFF</label>
                    <div className="col-md-2"></div>
                    <div className="col-md-5">
                        <input className="form-control Tms-input-field search-field" type="text" placeholder="Search staff" aria-label="Search" /> 
                    </div>
                    <div className="col-md-3">
                       <button className="btn green-btn add-btn-text"> ADD </button>
                    </div>
                </div>
                </fieldset>
            </form>
        </div>
    );
}

const DepartmentTable = () => {
    return (
        <div>
            <table className="table table-hover">
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

            <button className="btn btn-md green-btn add-btn-text"> Submit </button>
            <button className="btn btn-md grey-btn add-btn-text"> Save a Draft </button>
        </div>
    );
}

function AddDepartment() {

    return (
        <div className="container-fluid Tms-page-bg">
            <br/><br/><br/>
            <div className="row">
                <div className="col col-md-7 offset-md-2">
                    <a href="#" className="card-link text-decoration-none Tms-para4"> &lt; Back to Teams</a>
                    <div className="card department-detail">
                        <div className="card-body">
                            <h4 className="card-title Tms-h4">Create a Department</h4>
                            <br />
                            <DepartmentForm></DepartmentForm>
                            <br />
                            <SearchDepartment></SearchDepartment>
                            <br />
                            <DepartmentTable></DepartmentTable>
                        </div>
                    </div>
                </div>
            </div>
            <br/><br/><br/>
            
        </div>
    );
}

export default AddDepartment;