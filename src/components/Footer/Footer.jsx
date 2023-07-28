import './footer.css'

export const Footer = () => {
  return (
    <div className='footer-container'>

      <div className='menu'>
        <ul className="footer-menu">
          <li>Games</li>
          <li>Computer</li>
          <li>Eletronic</li>
          <li>Toys</li>
          <li>Home</li>
          <li>Pet</li>            
        </ul>

        <ul>
          <li>Games</li>
          <li>Video Games</li>
          <li>Gamepads</li>
          <li>Accessories</li>
          <li>Simulators</li>
        </ul>

        <ul>
          <li>Computer</li>
          <li>Hardware</li>
          <li>Peripherals</li>
          <li>DeskTops</li>
          <li>Notebooks</li>
          <li>Screens</li>
        </ul>

        <ul>
          <li>Eletronic</li>
          <li>Smartphones</li>
          <li>Smartwatchs</li>
          <li>Smart Box</li>
          <li>Tablets</li>
          <li>Accessories</li>
          <li>Drones</li>
          <li>Robotics</li>
        </ul>

        <ul>
          <li>Toys</li>
          <li>Action Figures</li>
          <li>Lego</li>
          <li>Board Games</li>
          <li>Bicycles</li>
          <li>Skateboards</li>
          <li>Rollerblades</li>
          <li>Electric Vehicles</li>
        </ul>
      </div>

      <div className='socials'>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-tiktok"></i>
        <i className="fa-brands fa-linkedin"></i>
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
