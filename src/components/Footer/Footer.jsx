import './footer.css'

export const Footer = () => {
  return (
    <div className='footer-container'>

      <div className='sub-foot-container-over'>
        <div className='footer-menu'>
          <ul>
            <li><h3>Games</h3></li>
            <li>Video Games</li>
            <li>Gamepads</li>
            <li>Accessories</li>
            <li>Simulators</li>
          </ul>
          <ul>
            <li><h3>Computer</h3></li>
            <li>Hardware</li>
            <li>Peripherals</li>
            <li>DeskTops</li>
            <li>Notebooks</li>
            <li>Screens</li>
          </ul>
          <ul>
            <li><h3>Eletronic</h3></li>
            <li>Smartphones</li>
            <li>Smartwatchs</li>
            <li>Smart Box</li>
            <li>Tablets</li>
            <li>Accessories</li>
            <li>Drones</li>
            <li>Robotics</li>
          </ul>
          <ul>
            <li><h3>Toys</h3></li>
            <li>Action Figures</li>
            <li>Lego</li>
            <li>Board Games</li>
            <li>Bicycles</li>
            <li>Skateboards</li>
            <li>Rollerblades</li>
            <li>Electric Vehicles</li>
          </ul>
          <ul>
            <li><h3>Home</h3></li>
            <li>Tables</li>
            <li>Chairs</li>
            <li>Cookwares</li>
            <li>Dineer Sets</li>
            <li>kitchenware</li>
            <li>Cutlery</li>
         </ul>
         <ul>
            <li><h3>Pet</h3></li>
            <li>Food</li>
            <li>Beds</li>
            <li>Clothing</li>
            <li>Collars & Leads</li>
            <li>Toys</li>
            <li>Healthcare</li>
            <li>Bowls</li>
          </ul>
        </div>
  
        <div className='contact'>
          <h4>Opening hours:</h4>
          <p>08:00 to 20:00 -</p>
          <p>Monday to Saturday,</p>
          <p>(Except Sunday and holidays)</p>
          <br />
          <h4>SAC:</h4>
          <p>(55) 3232-4444</p>
          <br />
          <h4>Email:</h4>
          <p>shopping@shopping.com</p>
        </div>
      </div>

      <div className='sub-foot-container-down'>
          <div className='pay-container'>
            <ul>
              <li><img src="" alt="" /></li>
              <li><img src="" alt="" /></li>
              <li><img src="" alt="" /></li>
              <li><img src="" alt="" /></li>
            </ul>
          </div>
          <div className='socials'>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-whatsapp"></i>
          </div>
        </div>
    </div>
  )
}
