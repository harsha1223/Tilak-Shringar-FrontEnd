import React from 'react'
import Header from "../../Container/Top Nav Bar/Header";
import Footer from "../Footer/Footer";
import Index2 from '../../Container/Side Nav Bar/Index2';
import Search from '../Search Button/Search';
import './PrivacyPolicy.css'

function PrivacyPolicy() {
    return (
        <div>
            <Header />
            <Index2 />
            <div className='shop'>
                <Search />
            </div>
            <div className="outerboxprivacy">
                <p className="privacyHeading">privacy policy</p>
                <p className="content1privacy">The Tilak Shringar Privacy Policy aims at safeguarding the confidentiality of our customers and site visitors ("you", "your", "yours"). We with this declare that your details will not be disclosed to any third-party unless it is required to provide you with a service. Users must go through the below mentioned Privacy Policy points thoroughly. From our website, you acknowledge reading and understanding all the policies, and also agree to be bound by the terms stated below.</p>
                <p className="consentHeading">your consent</p>
                <p className="content1privacy">Your details (name, location, email address, debit card/credit card, UPI information) will not be sold or rented by us to any third party without your consent. However, we reserve our right to communicate your personal information to any third-party that makes a legally-compliant request for disclosure of information. However, we are not responsible for any action of a third party that may have directed you to our website.</p>
                <p className="cmHeading">communication and marketing</p>
                <p className="content2privacy">If you become a registered member of Tilakshringar, you will receive promotional emails about the latest offers and discounts from our website. You may also observe receiving such communication if you have logged in even as a guest user.<br></br> Also, please note that in case you don't wish to receive such emails, you have the full in control to opt-out of these communications any time. You can easily unsubscribe clicking on unsubscribe link in the mail.</p>
                <p className="cookiesHeading">cookies</p>
                <p className="content1privacy">We use cookies and other technologies to store certain types of information every time you visit on any page of our website. This enables us to determine which part of this website are most appropriate to cater to your professional needs and to provide advertising banners to you. You can choose to decline cookies, but this would also lead to disabling the scope of experiencing the full feature of the website. Thus, we recommend that you leave them turned on.</p>
                <p className="protectingHeading">protecting your security</p>
                <p className="content3privacy">It is to be noted that we might share your details with fraud prevention or credit reference agency for conducting any anti-fraud checks. Please note that in this whole process no credit check is performed and your credit rating remains unaffected.disclosures of your information</p>
                <p className="disclosureHeading">disclosures of your information</p>
                <p className="content4privacy">We may share information (personal) with our other corporate entities for different purposes: <br></br> <b style={{fontWeight:'bold'}}>·</b>&nbsp;&nbsp; correlation between related or multiple accounts to prevent abuse of our services <br></br><b style={{fontWeight:'bold'}}>·</b> &nbsp;&nbsp;We identify your IP address and use it to help our technical team diagnose problems with our server and to administer on our website. Your IP address is also utilized to assist us in identifying you and broad demographic information related to you.<br></br><b style={{fontWeight:'bold'}}>·</b>&nbsp;&nbsp; We use third-party service providers to serve advertisement on our behalf across the Internet; they may collect anonymous information about your visits to our website, and your interaction with our products and services to target advertisements for goods and services. No information that is personally identifiable is collected or used in this process.</p>
                <p className="usageHeading">usage of demographic and profile data</p>
                <p className="content5privacy">We utilize your personal information for multiple purposes, such as:<br></br> <b style={{fontWeight:'bold'}}>·</b>&nbsp;&nbsp;  providing the services, you requested <br></br><b style={{fontWeight:'bold'}}>·</b>&nbsp;&nbsp;  for resolving disputes & troubleshoot problems <br></br><b style={{fontWeight:'bold'}}>·</b>&nbsp;&nbsp; for promoting a safe service <br></br><b style={{fontWeight:'bold'}}>·</b>&nbsp;&nbsp; measuring consumer interest for our products and services <br></br><b style={{fontWeight:'bold'}}>·</b>&nbsp;&nbsp; informing you about online and offline offers, products, services, and updates <br></br><b style={{fontWeight:'bold'}}>·</b>&nbsp;&nbsp; requesting optional online surveys <br></br>Please note that we will provide you with the ability to opt-out of such uses.</p>
                <p className="thirdHeading">third-party sites</p>
                <p className="content6privacy">You might be linked to our website from our advertisers, network partners or any other third party. We with this declare that we are not responsible for the 'Privacy Policies' and 'Terms & Conditions' of third party sites. You should read their policies carefully before sharing any of your details to them. While you access and use our services, we collect information such as, but not limited to - phone number, email address, device make-details and IP address. We may disclose to third-party services certain information to ensure fraud prevention and to check out experience. Please refer to the third-party website's privacy policy for more details.</p>
                <p className="disclosureHeading">changes to privacy policy</p>
                <p className="content1privacy">We may change this set of Privacy Policy at any time. The revised Privacy Policy will be effective immediately after posting them on the website. Hence, it is the sole responsibility of each user to review the website and Privacy Policy time to time to learn about any new revisions to this Privacy Policy. For any queries or support, we invite you to get in touch with our customer support team or mail us at tilakshringar2@gmail.com.</p>
                
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
            {/* <Footer/> */}
        </div>
    )
}

export default PrivacyPolicy