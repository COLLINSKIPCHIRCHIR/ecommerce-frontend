import './Navbar.css'
import React, { useState } from 'react' 
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';


export const Navbar = () => {

    const[menu, setMenu] = useState("shop")
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt=''/>
            <p>SHOPPER</p>
        </div>
        <ul className='nav-menu'>
          <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}}to='/'>shop</Link> {menu === "shop"? <hr/>:<></>}</li>
          <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration:'none'}}to='men'>men</Link> {menu === "men"? <hr/>:<></>}</li>
          <li onClick={()=>{setMenu("women")}}> <Link style={{textDecoration:'none'}}to='/women'>women</Link>{menu === "women"? <hr/>:<></>}</li>
          <li onClick={()=>{setMenu("kids")}}> <Link style={{textDecoration:'none'}}to='/kids'>kids</Link>{menu === "kids"? <hr/>:<></>}</li>  
        </ul>
        <div className='nav-login-cart'>
          <Link to='/login'><button>Login</button></Link>
          <Link to='/cart' ><img src={cart_icon} alt=''/> </Link>
          <div className="nav-cart-count">0</div>
        </div>

    </div>
  )
}
