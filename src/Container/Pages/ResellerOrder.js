import React from 'react';
import Header from '../../Container/Top Nav Bar/Header';
import Footer from '../Footer/Footer';
import ResellerProfile from './ResellerProfile';
import './ResellerOrder.css'

function ResellerOrder() {
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
                    <hr id='ResellerOrderLine2' />
                    <hr id='adminLine' />
                </div>
                <div className="categoryProductBtn">
                    <p className='CouponCode'>List of orders who applied your coupon code. For any query contact the Admin.</p>
                    <p className="CouponCodeValue">Coupon Code: MAD2020</p>
                </div>
                <div className="SearchDrop"></div>
                <div className="AdminProductDetails">
                    <hr style={{ border: '1px solid #707070', width: '0px', height: '620px', marginLeft: '70px', position: 'absolute', marginTop: '0', }}></hr>
                    <hr style={{ border: '1px solid #707070', width: '0px', height: '620px', marginLeft: '197px', position: 'absolute', marginTop: '0', }}></hr>
                    <hr style={{ border: '1px solid #707070', width: '0px', height: '620px', marginLeft: '341px', position: 'absolute', marginTop: '0', }}></hr>
                    <hr style={{ border: '1px solid #707070', width: '0px', height: '620px', marginLeft: '456px', position: 'absolute', marginTop: '0', }}></hr>
                    <hr style={{ border: '1px solid #707070', width: '0px', height: '620px', marginLeft: '567px', position: 'absolute', marginTop: '0', }}></hr>
                    <hr style={{ border: '1px solid #707070', width: '0px', height: '620px', marginLeft: '675px', position: 'absolute', marginTop: '0', }}></hr>
                    <hr style={{ border: '1px solid #707070', width: '0px', height: '620px', marginLeft: '795px', position: 'absolute', marginTop: '0', }}></hr>
                    <hr style={{ border: '1px solid #707070', width: '0px', height: '620px', marginLeft: '920px', position: 'absolute', marginTop: '0', }}></hr>
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
        </div>
    )
}

export default ResellerOrder