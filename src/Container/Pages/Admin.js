import React, { useEffect, useState } from "react";
import Header from "../../Container/Top Nav Bar/Header";
import Footer from "../Footer/Footer";
import AdminProfile from "./AdminProfile";
import { FiMinusCircle } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { AiOutlineCheckSquare } from "react-icons/ai";
import "./Admin.css";
import AdminAddProduct from "./AdminAddProduct";
import AdminAddBlog from "./AdminAddBlog";
import axios from "../../helpers/axios";

function openProduct() {
    document.querySelector(".AdminPopUp").style.display = "flex";
}
function closeProduct() {
    document.querySelector(".AdminPopUp").style.display = "none";
}

function openBlog() {
    document.querySelector(".AdminBlogPopUp").style.display = "flex";
}
function closeBlog() {
    document.querySelector(".AdminBlogPopUp").style.display = "none";
}

function Admin() {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await axios.post("/product/getProducts", {});

            // console.log(response.data);

            if (response.data) {
                setProducts([...products, ...response.data.products]);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleProductDelete = async (id) => {
        try {
            const response = await axios.delete(
                `/product/deleteProductById/${id}`
            );

            const remainingProducts = products.filter((product) => product._id !== id);

            console.log(remainingProducts);

            setProducts(remainingProducts);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    console.log(products);

    return (
        <div>
            <Header />
            <h2 className="heading">my profile...</h2>
            <div className="Aboutttt">
                <AdminProfile />
            </div>
            <div className="adminBox">
                <div className="adminNav">
                    <h6 className="adminProducts">
                        <a href="/Admin" style={{ color: "#4D4D4D" }}>
                            PRODUCTS
                        </a>
                    </h6>
                    <h6 className="adminBilling">
                        <a href="/AdminBilling" style={{ color: "#4D4D4D" }}>
                            BILLING
                        </a>
                    </h6>
                    <h6 className="adminReseller">
                        <a href="/AdminReseller" style={{ color: "#4D4D4D" }}>
                            RESELLERS
                        </a>
                    </h6>
                </div>
                <div className="productLine">
                    <hr id="adminLine2" />
                    <hr id="adminLine" />
                </div>
                <div className="categoryProductBtn">
                    <button className="categoryBtn">ADD CATEOGRY</button>
                    <button className="productBtn" onClick={openProduct}>
                        ADD PRODUCT
                    </button>
                    <button className="productBtn" onClick={openBlog}>
                        ADD BLOG
                    </button>
                    <p className="productNumber">43,240 products in total</p>
                </div>
                <div className="SearchDrop"></div>
                <div className="AdminProductDetails">
                    <hr
                        style={{
                            border: "0.073vw solid #707070",
                            width: "0",
                            height: "45.388vw",
                            marginLeft: "10.469vw",
                            position: "absolute",
                            marginTop: "0",
                        }}
                    ></hr>
                    <hr
                        style={{
                            border: "0.073vw solid #707070",
                            width: "0",
                            height: "45.388vw",
                            marginLeft: "21.816vw",
                            position: "absolute",
                            marginTop: "0",
                        }}
                    ></hr>
                    <hr
                        style={{
                            border: "0.073vw solid #707070",
                            width: "0",
                            height: "45.388vw",
                            marginLeft: "32.211vw",
                            position: "absolute",
                            marginTop: "0",
                        }}
                    ></hr>
                    <hr
                        style={{
                            border: "0.073vw solid #707070",
                            width: "0",
                            height: "45.388vw",
                            marginLeft: "56.296vw",
                            position: "absolute",
                            marginTop: "0",
                        }}
                    ></hr>
                    <hr
                        style={{
                            border: "0.073vw solid #707070",
                            width: "0",
                            height: "45.388vw",
                            marginLeft: "70.278vw",
                            position: "absolute",
                            marginTop: "0",
                        }}
                    ></hr>
                    <div className="AdminProductHeading">
                        <p id="adminCategories">Categories</p>
                        <p id="adminProductID">Product ID</p>
                        <p id="adminQuantity">Quantity</p>
                        <p id="adminName">Name</p>
                        <p id="adminStatus">Status</p>
                    </div>
                    <hr id="AdminLine"></hr>
                    <div className="productDetailOuterBox">
                        {products &&
                            products.map((product) => (
                                <div
                                    className="productDetailsAdmin"
                                    key={product._id}
                                >
                                    <p className="productDresses">
                                        {product.category.name}
                                    </p>
                                    <p className="productIdAdmin">
                                        {product._id.substr(
                                            product._id.length - 5
                                        )}
                                    </p>
                                    <span className="quantityIncDec">
                                        <FiMinusCircle id="minusIcon" />
                                        <p className="quantityNo">
                                            {product.quantity}
                                        </p>
                                        <FiPlusCircle id="plusIcon" />
                                    </span>
                                    <div className="dressName">
                                        {product.name}
                                    </div>
                                    <span className="productStatus">
                                        <AiOutlineCloseSquare id="closeSquare" />
                                        <AiOutlineCheckSquare id="checkSquare" />
                                        <p className="StatusAva">
                                            {product.quantity > 0
                                                ? "Available"
                                                : "Unavailable"}
                                        </p>
                                    </span>
                                    <MdDelete
                                        id="deleteButton"
                                        onClick={() =>
                                            handleProductDelete(product._id)
                                        }
                                    />
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            <hr className="endLine" />
            <Footer />
            <div className="AdminPopUp">
                <AdminAddProduct closeProduct={closeProduct} />
            </div>
            <div className="AdminBlogPopUp">
                <AdminAddBlog closeProduct={closeBlog} />
            </div>
        </div>
    );
}
export default Admin;
