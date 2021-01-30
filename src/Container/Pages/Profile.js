import React from 'react';
import Header from '../../Container/Top Nav Bar/Header';
import Index2 from '../../Container/Side Nav Bar/Index2';
import Footer from '../Footer/Footer';
// import Search from '../Search Button/Search';
import Aboutme from './Aboutme';
import './Profile.css';

function Profile(){
    return(
        <div>
            <Header/>
            <Index2/>
            {/* <div className='shop'>
            < Search />
            </div> */}
            <h2 className='headlineew'>my profile...</h2>
            <div className="Aaboutme">
            <Aboutme/>
            </div>
            <div className="profileBox"> 
                <div className="boxNav">
                    <h6 className="myProfile" ><a href="/myprofile" style={{color:'#4D4D4D'}}>MY PROFILE</a></h6>
                    <h6 className="myOrders" ><a href="/profile" style={{color:'#4D4D4D'}}>MY ORDERS</a></h6>
                    <h6 className="myAddress" ><a href='/address' style={{color:'#4D4D4D'}}>MY ADDRESS</a></h6>
                </div>
                <div className="forline"> 
                    <hr id='line0'></hr>
                    <hr id='line00'></hr>
                    <hr id='line000'></hr>
                </div>
                <div className="orderBox">
                    <div className="orderID">
                        <h6>1</h6>
                        <span className='orderidd'>Order ID:</span>
                        <span className="orderNo">323232DS</span>
                        <span className="closeDetail">Close details</span>
                    </div>
                    <div className="datee">
                        <span className="dateeW">Date:</span>
                        <span className="month">27th August 2020</span>
                    </div>
                    <div className="Amount">
                        <span className="totalAmount">Total Amount:</span>
                        <span className="amountRs">Rs. 1,000/-</span>
                    </div>
                    <div className="Payment">
                        <span className="paymentMode">Payment Mode:</span>
                        <span className="COD">Cash on delivery</span>
                    </div>
                    <div className="statusBox">
                        <span className="Status">Status:</span>
                        <span className="outDelivery">Out for Delivery</span>
                    </div>
                    <div className="itemBox">
                        <span className="items">Items:</span>
                    </div>
                    <hr id='orderLine'></hr>
                    <div className="orderProduct">
                        <div className="orderProductBox">
                             <span className="imageBox"></span>
                             <div className="ppproductName">
                                     <span className="pppproductName">Product Name</span>
                                     <span className="productPricee">Price: 500/-</span>
                                     <span className="productSize">Size: M</span>
                             </div>
                        </div>
                        <div className="orderProductBox2">
                             <span className="imageBox"></span>
                             <div className="ppproductName">
                                     <span className="pppproductName">Product Name</span>
                                     <span className="productPricee">Price: 500/-</span>
                                     <span className="productSize">Size: M</span>
                             </div>
                        </div>
                    </div>
                </div>
                <div className="secondBoxOrder">
                    <div className="secondOrderID">
                        <h6>2</h6>
                        <span className='orderidd'>Order ID:</span>
                        <span className="orderNo">323232DS</span>
                        <span className="closeDetail">See details</span>
                    </div>
                    <div className="datee">
                        <span className="dateeW">Date:</span>
                        <span className="month">27th August 2020</span>
                    </div>
                    <div className="statusBox">
                        <span className="Status">Status:</span>
                        <span className="Delivered">Delivered</span>
                    </div>
                </div>
                <div className="ThirdBoxOrder">
                    <div className="secondOrderID">
                        <h6>3</h6>
                        <span className='orderidd'>Order ID:</span>
                        <span className="orderNo">323232DS</span>
                        <span className="closeDetail">See details</span>
                    </div>
                    <div className="datee">
                        <span className="dateeW">Date:</span>
                        <span className="month">27th August 2020</span>
                    </div>
                    <div className="statusBox">
                        <span className="Status">Status:</span>
                        <span className="Delivered">Delivered</span>
                    </div>
                </div>

            </div>
            <hr id='linee'></hr>
            <div className='cardss'>
                <div className='rcardd1'>
                <span><a href='/shop' style={{color:'#4D4D4D'}}>SHOP</a></span>
                </div>
                <div className='rcard3'>
                <span><a href='/categories' style={{color:'#4D4D4D'}}>CATEGORIES</a></span>
                </div>
                
            </div>
            <Footer/>
        </div>
    )
}
export default Profile
