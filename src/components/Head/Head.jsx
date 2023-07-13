import './head.css'
import { Cart } from '../Cart/Cart'
import { useState } from 'react';

export const Head = () => {
  const [cartShow, setCartShow] = useState(false);

  const handleClick = () => {
    setCartShow(current => !current);
  };

  return (
    <div className="head-container">
      <div className='logo'>
        <a href="#">Shopping</a>
      </div>
      
      <div className='search-box'>
        <input type="text" name="search" id="search" placeholder='Search...'/>
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      <div className='account-container'>
        <div className='account'>
          <button className='btn'>
            <i className="fa-solid fa-user"></i>
          </button>
        </div>

        <div className='favorites'>
          <button className='btn'>
            <i className="fa-solid fa-heart"></i>
          </button>
        </div>

        <div className='buy-cart' id='buyCart' onClick={handleClick}>
          <button className='btn'> 
            <i className="fa-solid fa-basket-shopping"></i>
          </button>
        </div>
        
      </div>      
      {cartShow && <Cart />}    
    </div>
  )
}
