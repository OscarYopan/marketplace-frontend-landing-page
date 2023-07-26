import './products.css'
import { data } from "../Data/data"

export const Products = () => {
  const product = data

  return (    
    <div className='product-container'>
      {product.map((product) => {
        const {id, title, price, Image} = product
        return (
          <div key={id} className='product-anounce'>
            <button className='anounce-fav'>
              <i className="fa-solid fa-heart"></i>
            </button>
            <img src={Image} alt={title} />
            <h2>{title}</h2>
            <p>$ {price}</p>
            <button className='anounce-button'>
              <i className="fa-solid fa-cart-shopping"></i>
              Add to Cart
            </button>
          </div>
          )
      })}
    </div>
  )
}
