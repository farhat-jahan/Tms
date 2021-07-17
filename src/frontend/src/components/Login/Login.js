import React from "react";
import itulogo from './ITULogo.svg';
import './Login.css';

function Login() {
    return (
        <div className="container" style= {{height: "100vh"}}>
            <br /> <br /> <br /> <br /> <br /> <br /> <br />
            <div className="row">
                <div className="col-md-4 offset-md-1">
                    <img src={itulogo} alt="itulogo" />
                </div>
                <div className="col-md-4">
                    <form>
                        <div className="form-group">
                            <label className="Tms-h5">Sign In with ITU email</label>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control Tms-input-field Tms-imput-field-text" id="ituemail" placeholder="ITU Email Address" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control Tms-input-field Tms-imput-field-text" id="itupassword" placeholder="Password" />
                        </div>
                        <div className="form-check Set-position-right">
                            <input type="checkbox" className="form-check-input" id="remembermelogin" />
                            <label className="Tms-para4">Remember Me</label>
                        </div>
                        <br /> <br/>
                        <div>
                            <label className="Tms-para3 Tms-primary-color-green Text-center">Forgot Password?</label>
                            <button type="submit" className="Tms-primary-large-button Tms-button-text-color Set-position-right">Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;