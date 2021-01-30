import React, { useEffect } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.css'
import Home from './Container/Pages/Home';
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import Shop from './Container/Pages/Shop';
import About from './Container/Pages/About';
import Query from './Container/Pages/Query';
import Categories from './Container/Pages/Categories';
import Cart from './Container/Pages/Cart';
import Product from './Container/Pages/Product';
import Blogs from './Container/Pages/Blogs';
import Profile from './Container/Pages/Profile';
import myProfile from './Container/Pages/myProfile';
import Address from './Container/Pages/Address';
import Admin from './Container/Pages/Admin';
import AdminBilling from './Container/Pages/AdminBilling';
import payment from './Container/Pages/payment';
import orderSummary from './Container/Pages/orderSummary';
import AdminReseller from './Container/Pages/AdminReseller';
import ResellerOrder from './Container/Pages/ResellerOrder';
import ResellerNotification from './Container/Pages/ResellerNotification';
import ResellerEarning from './Container/Pages/ResellerEarning';
import { getInitialData , updateCart } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import result from './Container/Pages/result';
import PrivacyPolicy from './Container/Pages/PrivacyPolicy';
import ShippingPolicy from './Container/Pages/ShippingPolicy';
import Terms from './Container/Pages/Terms';
import LoginSign from './Container/Pages/LoginSign';
import LoginNextPage from './Container/Pages/LoginNextPage';
function App() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)
  
  useEffect(()=>{
    dispatch(getInitialData());
  } , []);
  useEffect(()=> {
    dispatch(updateCart());
  }, []);

  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/shop" component={Shop}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/query" component={Query}></Route>
        <Route path="/categories" component={Categories}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/:productSlug/:productId/p" component={Product}></Route>
        <Route path="/blogs" component={Blogs}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/address" component={Address}></Route>
        <Route path="/myprofile" component={myProfile}></Route>
        <Route path="/admin" component={Admin}></Route>
        <Route path="/adminbilling" component={AdminBilling}></Route>
        <Route path="/adminReseller" component={AdminReseller}></Route>
        <Route path="/payment" component={payment}></Route>
        <Route path="/orderSummary" component={orderSummary}></Route>
        <Route path="/resellerOrder" component={ResellerOrder}></Route>
        <Route path="/resellerEarning" component={ResellerEarning}></Route>
        <Route path="/ResellerNotification" component ={ResellerNotification}></Route>
        <Route path="/result" component={result}></Route>
        <Route path="/privacypolicy" component={PrivacyPolicy}></Route>
        <Route path="/shippingandreturninfo" component={ShippingPolicy}></Route>
        <Route path ="/termsandcondition" component={Terms}></Route>
        <Route path="/loginSign" component={LoginSign}></Route>
        <Route path="/loginNext" component={LoginNextPage}></Route>
        </Switch>
    </div>
    </Router>

  );
}

export default App;