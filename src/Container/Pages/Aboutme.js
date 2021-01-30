import React from 'react'
import './Aboutme.css';
import { GrMail} from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";

function openEdit(){
    document.querySelector('.editProfile1').style.display = 'flex';
}
function closeEdit(){
    document.querySelector('.editProfile1').style.display = 'none';
}

function Aboutme() {
    let name="Vasudeva Krishna";
    let des="Customer";
    let cno="0000000001";
    let email="Vasudeva@Krishna.com"
    let sorc = "https://ii1.pepperfry.com/media/catalog/product/g/o/1100x1210/golden-aluminium-radha-krishna-statue-religious-idol-by-handicrafts-paradise-golden-aluminium-radha--46ymxk.jpg";
    return (
        <div className="headerr">
            <div className="myImage">
                <img src={sorc} alt=""></img>
            </div>
            <div className="MyDescription">
                <h2>{name}</h2>
                <p>{des}</p>
                <div>
                    <FaPhoneAlt style={{marginTop:"0.256vw", opacity:"0.8"}}/><p style={{marginLeft:"1.249vw"}}>{cno}</p>
                </div>
                <div>
                    <GrMail style={{marginTop:"0.35vw" , opacity:"0.8"}}/><p style={{marginLeft:"1.249vw"}}>{email}</p>
                </div>
            </div>
            <button onClick={openEdit} style={{marginTop:"0", marginLeft:"0",outline:"none", height:"1.537vw",color:"#6D6D6D", cursor:"pointer",border:"none",textDecoration:"underline",background:"none"}}>Edit</button>
            <div className="editProfile1">
                <div className="editSmallPop">
                    <div className="editHeading">
                        <div className="editClose" onClick={closeEdit}>+</div>
                        <p className="editPopHeading">Edit Profile</p>
                    </div>
                    <div className="imageDiv">
                         <img src={sorc} className="imageChange" alt=""></img>
                         <p className="textHover">Change</p>
                    </div>
                    <div className="changeDetails">
                        <input type="text" id="editInput1" style={{color:'#2D2D2D'}} placeholder="Full Name" ></input>
                        <input type="text" id="editInput2" style={{color:"#2D2D2D"}} placeholder="Email Address"></input>
                        <input type="text" id="editInput3" style={{color:"#2D2D2D"}} placeholder="Phone Number"></input>
                    </div>
                    <div className="saveExitButton">
                        <button id="cancelEditButton"  onClick={closeEdit}>CANCEL</button>
                        <button id="saveEditButton">SAVE & EXIT</button>

                    </div>
                </div>
                
             
            </div>
        </div>
    )
}

export default Aboutme
