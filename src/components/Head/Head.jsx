import './head.css'
import { Cart } from '../Cart/Cart'
import { useState } from 'react';
import { Favorites } from '../Favorites/Favorites';

export const Head = () => {
  const [cartShow, setCartShow] = useState(false);
  const [favShow, setFavtShow] = useState(false);

  const handleClickCart = () => {
    setCartShow(current => !current);
  };

  const handleClickFav = () => {
    setFavtShow(current => !current);
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

        <div 
          className='favorites' 
          onClick={handleClickFav}
          onMouseEnter={handleClickFav}
          onMouseLeave={handleClickFav}
        >
          <button className='btn'>
            <i className="fa-solid fa-heart"></i>
             {favShow && <Favorites />}
          </button>
        </div>

        <div 
          className='buy-cart' 
          id='buyCart' 
          onMouseEnter={handleClickCart}
          onMouseLeave={handleClickCart}
        >
          <button className='btn'> 
            <i className="fa-solid fa-basket-shopping"></i>
            {cartShow && <Cart />}
          </button>
        </div>
                
      </div>     
      
    </div>
  )
}
