import { NavLink, useSearchParams } from 'react-router';
import {useNavigate} from 'react-router';
import {useState} from 'react';
import './header.css';
import CartIcon from '../assets/images/icons/cart-icon.png';
import SearchIcon from '../assets/images/icons/search-icon.png';

export function Header({cart}) {
  let totalQuantity = 0;
  cart.forEach((cartItem)=>{
    totalQuantity+=cartItem.quantity
  })
  const [searchParams]=useSearchParams();
  const search = searchParams.get('search');
  const [text, setText] = useState(search || '')
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-link">
          <img className="logo"
            src="images/logo-white.png" />
          <img className="mobile-logo"
            src="images/mobile-logo-white.png" />
        </NavLink>
      </div>

      <div className="middle-section">
        <input className="search-bar" 
        type="text" 
        value={text}
        placeholder="Search" 
        onChange={(event)=>{
          setText(event.target.value);
        }}/>

        <button className="search-button">
          <img className="search-icon"
           src={SearchIcon}
           onClick={()=>{
            navigate(`/?search=${text}`)
            console.log(text)}} />
        </button>
      </div>

      <div className="right-section">
        <NavLink className="orders-link header-link" to="/orders">

          <span className="orders-text">Orders</span>
        </NavLink>

        <NavLink className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src={CartIcon} />
          <div className="cart-quantity">{totalQuantity}</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div>
  )
}