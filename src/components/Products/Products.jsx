import './products.css'
import { data } from "../Data/data"

export const Products = () => {
  const product = data

  return (    
    <div className='product-container'>
      {product.map((product) => {
        const {id, title, price, description, category, Image} = product
        return (
          <div key={id} className='product-anounce'>
            <img src={Image} alt={title} />
            <h2>{title}</h2>
            <span>$ {price}</span>
            <p>{description}</p>
            <p>{category}</p>
          </div>
          )
      })}
    </div>
  )
}
