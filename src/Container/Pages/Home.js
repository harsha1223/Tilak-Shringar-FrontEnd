import React from "react";
// import Pro from '../New Module/generateProducts'
import Index3 from "../Side Nav Bar/Index3";
import Search from "../Search Button/Search";
import "./Home.css";
import Footer from "../Footer/Footer";
import Header from "../Top Nav Bar/Header";

function Home() {
  return (
    <div>
      <Header />
      <Index3 />
      <Search />
      <h2 id="focus">we focus on...</h2>
      <div className="cardsl1">
        <div className="cardNew"><a href="/result">
          <img src={require('../category_IDOLS.jpg')} alt="HR" />
          <div className="figCaption" style={{ textAlign: "right" }}>
            <h2>IDOLS</h2>
          </div>
        </a>
        </div>
        <div className="card2">
          <img src={require('../gcard1.jpg')} alt="HR" />
          <div className="figCaption" style={{ textAlign: "right" }}>
            <h2>POSHAK</h2>
          </div>
        </div>
        <div className="card3">
          <img src={require('../category_Shringar.jpg')} alt="HR" />
          <div className="figCaption" style={{ textAlign: "right" }}>
            <h2>SHRINGAR</h2>
          </div>
        </div>
      </div>
      <div className="cardsl1">
        <div className="cardNew">
          <img src={require('../category_furniture.jpg')} alt="HR" />
          <div className="figCaption" style={{ textAlign: "right" }}>
            <h2>FURNITURE</h2>
          </div>

        </div>
        <div className="card2">
          <img src={require('../category_decoration.jpg')} alt="HR" />
          <div className="figCaption" style={{ textAlign: "right" }}>
            <h2>DECORATION</h2>
          </div>
        </div>
        <div className="card3">
          <img src={require('../category_poojaitem.jpg')} alt="HR" />
          <div className="figCaption" style={{ textAlign: "right" }}>
            <h2>POOJA ITEM</h2>
          </div>
        </div>
      </div>
      <div className="cardsl1">
        <div className="cardNew">
          <img src={require('../category_handicrafts.jpeg')} alt="HR" />
          <div className="figCaption" style={{ textAlign: "right" }}>
            <h2>HANDICRAFTS</h2>
          </div>

        </div>
        <div className="card2">
          <img src={require('../category_toys.jpg')} alt="HR" />
          <div className="figCaption" style={{ textAlign: "right" }}>
            <h2>TOYS</h2>
          </div>
        </div>
        <div className="card3">
          <img src="https://i.pinimg.com/originals/98/81/02/988102527faa21e51a8ba5a9406bf6dd.jpg" alt="HR" />
          <div className="figCaption" style={{ textAlign: "right" }}>
            <h2> Duppata</h2>
          </div>
        </div>
      </div>

      <p className="work">our work...</p>
      <div className="grid">
        <div className="gridImageBox1">
          <div className="outerBoxGcard1">
            <div className="slider1">
              <img src={require('../slider1 (1).png')}></img>
              <img src={require('../slider1 (2).png')}></img>
              <img src={require('../slider1 (3).png')}></img>
            </div>
          </div>
          <div className="outerBoxgcard2">
            <div className="slider2">
              <img src={require('../slider1 (4).png')}></img>
              <img src={require('../slider1 (5).png')}></img>
              <img src={require('../slider1 (6).png')}></img>
            </div>
          </div>
        </div>
        <div className="outerBoxgcard3">
          <div className="slider3">
            <img src={require('../slider2 (1).png')}></img>
            <img src={require('../slider2 (2).png')}></img>
            <img src={require('../slider2 (3).png')}></img>
          </div>
        </div>
        <div className="gridImageBox3">
          <div className="outerBoxgcard4">
            <div className="slider4">
              <img src={require('../slider3 (1).png')}></img>
              <img src={require('../slider3 (2).png')}></img>
              <img src={require('../slider3 (3).png')}></img>
            </div>
          </div>
          <div className="box3Inside">
            <div className="outerBoxgcard5">
              <div className="slider5">
                <img src={require('../slider1 (7).png')}></img>
                <img src={require('../slider1 (8).png')}></img>
                <img src={require('../slider1 (9).png')}></img>
              </div>
            </div>
            <div className="outerBoxgcard6">
              <div className="slider6">
                <img src={require('../slider1 (10).png')}></img>
                <img src={require('../slider1 (11).png')}></img>
                <img src={require('../slider1 (12).png')}></img>
              </div>
            </div>
          </div>
        </div>
        <div className="outerBoxgcard7">
          <div className="slider7">
            <img src={require('../slider2 (4).png')}></img>
            <img src={require('../slider2 (5).png')}></img>
            <img src={require('../slider2 (6).png')}></img>
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="rcard1">
          <span>
            <a href="/shop" style={{ color: "#4D4D4D" }}>
              SHOP
            </a>
          </span>
        </div>
        <div className="rcard2">
          <span>
            <a href="/about" style={{ color: "#4D4D4D" }}>
              ABOUT
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
        <div className="rcard4">
          <span>
            <a href="/query" style={{ color: "#4D4D4D" }}>
              QUERY
            </a>
          </span>
        </div>
      </div>
      <Footer />
      {/* <div className="popUp ">
                <div className="popUpcontent">
                    <div>
                        <div className="popupBody">
                            
                            <div id="soon">TILAK SHRINGAR COMING SOON!</div>
                        
                        </div>
                    </div>
                </div>
            </div> */}
    </div>
  );
}

export default Home;
