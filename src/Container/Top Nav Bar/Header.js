import React, {useState} from 'react';
import './Header.css';
import DropDown from './DropDown';
import { BsPersonPlus } from "react-icons/bs";
import { BiCopyright} from 'react-icons/bi';
import styled from 'styled-components';

const Div = styled.div`
margin-left:0;
@media (max-width:700px){
    .hamburg{
        margin-left:-4.571vw;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
        transition: transform 0.3s ease-in-out;
    }
`;
const StyledBurger = styled.div`
    margin-top:1.529vw;
    width:4.671vw;
    height:3.829vw;
    top:${({ open }) => open ? '1.429vw' : '2.929vw'};
    left:${({ open }) => open ? '2.143vw' : '5.286vw'};
    justify-content:space-around;
    flex-flow: column nowrap;
    display :none;
    @media (max-width:700px){
        display:flex;
        position: sticky;
        position:-webkit-sticky;
        z-index: 1042;
        
        
    }
    div
    {  z-index:1041;
        background-color: ${({ open }) => open ? '#7D7D7D' : '#ccc'};
        border-radius:1.429vw;
        transform-origin: 0vw;
        transition: all 0.3s linear;
        &:nth-child(1)
{
            transform: ${({ open }) => open ? `rotate(45deg)` : `rotate(0)`};
}    
        &:nth-child(2)
{
            transform: ${({ open }) => open ? `translateX(100%)` : `translateX(0)`};
            opacity: ${({ open }) => open ? 0 :  1};
}    
        &:nth-child(3)
{
            transform: ${({ open }) => open ? `rotate(-45deg)` : `rotate(0)`};
}    
}
    `;


var quant=12;

const Header = () =>{
    const [open , setOpen] = useState(false);
    return (
            <>
            <div className="topheadd"></div>
            <Div className="navbar" open = {open} >
                <StyledBurger open={open} onClick={() =>setOpen(!open)}>
                    <div id="hamburgline1"/>
                    <div id="hamburgline2"/>
                    <div id="hamburgline3"/>
                </StyledBurger>
                <div className='hamburg' >
                    <a href='/' style={{color:'#4D4D4D'}}><ul className="left"><img src={require("../newLogo.png")} alt='HR'/></ul></a>
                    <hr id='navlineee'></hr>
                    <ul className="mid">
                        <li><a href='/shop' style={{color:'#4D4D4D'}}>Shop</a></li>
                        <li><a href='/about' style={{color:'#4D4D4D'}}>About</a></li>
                        <li><a href="/categories" style={{color:'#4D4D4D'}}>Categories</a></li>
                        <li><a href='/query' style={{color:'#4D4D4D'}}>Query</a></li>
                        <li><a href='/blogs' style={{color:'#4D4D4D'}}>Blogs</a></li>
                    </ul>
                    <div className='foot'>Tilak Shringar | <BiCopyright/> &nbsp; All rights reserved 2020</div>
                </div>
                <div className="right">
                <div><DropDown /></div>
                <div className="cart">
                    <p className="cartname">< a href='/cart' style={{color:'#4D4D4D'}}>Cart</a></p>
                    <p className="quantity" style={{color:"white"}}><a href='/cart' style={{color:'white'}}>{quant}</a></p>
                </div>
                <div className="user">
                    <img src={require("./Profile.png")}></img>
                    {/* <BsPersonPlus className="icon"/> */}
                </div>
                </div>
            </ Div>
</>        
    )
}

export default Header;
