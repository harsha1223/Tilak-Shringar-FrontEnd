import React, { useState } from "react";
import Header from "../../Container/Top Nav Bar/Header";
import Footer from "../Footer/Footer";
import axios from "../../helpers/axios";
import "./payment.css";

const Payment = () => {
    const [paymentMethod, setPaymentMethod] = useState("");
    const [amount, setAmount] = useState(600);
    const [currency, setCurrency] = useState("INR");

    const changePaymentMethod = (e) => {
        const { name } = e.target;

        setPaymentMethod(name);
    };

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };

    const displayRazorpay = async () => {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            console.error("Razorpay SDK failed to load.");
            return;
        }

        const result = await axios.post("/createOrder", {
            paymentMethod,
            currency: "INR",
        });

        if (!result) {
            console.error("Server error.");
            return;
        }

        const { amount, id: order_id, currency } = result.data;

        const options = {
            key: "rzp_test_i7F44AtOei6anE", // Enter the Key ID generated from the Dashboard
            amount: amount.toString(),
            currency: "INR",
            name: "Test Name",
            description: "Test Transaction",
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };

                const result = await axios.post("/addOrder", data);

                alert(result.data.success);
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    const displayPaypal = async () => {
        const result = await axios.post("/createOrder", {
            paymentMethod,
            currency: "INR",
        });

        window.location.href = result.data.redirect_uri;
    }

    return (
        <div>
            <Header />

            <div className="paymentWay">
                <p className="mycartPayment">My cart</p>
                <hr className="mycartPaymentLine"></hr>
                <p className="orderPayment">Order details</p>
                <hr className="orderPaymentLine"></hr>
                <p className="finalPayment">Payment</p>
            </div>

            <p className="paymentHeadline">payment...</p>

            <div className="paymentBoxMain">
                <div className="paymentOption">
                    <p className="headingPaymentOption">
                        Select payment option
                    </p>
                    <div className="boxPaymentOption">
                        <table>
                            <tbody>
                                {/* <tr> */}
                                <tr>
                                    <td>
                                        <input
                                            type="radio"
                                            name="razor"
                                            checked={paymentMethod === "razor"}
                                            id="1"
                                            onChange={changePaymentMethod}
                                            style={{ marginRight: "10px" }}
                                        />{" "}
                                        Pay with Razorpay
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input
                                            type="radio"
                                            name="paypal"
                                            checked={paymentMethod === "paypal"}
                                            id="2"
                                            onChange={changePaymentMethod}
                                            style={{ marginRight: "10px" }}
                                        />{" "}
                                        Pay with PayPal
                                    </td>
                                </tr>
                                {/* </tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="summaryDetail">
                    <div className="priceSummarybox">
                        <p id="priceSummaryHeading">Price Summary</p>
                        <div className="discountPrice">
                            <p id="discountName">Discount:</p>
                            <p id="discountPriceValue">00.00</p>
                        </div>
                        <div className="bagTotalPrice">
                            <p id="bagTotal">Bag Total(in rupees):</p>
                            <p id="bagTotalValue">{amount}</p>
                        </div>
                        <button id="confirmPayButton" onClick={paymentMethod === "razor" ? displayRazorpay : displayPaypal}>
                            Confirm and Pay
                        </button>
                    </div>
                    <div className="userDetails">
                        <div className="userName">
                            <p id="nameHeading">Name:</p>
                            <p id="nameOfPerson">Mohit Gopal</p>
                        </div>
                        <div className="addressDetail">
                            <p id="useraddressDetail">My Address:</p>
                            <p className="addressLineDetail">
                                Address Line 1 Address line 2 Address line 3
                            </p>
                        </div>
                        <div className="landmarkDetails">
                            <p id="landmarkHeading">Landmark:</p>
                            <p id="locationUser">Location</p>
                        </div>
                        <div className="contactDetails">
                            <p id="contactHeading">Contact Number:</p>
                            <p id="phoneNoUser">9876543210</p>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="quend" />
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

export default Payment;
