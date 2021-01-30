import React from 'react';
import Header from '../../Container/Top Nav Bar/Header';
import Footer from '../Footer/Footer';
import AdminProfile from './AdminProfile';
import './AdminReseller.css'

function AdminReseller() {
    return (
        <div>
            <Header></Header>
            <h2 className="heading">my profile...</h2>
            <div className="Aboutttt">
                <AdminProfile />
            </div>
            <div className="adminBox">
                <div className="adminNav">
                    <h6 className="adminProducts"><a href="/Admin" style={{ color: '#4D4D4D' }}>PRODUCTS</a></h6>
                    <h6 className="adminBilling"><a href="/AdminBilling" style={{ color: '#4D4D4D' }}>BILLING</a></h6>
                    <h6 className="adminReseller"><a href="/AdminReseller" style={{ color: '#4D4D4D' }}>RESELLERS</a></h6>
                </div>
                <div className="productLine">
                    <hr id="billingLine1"></hr>
                    <hr id='AdminResellerLine2' />
                    <hr id='AdminResellerLine3' />
                    <hr id='AdminResellerLine4' />
                </div>
                <div className="categoryProductBtn">
                    <button className="categoryBtn">ADD A RESELLER</button>
                    <p className="ResellerNumber">230 resellers</p>
                </div>
                <div className="SearchBilling"></div>
                <div className="AdminProductDetails">
                    <hr style={{ border: '1px solid #707070', width: '0px', height: '620px', marginLeft: '70px', position: 'absolute', marginTop: '0', }}></hr>
                    <hr style={{ border: '1px solid #707070', width: '0px', height: '620px', marginLeft: '182px', position: 'absolute', marginTop: '0', }}></hr>
                    <hr style={{ border: '1px solid #707070', width: '0px', height: '620px', marginLeft: '323px', position: 'absolute', marginTop: '0', }}></hr>
                    <hr style={{ border: '1px solid #707070', width: '0px', height: '620px', marginLeft: '456px', position: 'absolute', marginTop: '0', }}></hr>
                    <hr style={{ border: '1px solid #707070', width: '0px', height: '620px', marginLeft: '649px', position: 'absolute', marginTop: '0', }}></hr>
                    <hr style={{ border: '1px solid #707070', width: '0px', height: '620px', marginLeft: '751px', position: 'absolute', marginTop: '0', }}></hr>
                    <hr style={{ border: '1px solid #707070', width: '0px', height: '620px', marginLeft: '848px', position: 'absolute', marginTop: '0', }}></hr>
                    <hr style={{ border: '1px solid #707070', width: '0px', height: '620px', marginLeft: '973px', position: 'absolute', marginTop: '0', }}></hr>
                    <div className='adminResellerNav'>
                        <p className="serialNo">S. No.</p>
                        <p className="ResellerId">Reseller ID</p>
                        <p className="ResellerName">Reseller Name</p>
                        <p className="ResellerPhoneNumber">Phone Number</p>
                        <p className="ResellerEmail">Email</p>
                        <p className="ResellerDiscount">Discount %</p>
                        <p className="ResellerDuePay">Due Pay</p>
                        <p className="ResellerProductsSold">Products Sold</p>
                    </div>
                    <hr id="AdminLine"></hr>
                    <div className='AdminBillingOuterBox'>
                        <div className='ResellerInnerBox'>
                            <p className="oneSerial">1.</p>
                            <p className="IDdetail">MG2298</p>
                            <p className="NameResellerDetail">abc</p>
                            <p className="PhoneNoResellerDetail">9876543210</p>
                            <p className="emailResellerDetail">abcdmail@gmail.com</p>
                            <p className="dicountResellerDetail">25%</p>
                            <p className="PayResellerDetail">5000.00</p>
                            <p className="soldResellerDetail">45</p>
                            <p className="detailView">See details</p>
                        </div>
                        <div className='ResellerInnerBox'>
                            <p className="oneSerial">1.</p>
                            <p className="IDdetail">MG2298</p>
                            <p className="NameResellerDetail">abc</p>
                            <p className="PhoneNoResellerDetail">9876543210</p>
                            <p className="emailResellerDetail">abcdmail@gmail.com</p>
                            <p className="dicountResellerDetail">25%</p>
                            <p className="PayResellerDetail">5000.00</p>
                            <p className="soldResellerDetail">45</p>
                            <p className="detailView">See details</p>
                        </div>
                        <div className='ResellerInnerBox'>
                            <p className="oneSerial">1.</p>
                            <p className="IDdetail">MG2298</p>
                            <p className="NameResellerDetail">abc</p>
                            <p className="PhoneNoResellerDetail">9876543210</p>
                            <p className="emailResellerDetail">abcdmail@gmail.com</p>
                            <p className="dicountResellerDetail">25%</p>
                            <p className="PayResellerDetail">5000.00</p>
                            <p className="soldResellerDetail">45</p>
                            <p className="detailView">See details</p>
                        </div>
                        <div className='ResellerInnerBox'>
                            <p className="oneSerial">1.</p>
                            <p className="IDdetail">MG2298</p>
                            <p className="NameResellerDetail">abc</p>
                            <p className="PhoneNoResellerDetail">9876543210</p>
                            <p className="emailResellerDetail">abcdmail@gmail.com</p>
                            <p className="dicountResellerDetail">25%</p>
                            <p className="PayResellerDetail">5000.00</p>
                            <p className="soldResellerDetail">45</p>
                            <p className="detailView">See details</p>
                        </div>
                        <div className='ResellerInnerBox'>
                            <p className="oneSerial">1.</p>
                            <p className="IDdetail">MG2298</p>
                            <p className="NameResellerDetail">abc</p>
                            <p className="PhoneNoResellerDetail">9876543210</p>
                            <p className="emailResellerDetail">abcdmail@gmail.com</p>
                            <p className="dicountResellerDetail">25%</p>
                            <p className="PayResellerDetail">5000.00</p>
                            <p className="soldResellerDetail">45</p>
                            <p className="detailView">See details</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='endLine' />
            <Footer />
        </div>
    )
}

export default AdminReseller