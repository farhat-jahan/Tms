import React, {useRef} from "react";
import './CreateTaskBase.css';
//import { FileDrop } from 'react-file-drop';

//https://www.npmjs.com/package/react-file-drop

const InquiryForm = () => {
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

        <form>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="inquiry-title" className="form-label mt-4 Tms-input-label">TITLE</label>
                    <input type="text" className="form-control Tms-imput-field-text" id="inquiry-title" placeholder="Type something"/>
                </div>

                <div className="form-group">
                    <label htmlFor="inquiry-description" className="form-label mt-4 Tms-input-label">DESCRIPTION</label>
                    <textarea className="form-control Tms-imput-field-text" id="inquiry-description" placeholder="Type something" rows="10"/>
                </div>
                
                <div className="form-group">       
                    <label htmlFor="inquiry-attachment" className="form-label mt-4 Tms-input-label">ATTACHMENT</label>
                    <div className="Tms-fileupload-ontainer">
                        <div className="file-upload-wrapper">
                        <input type="file" 
                                id="inquiry-attachment" 
                                className="hidden"
                                onChange={onFileInputChange}
                                multiple="true" />
                        </div>
                    </div>
                </div>
                <br/><br/><br/><br/>
                <div className="form-group">
                    <button type="submit" className="btn btn-md Tms-btn-primary inquiry-submit-btn">Submit</button>
                    <button type="submit" className="btn btn-md inquiry-submit-btn Tms-btn-secondary">Save a Draft</button>
                </div>
                
            </fieldset>
        </form>
                
    );
                        
}


function CreateTaskStudent() {

    return (
        <div className="container-fluid Tms-page-bg">
            <br/><br/><br/>
            <div className="row">
                <div className="col col-md-6 offset-md-3">
                    <a href="#" className="card-link text-decoration-none Tms-para4"> &lt; Back to Listings</a>
                    <div className="card inquiry-form">
                        <div className="card-body">
                            <h4 className="card-title Tms-h4">Submit an Inquiry</h4>
                            <InquiryForm></InquiryForm>
                        </div>
                    </div>
                </div>
            </div>
            <br/><br/><br/>
            
        </div>
    );
}

export default CreateTaskStudent;