import React from 'react';
import Header from '../../Container/Top Nav Bar/Header';
import Footer from '../Footer/Footer';
import ResellerProfile from './ResellerProfile';
import { FiMinusCircle } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { AiOutlineCheckSquare } from "react-icons/ai";
import './ResellerNotification.css'

function ResellerNotification() {
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
                    <hr id="billingLine1"></hr>
                    <hr id='ResellerNotificationLine2' />
                    <hr id='AdminResellerLine3' />
                    <hr id='AdminResellerLine4' />
                </div>
                <div className="categoryProductBtn">
                    <p className='CouponCode'>Get latest updates on new arrivals from the admin.</p>
                    <p className="CouponCodeValue">Coupon Code: MAD2020</p>
                </div>
                <div className="SearchDrop"></div>
                <div className="AdminProductDetails">
                    <hr style={{ border: '1px solid #707070', width: '0px', height: '620px', marginLeft: '143px', position: 'absolute', marginTop: '0', }}></hr>
                    <hr style={{ border: '1px solid #707070', width: '0px', height: '620px', marginLeft: '298px', position: 'absolute', marginTop: '0', }}></hr>
                    <hr style={{ border: '1px solid #707070', width: '0px', height: '620px', marginLeft: '440px', position: 'absolute', marginTop: '0', }}></hr>
                    <hr style={{ border: '1px solid #707070', width: '0px', height: '620px', marginLeft: '769px', position: 'absolute', marginTop: '0', }}></hr>
                    <hr style={{ border: '1px solid #707070', width: '0px', height: '620px', marginLeft: '960px', position: 'absolute', marginTop: '0', }}></hr>
                    <div className="AdminProductHeading">
                        <p id="adminCategories">Categories</p>
                        <p id="adminProductID">Product ID</p>
                        <p id="adminQuantity">Quantity</p>
                        <p id="adminName">Name</p>
                        <p id="adminStatus">Status</p>
                    </div>
                    <hr id="AdminLine"></hr>
                    <div className='productDetailOuterBox'>
                        <div className="productDetailsReseller">
                            <p className="productDresses">Dresses</p>
                            <p className="productIdAdmin">LGD124</p>
                            <span className="quantityIncDec">
                                <FiMinusCircle id="minusIcon" />
                                <p className="quantityNo">15</p>
                                <FiPlusCircle id="plusIcon" />
                            </span>
                            <div className="dressName">Laddu Gopal dress</div>
                            <div className="productStatus">
                                <AiOutlineCloseSquare id="closeSquare" />
                                <AiOutlineCheckSquare id="checkSquare" />
                                <p className="StatusAva">Available</p>
                            </div>
                            <div className="ResellerViewProduct">View Product</div>
                        </div>
                        <div className="productDetailsReseller">
                            <p className="productDresses">Dresses</p>
                            <p className="productIdAdmin">LGD124</p>
                            <span className="quantityIncDec">
                                <FiMinusCircle id="minusIcon" />
                                <p className="quantityNo">15</p>
                                <FiPlusCircle id="plusIcon" />
                            </span>
                            <div className="dressName">Laddu Gopal dress</div>
                            <div className="productStatus">
                                <AiOutlineCloseSquare id="closeSquare" />
                                <AiOutlineCheckSquare id="checkSquare" />
                                <p className="StatusAva">Available</p>
                            </div>
                            <div className="ResellerViewProduct">View Product</div>
                        </div>
                        <div className="productDetailsReseller">
                            <p className="productDresses">Dresses</p>
                            <p className="productIdAdmin">LGD124</p>
                            <span className="quantityIncDec">
                                <FiMinusCircle id="minusIcon" />
                                <p className="quantityNo">15</p>
                                <FiPlusCircle id="plusIcon" />
                            </span>
                            <div className="dressName">Laddu Gopal dress</div>
                            <div className="productStatus">
                                <AiOutlineCloseSquare id="closeSquare" />
                                <AiOutlineCheckSquare id="checkSquare" />
                                <p className="StatusAva">Available</p>
                            </div>
                            <div className="ResellerViewProduct">View Product</div>
                        </div>
                        <div className="productDetailsReseller">
                            <p className="productDresses">Dresses</p>
                            <p className="productIdAdmin">LGD124</p>
                            <span className="quantityIncDec">
                                <FiMinusCircle id="minusIcon" />
                                <p className="quantityNo">15</p>
                                <FiPlusCircle id="plusIcon" />
                            </span>
                            <div className="dressName">Laddu Gopal dress</div>
                            <div className="productStatus">
                                <AiOutlineCloseSquare id="closeSquare" />
                                <AiOutlineCheckSquare id="checkSquare" />
                                <p className="StatusAva">Available</p>
                            </div>
                            <div className="ResellerViewProduct">View Product</div>
                        </div>
                        <div className="productDetailsReseller">
                            <p className="productDresses">Dresses</p>
                            <p className="productIdAdmin">LGD124</p>
                            <span className="quantityIncDec">
                                <FiMinusCircle id="minusIcon" />
                                <p className="quantityNo">15</p>
                                <FiPlusCircle id="plusIcon" />
                            </span>
                            <div className="dressName">Laddu Gopal dress</div>
                            <div className="productStatus">
                                <AiOutlineCloseSquare id="closeSquare" />
                                <AiOutlineCheckSquare id="checkSquare" />
                                <p className="StatusAva">Available</p>
                            </div>
                            <div className="ResellerViewProduct">View Product</div>
                        </div>
                        <div className="productDetailsReseller">
                            <p className="productDresses">Dresses</p>
                            <p className="productIdAdmin">LGD124</p>
                            <span className="quantityIncDec">
                                <FiMinusCircle id="minusIcon" />
                                <p className="quantityNo">15</p>
                                <FiPlusCircle id="plusIcon" />
                            </span>
                            <div className="dressName">Laddu Gopal dress</div>
                            <div className="productStatus">
                                <AiOutlineCloseSquare id="closeSquare" />
                                <AiOutlineCheckSquare id="checkSquare" />
                                <p className="StatusAva">Available</p>
                            </div>
                            <div className="ResellerViewProduct">View Product</div>
                        </div>

                    </div>

                </div>
            </div>
            <hr className='endLine' />
            <Footer />
        </div>
    )
}
export default ResellerNotification