import React from 'react'
import Header from '../../Container/Top Nav Bar/Header';
import Index2 from '../../Container/Side Nav Bar/Index2';
import Footer from '../Footer/Footer';
import './LoginNextPage.css'
function LoginNextPage() {
    return (
        <div>
            <Header />
            <Index2 />
            <h2 className='headlineew'>my profile...</h2>
            <div className="LoginNextBox">
                <p className="helloEmail" style={{ marginLeft: "75px", marginTop: " 32px" }}>Hello,<span> mohit.gopal18@gmail.com</span></p>
                <div className="addressConfirmBox">
                    <div className="addressChange">
                        <p className="addressDeliverConfirm">Your delivery address</p>
                        <div>
                        <label className="containerRadio">Green Park, Safdarjung Enclave New Delhi - 110029, Maximum lines 3 to 4
                            <input type="radio" name="selection" value="one" checked="checked"></input>
                            <span className="checkmarkRadio"></span>
                        </label>
                        <label className="containerRadio">Green Park, Safdarjung Enclave New Delhi - 110029, Maximum lines 3 to 4
                            <input type="radio" value="two" name="selection"></input>
                            <span className="checkmarkRadio"></span>
                        </label></div>
                    </div>
                    <div className="phoneChange">
                        <p className="addressDeliverConfirm">Your contact details</p>
                       <div style={{display:"flex",marginTop:"12px"}}>
                           <span style={{width:"14px",height:"14px",background:" #ac06d4",borderRadius:"50%"}}></span>
                           <p className="noEmailfinal">9876543210</p>
                       </div>
                       <p className="changeDetail">Change</p>
                       <p className="DeliverConfirm">You e-mail address</p>
                       <div style={{display:"flex",marginTop:"12px"}}>
                           <span style={{width:"14px",height:"14px",background:" #ac06d4",borderRadius:"50%"}}></span>
                           <p className="noEmailfinal">mohit.gopal18@gmail.com</p>
                           
                       </div>
                       <p className="changeDetail">Change</p>
                    </div>
                </div>
                <button className="saveProceedBtn">SAVE & PROCEED</button>
            </div>
            <Footer/>
        </div>
    )
}

export default LoginNextPage
