import React from 'react'
import Header from "../../Container/Top Nav Bar/Header";
import Footer from "../Footer/Footer";
import Index2 from '../../Container/Side Nav Bar/Index2';
import Search from '../Search Button/Search';
import './ShippingPolicy.css';


function ShippingPolicy() {
    return (
        <div>
            <Header />
            <Index2 />
            <div className='shop'>
                <Search />
            </div>
            <div className="outerboxshipping">
                <p className="HeadingShipping">Shipping & Return</p>
                <p className="returnheading">Returns policy</p>
                <p className="content1Shipping">Currently, due to COVID situation, we are not accepting any return or exchange. But in typical cases, our team check the condition of an item in the returned package. Then further step is taken for its acceptance and rejection.</p>
                <p className="returnheading">Shipping Policy</p>
                <p className="content2Shipping">We at Tilakshringar, know how important it is to receive your purchased products in the most satisfactory condition and on time. So we use an extended network of courier services to deliver your products to your given address as early as possible.<br></br>
                <b style={{fontWeight:'bold'}}>·</b> &nbsp;&nbsp;    The primary constraint is the location; the product is delivered to your site in 3-5 workings days after it has been reportedly dispatched from our warehouse.<br></br>
                <b style={{fontWeight:'bold'}}>·</b> &nbsp;&nbsp;    Though free shipping is available on all products, it is subjected to the minimum order value—a Non-Refundable charge of Rs. X is applied to all orders below Rs. y.<br></br>
                <b style={{fontWeight:'bold'}}>·</b> &nbsp;&nbsp;    In case of partial cancellation by the customer, if the total cart value goes below the free shipping amount, tilakshringar.com reserves all the right to recover the shipping charges of Rs. x.<br></br>
                <b style={{fontWeight:'bold'}}>·</b> &nbsp;&nbsp;    The entire order amount, including any extra delivery charges, will be refunded to the applicant if the order is cancelled or lost in transit under our supervision.</p>
                <p className="returnheading">Cancellation Policy</p>
                <p className="content3Shipping">Tilakshringar.com reserves all the rights to cancel any of the orders without any explanation for doing so, according to the circumstances where the requirement could not be completed. The company will make sure that the communication of cancellation of an order or any refund will be made through email in an appropriate time. While, in case of partial cancellation by the customer, if total cart value goes below the definite free shipping amount, tilakshringar.com reserves all the rights to recover the total shipping charges of Rs. X.</p>
                <p className="returnheading">Payment Policy</p>
                <p className="content4Shipping">As per the Payment policy of the company:<br></br> <b style={{fontWeight:'bold'}}>·</b> &nbsp;&nbsp;  To make the COD Service available, all items in the cart should be applicable for COD.<br></br> <b style={{fontWeight:'bold'}}>·</b> &nbsp;&nbsp; COD applies to the minimum sale value of Rs. A and a maximum of Rs. B.<br></br> <b style={{fontWeight:'bold'}}>·</b> &nbsp;&nbsp; Pin code provided for Cash on Delivery plays a more significant role as it should be in the list of serviceable area. If not, any online mode for payment is needed to be used.<br></br> <b style={{fontWeight:'bold'}}>·</b> &nbsp;&nbsp; You are not eligible to open the package without making the payment at the time of delivery.<br></br> <b style={{fontWeight:'bold'}}>·</b> &nbsp;&nbsp; Also, if the package is already open, you must not accept the order. <br></br> <b style={{fontWeight:'bold'}}>·</b> &nbsp;&nbsp;Credit cards or debit cards are not accepted in Cash on Delivery.
</p>
                <p className="returnheading">Using Promo Codes/Coupons</p>
                <p className="content5Shipping">We may share information (personal) with our other corporate entities for different purposes:<br></br> <b style={{fontWeight:'bold'}}>·</b> &nbsp;&nbsp;correlation between related or multiple accounts to prevent abuse of our services <br></br> <b style={{fontWeight:'bold'}}>·</b> &nbsp;&nbsp; We identify your IP address and use it to help our technical team diagnose problems with our server and to administer on our website. Your IP address is also utilized to assist us in identifying you and broad demographic information related to you. <br></br> <b style={{fontWeight:'bold'}}>·</b> &nbsp;&nbsp;We use third-party service providers to serve advertisement on our behalf across the Internet; they may collect anonymous information about your visits to our website, and your interaction with our products and services to target advertisements for goods and services. No information that is personally identifiable is collected or used in this process.</p>
                <p className="returnheading">images & representations of products/services</p>
                <p className="content6Shipping">  <b style={{fontWeight:'bold'}}>·</b> &nbsp;&nbsp; Product Images are indicative, not accurate. <br></br> <b style={{fontWeight:'bold'}}>·</b> &nbsp;&nbsp; Actual product may differ from the image. Please refer the product specification for the product.</p>
                <p className="returnheading">for queries/comments</p>
                <p className="content7Shipping">Please send us your questions or comments to  tilakshringar2@gmail.com.</p>
            </div>
            <hr className='quend'/>
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

export default ShippingPolicy
