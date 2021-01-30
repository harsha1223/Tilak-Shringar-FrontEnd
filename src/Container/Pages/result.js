import React from 'react';
import Header from '../../Container/Top Nav Bar/Header';
import Index2 from '../../Container/Side Nav Bar/Index2';
import Search from '../Search Button/Search';
import Footer from '../Footer/Footer';
import './Shop.css';
import { TiHeartFullOutline } from "react-icons/ti";
import { BiCartAlt } from "react-icons/bi";


function result() {
    return (
        <div>
            <Header />
            <Index2 />
            <div className='shop'>
                < Search />
            </div>
            
            <h2 className='shopheadlinee'>our results...</h2>
            <div style={{ width: "75.5vw", height: "30vw", marginTop: "2.489vw", display: "flex", marginLeft: " 22.474vw" }}>
                <div style={{ display: "grid", height: "30vw", width: "24.158vw" }}>
                    <div className='product1'>
                        <img src="https://images.unsplash.com/photo-1599521318903-88a4c9743054?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGlkb2xzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
                        <div style={{ position: "absolute", display: 'flex', left: "18.409vw", top: "0.366vw" }}>
                            <div className="ii2"><TiHeartFullOutline id="iii2" /></div>
                            <div className="ii1"><BiCartAlt id="iii1" /></div>

                        </div>
                    </div>
                    <div className='p1info'>
                        <p2 id='product1i'><a href='/product' style={{ color: '#4D4D4D' }}>Product Name will be written in maximum of two lines</a></p2>
                        <p2 id='price1'>Rs. 300/-</p2>
                    </div></div>
                <div style={{ display: "grid", height: "30vw", width: "24.158vw", marginLeft: "1.5vw" }}>
                    <div className='product2'>
                        <img src="https://images.unsplash.com/photo-1603646315289-df77246f1694?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fGlkb2x8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
                        <div style={{ position: "absolute", display: 'flex', left: "18.409vw", top: "0.366vw" }}>
                            <div className="ii2"><TiHeartFullOutline id="iii2" /></div>
                            <div className="ii1"><BiCartAlt id="iii1" /></div>

                        </div>
                    </div>
                    <div className='p2info'>
                        <p2 id='product2i'><a href='/product' style={{ color: '#4D4D4D' }}>Product Name will be written in maximum of two lines</a></p2>
                        <p2 id='price2'>Rs. 300/-</p2>
                    </div></div>
                <div style={{ display: "grid", height: "30vw", width: "24.158vw", marginLeft: "1.5vw" }}>
                    <div className='product3'>
                        <img src="https://images.unsplash.com/photo-1590228947498-a2a86df7b19d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9yZCUyMGtyaXNobmF8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
                        <div style={{ position: "absolute", display: 'flex', left: "18.409vw", top: "0.366vw" }}>
                            <div className="ii2"><TiHeartFullOutline id="iii2" /></div>
                            <div className="ii1"><BiCartAlt id="iii1" /></div>

                        </div>
                    </div>
                    <div className='p3info'>
                        <p2 id='product3i'><a href='/product' style={{ color: '#4D4D4D' }}>Product Name will be written in maximum of two lines</a></p2>
                        <p2 id='price3'>Rs. 300/-</p2>
                    </div></div>
            </div>
            <div style={{ width: "75.5vw", height: "30vw", marginTop: "2.489vw", display: "flex", marginLeft: " 22.474vw" }}>
                <div style={{ display: "grid", height: "30vw", width: "24.158vw" }}>
                    <div className='product1'>
                        <img src="https://images.unsplash.com/photo-1599521318903-88a4c9743054?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGlkb2xzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
                        <div style={{ position: "absolute", display: 'flex', left: "18.409vw", top: "0.366vw" }}>
                            <div className="ii2"><TiHeartFullOutline id="iii2" /></div>
                            <div className="ii1"><BiCartAlt id="iii1" /></div>

                        </div>
                    </div>
                    <div className='p1info'>
                        <p2 id='product1i'><a href='/product' style={{ color: '#4D4D4D' }}>Product Name will be written in maximum of two lines</a></p2>
                        <p2 id='price1'>Rs. 300/-</p2>
                    </div></div>
                <div style={{ display: "grid", height: "30vw", width: "24.158vw", marginLeft: "1.5vw" }}>
                    <div className='product2'>
                        <img src="https://images.unsplash.com/photo-1603646315289-df77246f1694?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fGlkb2x8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
                        <div style={{ position: "absolute", display: 'flex', left: "18.409vw", top: "0.366vw" }}>
                            <div className="ii2"><TiHeartFullOutline id="iii2" /></div>
                            <div className="ii1"><BiCartAlt id="iii1" /></div>

                        </div>
                    </div>
                    <div className='p2info'>
                        <p2 id='product2i'><a href='/product' style={{ color: '#4D4D4D' }}>Product Name will be written in maximum of two lines</a></p2>
                        <p2 id='price2'>Rs. 300/-</p2>
                    </div></div>
                <div style={{ display: "grid", height: "30vw", width: "24.158vw", marginLeft: "1.5vw" }}>
                    <div className='product3'>
                        <img src="https://images.unsplash.com/photo-1590228947498-a2a86df7b19d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9yZCUyMGtyaXNobmF8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
                        <div style={{ position: "absolute", display: 'flex', left: "18.409vw", top: "0.366vw" }}>
                            <div className="ii2"><TiHeartFullOutline id="iii2" /></div>
                            <div className="ii1"><BiCartAlt id="iii1" /></div>

                        </div>
                    </div>
                    <div className='p3info'>
                        <p2 id='product3i'><a href='/product' style={{ color: '#4D4D4D' }}>Product Name will be written in maximum of two lines</a></p2>
                        <p2 id='price3'>Rs. 300/-</p2>
                    </div></div>
            </div>
            <div style={{ width: "75.5vw", height: "30vw", marginTop: "2.489vw", display: "flex", marginLeft: " 22.474vw" }}>
                <div style={{ display: "grid", height: "30vw", width: "24.158vw" }}>
                    <div className='product1'>
                        <img src="https://images.unsplash.com/photo-1599521318903-88a4c9743054?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGlkb2xzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
                        <div style={{ position: "absolute", display: 'flex', left: "18.409vw", top: "0.366vw" }}>
                            <div className="ii2"><TiHeartFullOutline id="iii2" /></div>
                            <div className="ii1"><BiCartAlt id="iii1" /></div>

                        </div>
                    </div>
                    <div className='p1info'>
                        <p2 id='product1i'><a href='/product' style={{ color: '#4D4D4D' }}>Product Name will be written in maximum of two lines</a></p2>
                        <p2 id='price1'>Rs. 300/-</p2>
                    </div></div>
                <div style={{ display: "grid", height: "30vw", width: "24.158vw", marginLeft: "1.5vw" }}>
                    <div className='product2'>
                        <img src="https://images.unsplash.com/photo-1603646315289-df77246f1694?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fGlkb2x8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
                        <div style={{ position: "absolute", display: 'flex', left: "18.409vw", top: "0.366vw" }}>
                            <div className="ii2"><TiHeartFullOutline id="iii2" /></div>
                            <div className="ii1"><BiCartAlt id="iii1" /></div>

                        </div>
                    </div>
                    <div className='p2info'>
                        <p2 id='product2i'><a href='/product' style={{ color: '#4D4D4D' }}>Product Name will be written in maximum of two lines</a></p2>
                        <p2 id='price2'>Rs. 300/-</p2>
                    </div></div>
                <div style={{ display: "grid", height: "30vw", width: "24.158vw", marginLeft: "1.5vw" }}>
                    <div className='product3'>
                        <img src="https://images.unsplash.com/photo-1590228947498-a2a86df7b19d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9yZCUyMGtyaXNobmF8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
                        <div style={{ position: "absolute", display: 'flex', left: "18.409vw", top: "0.366vw" }}>
                            <div className="ii2"><TiHeartFullOutline id="iii2" /></div>
                            <div className="ii1"><BiCartAlt id="iii1" /></div>

                        </div>
                    </div>
                    <div className='p3info'>
                        <p2 id='product3i'><a href='/product' style={{ color: '#4D4D4D' }}>Product Name will be written in maximum of two lines</a></p2>
                        <p2 id='price3'>Rs. 300/-</p2>
                    </div></div>
            </div>

            <button className="shoploadMore">Load More </button>
            <div className='cards'>
                <div className='rrcard3'>
                    <span><a href="/categories" style={{ color: '#4D4D4D' }}>CATEGORIES</a></span>
                </div>
                <div className='rrcard4'>
                    <span><a href="/query" style={{ color: '#4D4D4D' }}>QUERY</a></span>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default result
