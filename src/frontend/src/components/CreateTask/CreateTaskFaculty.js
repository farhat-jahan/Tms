import React, {useRef} from "react";
import { FileDrop } from 'react-file-drop';
import './CreateTaskBase.css';
//https://www.npmjs.com/package/react-file-drop

const NewTaskForm = () => {
    const fileInputRef = useRef(null);

    const onFileInputChange = (event) => {
        const { files } = event.target;
        console.log(files);
        // do something with your files...
    }

    const onTargetClick = () => {
        fileInputRef.current.click()
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col col-md-8">
                    <form>
                        <fieldset>
                            <div className="form-group">
                                <label htmlFor="newtask-title" className="form-label mt-4 Tms-input-label">TITLE</label>
                                <input type="text" className="form-control Tms-imput-field-text" id="newtask-title" placeholder="Type something"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="newtask-description" className="form-label mt-4 Tms-input-label">PROJECT OVERVIEW</label>
                                <textarea className="form-control Tms-imput-field-text" id="newtask-description" placeholder="Type something" rows="10"/>
                            </div>
                            
                            <div className="form-group">       
                                <label htmlFor="newtask-attachment" className="form-label mt-4 Tms-input-label">ATTACHMENT</label>
                                <div className="Tms-fileupload-ontainer">
                                    <div className="file-upload-wrapper">
                                    <input type="file" 
                                            id="newtask-attachment" 
                                            className="hidden"
                                            onChange={onFileInputChange}
                                            multiple="true" />
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
                
                <div className="col col-md-4">
                    <form>
                        <fieldset>
                            <div className="form-group w-100">
                                <label htmlFor="newtask-title" className="form-label mt-4 Tms-input-label w-100">
                                    <div className="row">
                                        <div className="col col-md-8">Assign</div>
                                        <div className="col col-md-4">
                                            <button className="btn btn-sm Tms-btn-rounded Tms-btn-secondary btn-circle-btn-sm"> + </button> 
                                        </div>
                                    </div>
                                    
                                 </label>            
                                 <div className="row">
                                    <p className="col col-md-12"> No one</p>
                                </div>
                            </div>

                            <div className="form-group w-100">
                                <label htmlFor="newtask-title" className="form-label mt-4 Tms-input-label w-100">
                                    <div className="row">
                                        <div className="col col-md-8">DEPARTMENT</div>
                                        <div className="col col-md-4">
                                            <button className="btn btn-sm Tms-btn-rounded Tms-btn-secondary btn-circle-btn-sm"> + </button> 
                                        </div>
                                    </div>
                                    
                                 </label>            
                                 <div className="row">
                                    <p className="col col-md-12"> No department</p>
                                </div>
                            </div>

                            <div className="form-group w-100">
                                <label htmlFor="newtask-title" className="form-label mt-4 Tms-input-label w-100">
                                    <div className="row">
                                        <div className="col col-md-8">PROJECT STATUS</div>
                                        
                                    </div>
                                    
                                 </label>            
                                 <div className="row">
                                 
                                    <select class="col col-md-8 form-select" size="4">
                                        <option className="project-status status-low" value="Low">Low</option>
                                        <option className="project-status status-medium" value="Medium">Medium</option>
                                        <option className="project-status status-high" value="High">High</option>
                                        <option className="project-status status-urgent" value="Urgent">Urgent</option>
                                    </select>
                                </div>
                            </div>
                            
                        </fieldset>
                    </form>
                </div>
            </div>
            <br/><br/><br/><br/>
            <div className="row">
                <div className="col col-md-12">
                    <div className="form-group">
                        <button type="submit" className="btn btn-md Tms-btn-primary newtask-submit-btn">Submit</button>
                        <button type="submit" className="btn btn-md newtask-submit-btn Tms-btn-secondary">Save a Draft</button>
                    </div>
                </div>
                
            </div>
            
        </div>
    );
                        
}


function CreateTaskFaculty() {

    return (
        <div className="container-fluid Tms-page-bg">
            <br/><br/><br/>
            <div className="row">
                <div className="col col-md-6 offset-md-3">
                    <a href="#" className="card-link text-decoration-none Tms-para4"> &lt; Back to Listings</a>
                    <div className="card newtask-form">
                        <div className="card-body">
                            <h4 className="card-title Tms-h4">Create a New Task</h4>
                            <NewTaskForm></NewTaskForm>
                        </div>
                    </div>
                </div>
            </div>
            <br/><br/><br/>
            
        </div>
    );
}

export default CreateTaskFaculty;