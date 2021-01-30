import React from "react";
import Header from "../../Container/Top Nav Bar/Header";
import Index2 from "../../Container/Side Nav Bar/Index2";
import Search from "../Search Button/Search";
import Footer from "../Footer/Footer";
import "./Shop.css";
import { TiHeartFullOutline } from "react-icons/ti";
import { BiCartAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Shop = (props) => {
    const product = useSelector((state) => state.product);
    const renderProducts = () => {
        return (
            <div
                style={{
                    marginLeft: " 21.474vw",
                    display: " flex",
                    flexWrap: "wrap",
                }}
            >
                {product.products.length > 0 ? (
                    product.products.map((product) => (
                        <div
                            style={{
                                display: "grid",
                                height: "30vw",
                                width: "24.158vw",
                                marginLeft: "1vw",
                                marginBottom: " 3.5vw",
                            }}
                        >
                            <div className="product1">
                                <Link
                                    to={`/${product.slug}/${product._id}/p`}
                                    style={{
                                        display: "block",
                                    }}
                                >
                                    {product.productPictures.map((picture) => (
                                        <img
                                            src={`http://localhost:2000/public/${picture.img}`}
                                            alt="HR"
                                        />
                                    ))}
                                </Link>
                                <div
                                    style={{
                                        position: "absolute",
                                        display: "flex",
                                        left: "18.409vw",
                                        top: "0.366vw",
                                    }}
                                >
                                    <div className="ii2">
                                        <TiHeartFullOutline id="iii2" />
                                    </div>
                                    <div className="ii1">
                                        <BiCartAlt id="iii1" />
                                    </div>
                                </div>
                            </div>
                            <div className="p1info">
                                <Link
                                    to={`/${product.slug}/${product._id}/p`}
                                    style={{
                                        display: "block",
                                    }}
                                >
                                    <p2
                                        style={{ color: "#4D4D4D" }}
                                        id="product1i"
                                    >
                                        {product.name}
                                    </p2>
                                </Link>
                                <p2 id="price1">Rs. {product.price}/-</p2>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="nullProducts">
                        <h2>No Products</h2>
                    </div>
                )}
            </div>
        );
    };
    return (
        <div>
            <Header />
            <Index2 />
            <div className="shop">
                <Search />
            </div>
            <h2 className="shopheadlinee">our products...</h2>
            {renderProducts()}
            {/* <div className='product1'>
                <div className="ii"> 
                    <div className="ii1"><BiCartAlt id="iii1"/></div> 
                    <div className="ii2"><TiHeartFullOutline id="iii2"/></div> 
                </div>
            </div>
            <div className='p1info'>
                <p2 id='product1i'><a href='/product' style={{color:'#4D4D4D'}}>Product Name will be written in maximum of two lines</a></p2>
                <p2 id='price1'>Rs. 300/-</p2>
            </div> */}
            {/* <div className='product2'>
                <div className="ii"> 
                    <div className="ii1"><BiCartAlt id="iii1"/></div> 
                    <div className="ii2"><TiHeartFullOutline id="iii2"/></div> 
                </div>
            </div>
            <div className='p2info'>
                <p2 id='product2i'><a href='/product' style={{color:'#4D4D4D'}}>Product Name will be written in maximum of two lines</a></p2>
                <p2 id='price2'>Rs. 300/-</p2>
            </div>
            <div className='product3'><div className="ii"> 
                    <div className="ii1"><BiCartAlt id="iii1"/></div> 
                    <div className="ii2"><TiHeartFullOutline id="iii2"/></div> 
                </div></div>
            <div className='p3info'>
                <p2 id='product3i'><a href='/product' style={{color:'#4D4D4D'}}>Product Name will be written in maximum of two lines</a></p2>
                <p2 id='price3'>Rs. 300/-</p2>
            </div>
            <div className='product4'><div className="ii"> 
                    <div className="ii1"><BiCartAlt id="iii1"/></div> 
                    <div className="ii2"><TiHeartFullOutline id="iii2"/></div> 
                </div></div>
            <div className='p4info'>
                <p2 id='product4i'><a href='/product' style={{color:'#4D4D4D'}}>Product Name will be written in maximum of two lines</a></p2>
                <p2 id='price4'>Rs. 300/-</p2>
            </div>
            <div className='product5'><div className="ii"> 
                    <div className="ii1"><BiCartAlt id="iii1"/></div> 
                    <div className="ii2"><TiHeartFullOutline id="iii2"/></div> 
                </div></div>
            <div className='p5info'>
                <p2 id='product5i'><a href='/product' style={{color:'#4D4D4D'}}>Product Name will be written in maximum of two lines</a></p2>
                <p2 id='price5'>Rs. 300/-</p2>
            </div>
            <div className='product6'><div className="ii"> 
                    <div className="ii1"><BiCartAlt id="iii1"/></div> 
                    <div className="ii2"><TiHeartFullOutline id="iii2"/></div> 
                </div></div>
            <div className='p6info'>
                <p2 id='product6i'><a href='/product' style={{color:'#4D4D4D'}}>Product Name will be written in maximum of two lines</a></p2>
                <p2 id='price6'>Rs. 300/-</p2>
            </div>
            <div className='product7'><div className="ii"> 
                    <div className="ii1"><BiCartAlt id="iii1"/></div> 
                    <div className="ii2"><TiHeartFullOutline id="iii2"/></div> 
                </div></div>
            <div className='p7info'>
                <p2 id='product7i'><a href='/product' style={{color:'#4D4D4D'}}>Product Name will be written in maximum of two lines</a></p2>
                <p2 id='price7'>Rs. 300/-</p2>
            </div>
            <div className='product8'><div className="ii"> 
                    <div className="ii1"><BiCartAlt id="iii1"/></div> 
                    <div className="ii2"><TiHeartFullOutline id="iii2"/></div> 
                </div></div>
            <div className='p8info'>
                <p2 id='product8i'><a href='/product' style={{color:'#4D4D4D'}}>Product Name will be written in maximum of two lines</a></p2>
                <p2 id='price8'>Rs. 300/-</p2>
            </div>
            <div className='product9'><a href='/product' style={{color:'#4D4D4D'}}/><div className="ii"> 
                    <div className="ii1"><BiCartAlt id="iii1"/></div> 
                    <div className="ii2"><TiHeartFullOutline id="iii2"/></div> 
                </div></div>
            <div className='p9info'>
                <p2 id='product9i'><a href='/product' style={{color:'#4D4D4D'}}>Product Name will be written in maximum of two lines</a></p2>
                <p2 id='price9'>Rs. 300/-</p2>
            </div>

            <button className="shoploadMore">Load More </button> */}
            <div className="cards">
                <div className="rrcard3">
                    <span>
                        <a href="/categories" style={{ color: "#4D4D4D" }}>
                            CATEGORIES
                        </a>
                    </span>
                </div>
                <div className="rrcard4">
                    <span>
                        <a href="/query" style={{ color: "#4D4D4D" }}>
                            QUERY
                        </a>
                    </span>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Shop;
