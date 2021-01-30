import React from 'react';
import Header from '../../Container/Top Nav Bar/Header';
import Footer from '../Footer/Footer';
import ResellerProfile from './ResellerProfile';
import './ResellerEarning.css'
import { AiOutlineCloseSquare } from "react-icons/ai";
import { AiOutlineCheckSquare } from "react-icons/ai";
function ResellerEarning() {
    return (
        <div>
            <Header></Header>
            <h2 className="heading">my profile...</h2>
            <div className="Aboutttt">
                <ResellerProfile />
            </div>
            <div className="adminBox">
                <div className="adminNav">
                    <h6 className="ResllerOrder"><a href="/ResellerOrder" style={{ color: '#4D4D4D' }}>ORDERS</a></h6>
                    <h6 className="ResellerEarning"><a href="/ResellerEarning" style={{ color: '#4D4D4D' }}>EARNINGS</a></h6>
                    <h6 className="ResellerNotification"><a href="/ResellerNotification" style={{ color: '#4D4D4D' }}>NOTIFICATIONS</a></h6>
                </div>
                <div className="productLine">
                    <hr id="EarningLine1"></hr>
                    <hr id='billingLine2' />
                    <hr id='billingLine3' />
                </div>
                <div className="categoryProductBtn">
                    <p className='CouponCode'>Your earnings being a reseller to Tilak Shringar.</p>
                    <p className="CouponCodeValue">Coupon Code: MAD2020</p>
                </div>
                <div className="SearchDrop"></div>
                <div className='earningOuterBox'>
                    <p className="earningSummaryHeading">SUMMARY</p>
                    <p className="earningOrderComplete">Orders completed till date: 40</p>
                    <p className='TotalEarnings'>Total earnings: Rs 15,000</p>
                    <div className="newEarningOuterBox">
                        <div className="newEarningInnerBox">
                            <p className="CostNewEarning">New earnings: 700.00 </p>
                            <button className="sendRequestButton">SEND REQUEST</button>
                        </div>
                        <AiOutlineCloseSquare id="earningCrossIcon" />
                        <AiOutlineCheckSquare id="earningCheckIcon" />
                    </div>
                    <p className="Previouspayments">Previous payments:</p>
                    <div className="dataRecievedBox">
                        <div className="headingofDataBox">
                            <p className="dataSerial">S. No.</p>
                            <p className="dataRecieved">Date recieved</p>
                            <p className="dataStatus">Status</p>
                            <p className="dataEarningPrice">Earnings</p>
                        </div>
                        <hr style={{ marginLeft: "0", width: '413px', border: "2px solid #707070", marginTop: "23px" }}></hr>
                        <div className="OuterBigofRecievedBox">
                            <div className="detailofRecievedBox">
                                <p className="detailsSerial">1.</p>
                                <p className="detailsRecieved">23 Sep 2020</p>
                                <p className="detailsStatus">Received</p>
                                <p className="detailsEarningPrice">750.00</p>
                            </div>
                            <div className="detailofRecievedBox">
                                <p className="detailsSerial">1.</p>
                                <p className="detailsRecieved">23 Sep 2020</p>
                                <p className="detailsStatus">Received</p>
                                <p className="detailsEarningPrice">750.00</p>
                            </div>
                            <div className="detailofRecievedBox">
                                <p className="detailsSerial">1.</p>
                                <p className="detailsRecieved">23 Sep 2020</p>
                                <p className="detailsStatus">Received</p>
                                <p className="detailsEarningPrice">750.00</p>
                            </div>
                            <div className="detailofRecievedBox">
                                <p className="detailsSerial">1.</p>
                                <p className="detailsRecieved">23 Sep 2020</p>
                                <p className="detailsStatus">Received</p>
                                <p className="detailsEarningPrice">750.00</p>
                            </div>
                            <div className="detailofRecievedBox">
                                <p className="detailsSerial">1.</p>
                                <p className="detailsRecieved">23 Sep 2020</p>
                                <p className="detailsStatus">Received</p>
                                <p className="detailsEarningPrice">750.00</p>
                            </div>
                            <div className="detailofRecievedBox">
                                <p className="detailsSerial">1.</p>
                                <p className="detailsRecieved">23 Sep 2020</p>
                                <p className="detailsStatus">Received</p>
                                <p className="detailsEarningPrice">750.00</p>
                            </div>
                        </div>


                    </div>
                    <p className="RequestAdmin">Kindly request admin for due payments</p>
                </div>
            </div>
            <hr className='endLine' />
            <Footer />
        </div>
    )
}
export default ResellerEarning