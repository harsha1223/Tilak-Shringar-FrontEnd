import React from 'react'
import Header from '../../Container/Top Nav Bar/Header';
import Index2 from '../../Container/Side Nav Bar/Index2';
import Footer from '../Footer/Footer';
import './LoginSign.css';
import {AiOutlineGooglePlus} from "react-icons/ai";

function LoginSign() {
    return (
        <div>
            <Header />
            <Index2 />
            <h2 className='headlineew'>my profile...</h2>
            <div className="loginOuterBox">
                <div className="firstSignBox">
                    <p className="neworalready">Are you new to the website?</p>
                    <p className="filldetailHead">Please fill in the details to order</p>
                    <div className="fillouterBoxborder">
                        <input type="text" placeholder="Full Name"></input>
                    </div>
                    <div className="fillouterBoxborder">
                        <input type="text" placeholder="Email Address"></input>
                    </div>
                    <div className="fillouterBoxborder">
                        <input type="text" placeholder="Password"></input>
                    </div>
                    <div className="fillouterBoxborder">
                        <input type="text" placeholder="Re-enter Password"></input>
                    </div>
                    <p className="orHeading">or</p>
                    <label className="containerCheck">Save this information for easy access
                        <input type="checkbox" ></input>
                        <span className="checkMark"></span>
                    </label>
                    <div className="SignGoogle">
                        <AiOutlineGooglePlus className="googleIcon"/>
                        <p>Sign in with Google</p>
                    </div>
                    <button className="continueButton">CONTINUE</button>
                </div>
                <p className="betweenOR">or</p>
                <div className="firstLoginBox">
                    <p className="neworalready">Already have an account?</p>
                    <p className="filldetailHead">Please login</p>
                    <div className="fillouterBoxborder">
                        <input type="text" placeholder="Email Address"></input>
                    </div>
                    <div className="fillouterBoxborder">
                        <input type="text" placeholder="Password"></input>
                    </div>
                    <p className="forgetPass">Forgot Password?</p>
                    <button className="loginButton">LOGIN</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LoginSign