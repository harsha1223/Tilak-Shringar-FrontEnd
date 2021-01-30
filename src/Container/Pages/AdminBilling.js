import React from 'react';
import Header from '../../Container/Top Nav Bar/Header';
import Footer from '../Footer/Footer';
import AdminProfile from './AdminProfile';
import './AdminBilling.css'
function emptyOpen() {
    document.querySelector('.adminBillingPopUp').style.display = 'flex';
}
function emptyClose() {
    document.querySelector('.adminBillingPopUp').style.display = 'none';
}

function AdminBilling() {
    return (
        <div>
            <Header />
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
                    <hr id='billingLine2' />
                    <hr id='billingLine3' />
                </div>
                <div className="categoryProductBtn">
                    <button className="categoryBtn">DOWNLOAD LIST</button>
                    <button onClick={emptyOpen} className="productBtn">EMPTY SECTION</button>
                    <p className="productNumber">5000 products sold</p>
                </div>
                <div className="SearchBilling"></div>
                <div className="AdminProductDetails">
                    <hr style={{ border: '0.073vw solid #707070', width: '0', height: '45.388vw', marginLeft: '5.124vw', position: 'absolute', marginTop: '0', }}></hr>
                    <hr style={{ border: '0.073vw solid #707070', width: '0', height: '45.388vw', marginLeft: '14.422vw', position: 'absolute', marginTop: '0', }}></hr>
                    <hr style={{ border: '0.073vw solid #707070', width: '0', height: '45.388vw', marginLeft: '24.963vw', position: 'absolute', marginTop: '0', }}></hr>
                    <hr style={{ border: '0.073vw solid #707070', width: '0', height: '45.388vw', marginLeft: '33.382vw', position: 'absolute', marginTop: '0', }}></hr>
                    <hr style={{ border: '0.073vw solid #707070', width: '0', height: '45.388vw', marginLeft: '41.508vw', position: 'absolute', marginTop: '0', }}></hr>
                    <hr style={{ border: '0.073vw solid #707070', width: '0', height: '45.388vw', marginLeft: '49.414vw', position: 'absolute', marginTop: '0', }}></hr>
                    <hr style={{ border: '0.073vw solid #707070', width: '0', height: '45.388vw', marginLeft: '58.199vw', position: 'absolute', marginTop: '0', }}></hr>
                    <hr style={{ border: '0.073vw solid #707070', width: '0', height: '45.388vw', marginLeft: '67.350vw', position: 'absolute', marginTop: '0', }}></hr>
                    <div className="billingCols">
                        <p className="serialNo">S. No.</p>
                        <p className="orderIdBill">Ordered ID</p>
                        <p className="orderDateBill">Ordered Date</p>
                        <p className="orderStatusBill">Status</p>
                        <p className="orderQuantityBill">Quantities</p>
                        <p className="orderUserType">User Type</p>
                        <p className="orderNameBill">Name</p>
                        <p className="orderTotalAmount">Total Amount</p>
                        <p className="orderPaymentMethod">Payment Method</p>
                    </div>
                    <hr id="AdminLine"></hr>
                    <div className='AdminBillingOuterBox'>
                        <div className="productDetailsAdminBilling">
                            <p className="oneSerial">1.</p>
                            <p className="oneId">444444</p>
                            <p className="oneDate">23 Sep 2020</p>
                            <p className="oneStatus">Delivered</p>
                            <p className="oneQuantity">15</p>
                            <p className="oneUsertype">Customer</p>
                            <p className="oneName">Mohit Gopal</p>
                            <p className="oneTotal">3000.00</p>
                            <p className="onePayment">Net Banking</p>
                        </div>
                        <div className="productDetailsAdminBilling">
                            <p className="oneSerial">1.</p>
                            <p className="oneId">444444</p>
                            <p className="oneDate">23 Sep 2020</p>
                            <p className="oneStatus">Delivered</p>
                            <p className="oneQuantity">15</p>
                            <p className="oneUsertype">Customer</p>
                            <p className="oneName">Mohit Gopal</p>
                            <p className="oneTotal">3000.00</p>
                            <p className="onePayment">Net Banking</p>
                        </div>
                        <div className="productDetailsAdminBilling">
                            <p className="oneSerial">1.</p>
                            <p className="oneId">444444</p>
                            <p className="oneDate">23 Sep 2020</p>
                            <p className="oneStatus">Delivered</p>
                            <p className="oneQuantity">15</p>
                            <p className="oneUsertype">Customer</p>
                            <p className="oneName">Mohit Gopal</p>
                            <p className="oneTotal">3000.00</p>
                            <p className="onePayment">Net Banking</p>
                        </div>
                        <div className="productDetailsAdminBilling">
                            <p className="oneSerial">1.</p>
                            <p className="oneId">444444</p>
                            <p className="oneDate">23 Sep 2020</p>
                            <p className="oneStatus">Delivered</p>
                            <p className="oneQuantity">15</p>
                            <p className="oneUsertype">Customer</p>
                            <p className="oneName">Mohit Gopal</p>
                            <p className="oneTotal">3000.00</p>
                            <p className="onePayment">Net Banking</p>
                        </div>
                        <div className="productDetailsAdminBilling">
                            <p className="oneSerial">1.</p>
                            <p className="oneId">444444</p>
                            <p className="oneDate">23 Sep 2020</p>
                            <p className="oneStatus">Delivered</p>
                            <p className="oneQuantity">15</p>
                            <p className="oneUsertype">Customer</p>
                            <p className="oneName">Mohit Gopal</p>
                            <p className="oneTotal">3000.00</p>
                            <p className="onePayment">Net Banking</p>
                        </div>
                    </div>

                </div>


            </div>
            <hr className='endLine' />

            <Footer />
            <div className="adminBillingPopUp">
                <div className="adminBillingSmallPopUp">
                    <p className="BillingsectionHeading">Billing section</p>
                    <p className="EmptysectionLine">Are you sure you want to empty the section?</p>
                    <div className="billingButtons">
                        <button onClick={emptyClose} className="billingButtonNo"> No</button>
                        <button className="billingButtonYes">Yes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AdminBilling
