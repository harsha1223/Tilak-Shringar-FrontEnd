import React, { useEffect } from "react";
import Header from "../../Container/Top Nav Bar/Header";
import Index2 from "../../Container/Side Nav Bar/Index2";
import Search from "../Search Button/Search";
import Footer from "../Footer/Footer";
import "./Product.css";
import { TiHeartFullOutline } from "react-icons/ti";
import { BiCartAlt } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import { MdAttachFile } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { GetProductDetailsById } from "../../actions";
import { addToCart } from "../../actions";

var price = 300;
const Product = (props) => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product);
    useEffect(() => {
        const { productId } = props.match.params;
        const payload = {
            params: {
                productId,
            },
        };
        dispatch(GetProductDetailsById(payload));
    }, []);

    return (
        <div>
            <Header />
            <Index2 />
            <div className="shop">
                <Search />
            </div>
            <div className="breadcrumbs">Breadcrumb</div>
            <h3 className="productheadlineee">the product...</h3>
            <div className="productss">
                <div className="productpic">
                    <img
                        className="ppic"
                        src={`http://localhost:2000/public/${product.productDetails.productPictures[0].img}`}
                        alt="HR"
                    ></img>
                    <div className="productSimilar">
                        <div className="leftSlide">
                            <IoIosArrowBack id="Arrow" />
                        </div>
                        <div className="similarImage1"></div>
                        <div className="similarImage2"></div>
                        <div className="similarImage3"></div>
                        <div className="rightSlide">
                            <IoIosArrowForward id="Arrow" />
                        </div>
                    </div>
                </div>
                <div className="productdes">
                    <p>{product.productDetails.name}</p>
                    <div className="icon2">
                        <TiHeartFullOutline id="iconn2" />
                    </div>
                    <div className="icon1">
                        <BiCartAlt
                            id="iconn1"
                            onClick={() => {
                                const {
                                    _id,
                                    name,
                                    price,
                                    description,
                                } = product.productDetails;
                                const img =
                                    product.productDetails.productPictures[0]
                                        .img;
                                dispatch(
                                    addToCart({
                                        _id,
                                        name,
                                        price,
                                        img,
                                        description,
                                    })
                                );
                                props.history.push("/cart");
                            }}
                        />
                    </div>
                    <div style={{ display: "flex" }}>
                        <span className="cost">
                            Rs. {product.productDetails.price}/-
                        </span>
                        <AiFillStar
                            style={{
                                marginTop: "3.29vw",
                                height: "1.830vw",
                                width: "1.684vw",
                                color: "#FFFF00",
                                marginLeft: "1.245vw",
                            }}
                        />
                        <p
                            style={{
                                marginTop: "2.928vw",
                                font:
                                    "normal normal normal 1.757vw/2.562vw Poppins",
                                marginLeft: "0.512vw",
                            }}
                        >
                            0.0
                        </p>
                    </div>
                    <span className="tags">Tags:</span>
                    <p2>choli, white, small,</p2>
                    <div className="descriptions">
                        <span>Description:</span>
                        <p>{product.productDetails.description}</p>
                    </div>
                </div>
            </div>
            <div id="reviewBox">
                <div className="reviewsHeading"> Reviews:</div>
                <div className="fiveStar">
                    <AiFillStar id="starReview" />
                    <AiFillStar id="starReview" />
                    <AiFillStar id="starReview" />
                    <AiFillStar id="starReview" />{" "}
                    <AiFillStar id="starReview" />
                </div>
                <div className="writeBox">
                    <div className="writeReview">
                        <textarea
                            className="commentBox"
                            maxlength="200"
                            placeholder="Choose a rating and start writing a review..."
                        ></textarea>
                        <div className="attachmentLimit">
                            <MdAttachFile
                                style={{
                                    height: "1.611vw",
                                    width: "1.318vw",
                                    opacity: "0.7",
                                    marginLeft: "2.050vw",
                                    cursor: "pointer",
                                }}
                            />
                            <div className="Limit">0/200</div>
                        </div>
                    </div>
                    <button
                        className="sendReview"
                        style={{ borderRadius: "0", color: "white" }}
                    >
                        Send
                    </button>
                </div>
                <div className="showReview">
                    <div className="userNameReview">
                        <div className="roundCircle">
                            <img src="https://images.unsplash.com/photo-1606247193592-53da505571f8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8dG93SlpGc2twR2d8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60"></img>
                        </div>
                        <div className="personName">Person 1</div>
                        <div className="reviewNo">4</div>
                        <AiFillStar
                            style={{
                                height: "1.245vw",
                                width: "1.245vw",
                                marginLeft: "0.293vw",
                                marginTop: "0.220vw",
                                color: "#ffff00",
                            }}
                        />
                    </div>
                    <p className="reviewShow">
                        I find this product pretty amazing and it was all what I
                        was looking for.
                    </p>
                    <div className="reviewImage">
                        <img src="https://images.unsplash.com/photo-1607359390930-206a99777fa1?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
                    </div>
                </div>
                <div className="showReview">
                    <div className="userNameReview">
                        <div className="roundCircle">
                            <img src="https://images.unsplash.com/photo-1606247193592-53da505571f8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8dG93SlpGc2twR2d8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60"></img>
                        </div>
                        <div className="personName">Person 2</div>
                        <div className="reviewNo">5</div>
                        <AiFillStar
                            style={{
                                height: "1.245vw",
                                width: "1.245vw",
                                marginLeft: "0.293vw",
                                marginTop: "0.220vw",
                                color: "#ffff00",
                            }}
                        />
                    </div>
                    <p className="reviewShow">
                        I find this product pretty amazing and it was all what I
                        was looking for.
                    </p>
                    <div className="reviewImage">
                        <img src="https://images.unsplash.com/photo-1607161744726-e96856cfcf4f?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
                    </div>
                </div>
                <div className="showReview">
                    <div className="userNameReview">
                        <div className="roundCircle">
                            <img src="https://images.unsplash.com/photo-1606247193592-53da505571f8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8dG93SlpGc2twR2d8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60"></img>
                        </div>
                        <div className="personName">Person 3</div>
                        <div className="reviewNo">5</div>
                        <AiFillStar
                            style={{
                                height: "1.245vw",
                                width: "1.245vw",
                                marginLeft: "0.293vw",
                                marginTop: "0.220vw",
                                color: "#ffff00",
                            }}
                        />
                    </div>
                    <p className="reviewShow">
                        I find this product pretty amazing and it was all what I
                        was looking for.
                    </p>
                    <div className="reviewImage">
                        <img src="https://images.unsplash.com/photo-1595370773791-ccbbfd695ce5?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
                    </div>
                </div>
                <button className="productLoadMore">Load More</button>
            </div>
            <hr id="linee"></hr>
            <div className="cardss">
                <div className="rcardd1">
                    <span>
                        <a href="/shop" style={{ color: "#4D4D4D" }}>
                            SHOP
                        </a>
                    </span>
                </div>
                <div className="rcard3">
                    <span>
                        <a href="/categories" style={{ color: "#4D4D4D" }}>
                            CATEGORIES
                        </a>
                    </span>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Product;
