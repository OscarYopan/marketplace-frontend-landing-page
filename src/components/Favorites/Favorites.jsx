import '../Cart/cart.css'
import cart01 from '../../assets/images/cart_img_01.png'
import cart02 from '../../assets/images/cart_img_02.png'
import cart03 from '../../assets/images/cart_img_03.png'

export const Favorites = () => {
  return (
    <div>
            <li>
        <div className="cart">
          <img src={cart01} alt="" />
        </div>
        <div className="cart-information">
          <h2 className="title">Xiaomi Stick TV 4K</h2>
          <p className="price">$ 59.90</p>
        </div>
      </li>
      <li>
        <div className="cart">
          <img src={cart02} alt="" />
        </div>
        <div className="cart-information">
          <h2 className="title">Smart Watch Amazfit Bip 3</h2>
          <p className="price">$ 69.90</p>
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
