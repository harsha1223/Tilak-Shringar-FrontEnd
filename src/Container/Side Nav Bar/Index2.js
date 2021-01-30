import React, { useEffect } from 'react';
import './Index2.css'
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineClockCircle} from "react-icons/ai"
import { GrMail} from "react-icons/gr";
import {useSelector,useDispatch} from 'react-redux';
import {getAllCategory} from '../../actions'


const Index2= (props) => {
    const category = useSelector(state => state.category)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllCategory());
    },[]);
    const renderCategories = (categories) => {
        let myCategories = [];
        for (let category of categories){
          myCategories.push(
            <li key = {category.name}>
             {
               category.parentId?<a href={category.slug}>{category.name}</a>:
               <span>{category.name}</span>
             }
            </li>
          )
        }
        return myCategories;
      }
      const renderNull = () => {
        let nullCategory = [];
        nullCategory.push(
        <div className="nulllCategories">
            <h2>No</h2>
            <h2>Categories</h2>
        </div>
        )
        return nullCategory;
    }
    return (
            <div className="sidenavbar">
                
                <div className="sidetop">CATEGORY -
                    {category.categories.length>0? renderCategories(category.categories):renderNull()}
                </div>
                <div className="sidemid">
                        <span>Experience the best online shopping experience for Krishna Dresses, Laddu Gopal Dresses, Radha Krishna Dresses, Pooja Ghar Items Laddu Gopal Accessories, and Ornaments like Mukut, Bansuri, and etcetera. 
                         We are the ultimate destination for God Dresses with a wide range of Lord Krishna related merchandise. As with evolving fashion, we need to redefine the style of our beloved Makhan Chor with our Treasure-trove of trendy products.

                        </span>
                </div>
                {/* <div className="sidebottom1">
                    <p>For any query: </p>
                    <p> <FaPhoneAlt/>  Contact : 9876543210 </p>
                    <p><AiOutlineClockCircle/>  Working Hours: 8AM-8PM </p>
                    <p><GrMail/> Email Address - 
                        Examplewebsite@gmail.com</p>
                </div> */}
            </div>        
    )
}

export default Index2


