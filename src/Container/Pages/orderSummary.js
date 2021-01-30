import React from "react";
import Header from "../../Container/Top Nav Bar/Header";
import Footer from "../Footer/Footer";
import "./orderSummary.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
function orderSummary() {
        return (
                <div>
                        <Header />
                        <div className="paymentWay">
                                <p className="mycartPayment">My cart</p>
                                <hr className="mycartPaymentLine"></hr>
                                <p className="orderPayment">Order details</p>
                                <hr className="orderSummaryPageLine"></hr>
                                <p className="orderSummaryfinalPayment">Payment</p>
                        </div>

                        <p className="orderSummaryHeadline">order summary...</p>

                        <div className="selectDeliveryBox">
                                <div className="deliveryAddressBox">
                                        <p className="selectDeliveryHeading">Select delivery address</p>
                                        <div className="userDetailAddressBox">
                                                <div className="customerNameBox">
                                                        <p className="customerNameOrderSummary">Name:</p>
                                                        <p className="customerFullName">Mohit Gopal</p>
                                                        <AiOutlineCheckCircle id="addressTickIcon" />
                                                </div>
                                                <div className="customerAddressBox">

                                                </div>
                                                <div className="customerLandmarkBox">
                                                        <p className="customerLandmarkDetail">Landmark:</p>
                                                        <p className="customerLocationDetail">Location</p>
                                                </div>
                                                <div className="phoneNoCustomerBox">
                                                        <p className="customerContactHeading">Contact Number:</p>
                                                        <p className="customerContactNoDetail">9876543210</p>
                                                        <p className="editTheAddress">Edit</p>
                                                </div>
                                        </div>
                                        <button>Add another</button>
                                </div>

                                <div className="priceOrderSummaryBox">
                                        <p id="priceSummaryHeading">Price Summary</p>
                                        <div className="discountPrice">
                                                <p id="discountName">Discount:</p>
                                                <p id="discountPriceValue">00.00</p>
                                        </div>
                                        <div className="bagTotalPrice">
                                                <p id="bagTotal">Bag Total(in rupees):</p>
                                                <p id="bagTotalValue">600.00</p>
                                        </div>
                                        <a href='/payment'><button id="confirmPayButton">Confirm and Pay</button></a>
                                </div>
                        </div>

                        <div className="orderSummaryCartBox">
                                <p className="itemNoHeading">2 Items</p>
                                <div className='givenOrderNo1'>
                                        <div className='imageoftheProduct1'></div>
                                        <div className='detailsoftheProduct1'>
                                                <p className='nameoftheProductGiven'>Product Name will be written in maximum of two lines</p>
                                                <p className='priceoftheGivenProduct'>Rs. 300/-</p>
                                                <div className='tagsOfGivenProduct'>
                                                        <p style={{ color: '#2D2D2D', width: '2.928vw', height: '1.537vw' }}>Tags:</p>
                                                        <p style={{ color: '#ADADAD', width: '22.548vw' }}>choli, white, small</p>
                                                </div>
                                                <div className='descriptionofGivenProduct'>
                                                        <p style={{ color: '#2D2D2D', height: '1.537vw' }}>Description:</p>
                                                        <p style={{ color: '#ADADAD' }}>Lorem ipsum dolor sit amet, consetetur </p>
                                                </div>

                                        </div>
                                </div>
                                <div className='givenOrderNo2'>
                                        <div className='imageoftheProduct1'></div>
                                        <div className='detailsoftheProduct1'>
                                                <p className='nameoftheProductGiven'>Product Name will be written in maximum of two lines</p>
                                                <p className='priceoftheGivenProduct'>Rs. 300/-</p>
                                                <div className='tagsOfGivenProduct'>
                                                        <p style={{ color: '#2D2D2D', width: '2.928vw', height: '1.537vw' }}>Tags:</p>
                                                        <p style={{ color: '#ADADAD', width: '22.548vw' }}>choli, white, small</p>
                                                </div>
                                                <div className='descriptionofGivenProduct'>
                                                        <p style={{ color: '#2D2D2D', height: '1.537vw' }}>Description:</p>
                                                        <p style={{ color: '#ADADAD' }}>Lorem ipsum dolor sit amet, consetetur </p>
                                                </div>

                                        </div>
                                </div>
                        </div>

                        <hr className='quend' />
                        <div className='cardss'>
                                <div className='rcardd1'>
                                        <span><a href='/shop' style={{ color: '#4D4D4D' }}>SHOP</a></span>
                                </div>
                                <div className='rcard3'>
                                        <span><a href='/categories' style={{ color: '#4D4D4D' }}>CATEGORIES</a></span>
                                </div>
                        </div>

                        <Footer />
                </div>
        )
}
export default orderSummary;
