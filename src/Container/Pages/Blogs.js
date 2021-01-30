import React, { useEffect, useState } from "react";
import Header from "../../Container/Top Nav Bar/Header";
import Index2 from "../../Container/Side Nav Bar/Index2";
import Footer from "../Footer/Footer";
import Search from "../Search Button/Search";
import "./Blog.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import axios from "../../helpers/axios";

function open() {
    document.querySelector(".popUp").style.display = "flex";
}
function close() {
    document.querySelector(".popUp").style.display = "none";
}

function Blogs() {
    let [blogs, setBlogs] = useState([]);
    // let blogs = [];

    const fetchBlogs = async () => {
        try {
            const response = await axios.get("/blog/all");

            if (response.data) {
                console.log("hello");
                setBlogs([...blogs, ...response.data]);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    console.log(blogs);

    return (
        <div>
            <Header />
            <Index2 />
            <div className="shop">
                <Search />
            </div>
            <h2 className="blogHeadline">our blogs...</h2>
            <div className="containerr">
                <div className="containerr1">
                    {blogs &&
                        blogs.map((blog) => (
                            <div className="carrd">
                                <div className="imagee">
                                    <img
                                        src="https://www.wallpapertip.com/wmimgs/44-442882_laddu-gopal-wallpaper.jpg"
                                        alt="HR"
                                    />
                                </div>
                                <div className="contentt">
                                    <h1>{blog.title}</h1>
                                    <p>{blog.content}</p>
                                    <button id="button" onClick={open}>
                                        Read More
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
                <div className="containerr2">
                    <div className="carrd">
                        <div className="imagee">
                            <img
                                src="https://www.wallpapertip.com/wmimgs/44-442882_laddu-gopal-wallpaper.jpg"
                                alt="HR"
                            />
                        </div>
                        <div className="contentt">
                            <h1>Dress | My Blog</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua.
                            </p>
                            <button id="button" onClick={open}>
                                Read More
                            </button>
                        </div>
                    </div>
                    <div className="carrd">
                        <div className="imagee">
                            <img
                                src="https://www.wallpapertip.com/wmimgs/44-442882_laddu-gopal-wallpaper.jpg"
                                alt="HR"
                            />
                        </div>
                        <div className="contentt">
                            <h1>Dress | My Blog</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua.
                            </p>
                            <button id="button" onClick={open}>
                                Read More
                            </button>
                        </div>
                    </div>
                    <div className="carrd">
                        <div className="imagee">
                            <img
                                src="https://www.wallpapertip.com/wmimgs/44-442882_laddu-gopal-wallpaper.jpg"
                                alt="HR"
                            />
                        </div>
                        <div className="contentt">
                            <h1>Dress | My Blog</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua.
                            </p>
                            <button id="button" onClick={open}>
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
                <button className="loadMoreButton">Load More</button>
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
            <div className="popUp">
                <div className="popUpcontent">
                    <div>
                        <div className="headerPopup">
                            <div className="headerTop">
                                <div className="close" onClick={close}>
                                    +
                                </div>
                                <div className="previousNext">
                                    <span className="previousButton">
                                        <IoIosArrowBack id="backArrow" />
                                        <p>Previous</p>
                                    </span>
                                    <div className="blogLogo">LOGO</div>
                                    <span className="nextButton">
                                        <p>Next</p>
                                        <IoIosArrowForward id="backArrow" />
                                    </span>
                                </div>
                            </div>
                            <hr id="blogline"></hr>
                            <div className="articleName">
                                Article Name in one line and then ellipsis...
                            </div>
                            <div className="blogDress">
                                <p id="dressName">Dresses</p>
                                <p id="dressDate">2nd August, 2020 </p>
                            </div>
                        </div>
                        <div className="blogImage1">
                            <img
                                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=840&q=80"
                                alt="RELOAD"
                            ></img>
                        </div>
                        <p className="mainHeading1">
                            Any main heading can be in bold.
                        </p>
                        <p className="paraOne">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita kasd gubergren, no
                            sea takimata sanctus est Lorem ipsum dolor sit
                            amet.Lorem ipsum dolor sit amet, consetetur
                            sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat,
                            sed diam voluptua. At vero eos et accusam et justo
                            duo dolores et ea rebum. Stet clita kasd gubergren,
                            no sea takimata sanctus est Lorem ipsum dolor sit
                            amet. <br />
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita kasd gubergren, no
                            sea takimata sanctus est Lorem ipsum dolor sit
                            amet.Lorem ipsum dolor sit amet, consetetur
                            sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat,
                            sed diam voluptua. At vero eos et accusam et justo
                            duo dolores et ea rebum. Stet clita kasd gubergren,
                            no sea takimata sanctus est Lorem ipsum dolor sit
                            amet. <br />
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita kasd gubergren, no
                            sea takimata sanctus est Lorem ipsum dolor sit
                            amet.Lorem ipsum dolor sit amet, consetetur
                            sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat,
                            sed diam voluptua. At vero eos et accusam et justo
                            duo dolores et ea rebum. Stet clita kasd gubergren,
                            no sea takimata sanctus est Lorem ipsum dolor sit
                            amet. <br />
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita kasd gubergren, no
                            sea takimata sanctus est Lorem ipsum dolor sit
                            amet.Lorem ipsum dolor sit amet, consetetur
                            sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat,
                            sed diam voluptua. At vero eos et accusam et justo
                            duo dolores et ea rebum. Stet clita kasd gubergren,
                            no sea takimata sanctus est Lorem ipsum dolor sit
                            amet.
                        </p>
                        <div className="blogImage2">
                            <img
                                src="https://images.unsplash.com/photo-1526749837599-b4eba9fd855e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                                alt="reload"
                            ></img>
                        </div>
                        <p className="mainHeading2">
                            Any main heading can be in bold.
                        </p>
                        <p className="paraTwo">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita kasd gubergren, no
                            sea takimata sanctus est Lorem ipsum dolor sit
                            amet.Lorem ipsum dolor sit amet, consetetur
                            sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat,
                            sed diam voluptua. At vero eos et accusam et justo
                            duo dolores et ea rebum. Stet clita kasd gubergren,
                            no sea takimata sanctus est Lorem ipsum dolor sit
                            amet. <br />
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita kasd gubergren, no
                            sea takimata sanctus est Lorem ipsum dolor sit
                            amet.Lorem ipsum dolor sit amet, consetetur
                            sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat,
                            sed diam voluptua. At vero eos et accusam et justo
                            duo dolores et ea rebum. Stet clita kasd gubergren,
                            no sea takimata sanctus est Lorem ipsum dolor sit
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
    // }
}
export default Blogs;
