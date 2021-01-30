import React from 'react';
import Header from '../../Container/Top Nav Bar/Header';
import Index2 from '../../Container/Side Nav Bar/Index2';
import Footer from '../Footer/Footer';
import './Query.css';

function Query() {
    return (
        <div>
            <Header/>
            <Index2/>
            <h2 className='queryheadlineeee'>ask here...</h2>
            <div className="textView">Loving our products or have a question to ask,write to us and we will revert in less than 24 hours. We accept all kinds of questions and customer reviews.You can also write a mail to the given email addresses separately.</div>
            <div className='details'>
                <div className='userdetails'>
                    <p>Fill in the details</p>
                    <input type='text'  placeholder='Full Name*'/>
                    <hr/>
                    <input type='text' placeholder='Email*'/>
                    <hr/>
                    <input type='text' placeholder='Order Number'/>
                    <hr/>
                    <input type='text' placeholder='Country'/>
                    <hr/>
                    <input type='text' placeholder='Subject'/>
                    <hr/>
                    <div style={{display:"flex",height:"3vw"}}>
                    <input type='text' placeholder='Message' maxLength="200"/><p style={{color:"#8d8d8d",marginTop: "0.9vw"}}>0/200</p></div>
                    <hr/>
                    <button className='send'>Send</button>
                </div>
                <div className='emailadd'>
                    <p>Queries related to Purchase:</p>
                    <span>tilakshringar2@gmail.com</span>
                    <p>Queries related to business:</p>
                    <span>tilakshringar2@gmail.com</span>
                </div>
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

export default Query
