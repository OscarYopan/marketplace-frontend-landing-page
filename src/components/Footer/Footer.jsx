import './footer.css'

export const Footer = () => {
  return (
    <div className='footer-container'>

      <div className='footer-menu'>
        <ul>
          <h3>Games</h3>
          <li>Video Games</li>
          <li>Gamepads</li>
          <li>Accessories</li>
          <li>Simulators</li>
        </ul>

        <ul>
          <h3>Computer</h3>
          <li>Hardware</li>
          <li>Peripherals</li>
          <li>DeskTops</li>
          <li>Notebooks</li>
          <li>Screens</li>
        </ul>

        <ul>
          <h3>Eletronic</h3>
          <li>Smartphones</li>
          <li>Smartwatchs</li>
          <li>Smart Box</li>
          <li>Tablets</li>
          <li>Accessories</li>
          <li>Drones</li>
          <li>Robotics</li>
        </ul>

        <ul>
          <h3>Toys</h3>
          <li>Action Figures</li>
          <li>Lego</li>
          <li>Board Games</li>
          <li>Bicycles</li>
          <li>Skateboards</li>
          <li>Rollerblades</li>
          <li>Electric Vehicles</li>
        </ul>

        <ul>
          <h3>Home</h3>
          <li>Tables</li>
          <li>Chairs</li>
          <li>Cookwares</li>
          <li>Dineer Sets</li>
          <li>kitchenware</li>
          <li>Cutlery</li>
       </ul>

       <ul>
          <h3>Pet</h3>
          <li>Food</li>
          <li>Beds</li>
          <li>Clothing</li>
          <li>Collars & Leads</li>
          <li>Toys</li>
          <li>Healthcare</li>
          <li>Bowls</li>
        </ul>
      </div>

      <div className='socials'>
        <i className="fa-brands fa-facebook"></i>
        {/* <i className="fa-brands fa-youtube"></i> */}
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-tiktok"></i>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-whatsapp"></i>
      </div>

      <div className='contact'>
        <h3>Treatment</h3>
        <br />
        <h4>Opening hours:</h4>
        <p>08:00 to 20:00 -</p>
        <p>Monday to Saturday,</p>
        <p>(Except Sunday and holidays)</p>
        <br />        
        <h4>Address:</h4>
        <p>Rua Roronoa Zoro, 1300 -</p>     
        <p>Alabast/OP - Zip code: 13480-010</p>
        <br />      
        <h4>SAC:</h4>
        <p>(55) 3232-4444</p>
        <br />
        <h4>Email:</h4>
        <p>shopping@shopping.com</p>
      </div>
    </div>
  )
}
