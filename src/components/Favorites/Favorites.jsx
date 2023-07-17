import '../Cart/cart.css'
import fav01 from '../../assets/images/fav_01.jpg'
import fav02 from '../../assets/images/fav_02.jpg'
import cart03 from '../../assets/images/cart_img_03.png'

export const Favorites = () => {
  return (
    <div className="cart-container">
      <li>
        <div className="cart">
          <img src={fav01} alt="" />
        </div>
        <div className="cart-information">
          <h2 className="title">Asus GeForce RTX 4090 ROG Strix OC, 24GB</h2>
          <p className="price">$ 1,989.90</p>
        </div>
      </li>
      <li>
        <div className="cart">
          <img src={fav02} alt="" />
        </div>
        <div className="cart-information">
          <h2 className="title">Chair DT3 Office Helora Red</h2>
          <p className="price">$ 359.90</p>
        </div>
      </li>
      <li>
        <div className="cart">
          <img src={cart03} alt="" />
        </div>
        <div className="cart-information">
          <h2 className="title">Xbox Series X</h2>
          <p className="price">$ 399.90</p>
        </div>
      </li>
      <span><a href="#">See more ...</a></span>
    </div>
  )
}
