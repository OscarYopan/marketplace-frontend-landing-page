import './footer.css'

import payPix from '../../assets/images/pay_pix.png'
import payMastercard from '../../assets/images/pay_mastercard.png'
import payBoleto from '../../assets/images/pay_boleto.png'
import payVisa from '../../assets/images/pay_visa.png'
import payElo from '../../assets/images/pay_elo.png'

import socialFacebook from '../../assets/images/social_facebook.png'
import socialInstagram from '../../assets/images/social_instagram.png'
import socialTwitter from '../../assets/images/social_twitter.png'
import socialTiktok from '../../assets/images/social_tiktok.png'
import socialWhatsapp from '../../assets/images/social_whatsapp.png'

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
          <div className='socials' id='pay-container'>
            <img src={payPix} alt="Pix Link" title='Pix'/>
            <img src={payMastercard} alt="Mastercard Link" title='Mastercard'/>
            <img src={payBoleto} alt="Boleto Link" title='Boleto'/>
            <img src={payVisa} alt="Visa Link" title='Visa'/>
            <img src={payElo} alt="Elo Link" title='Elo'/>
          </div>

          <div className='socials' id='socials'>
            <a><img src={socialFacebook} alt="Facebook Icon" title='Facebook'/></a>
            <a><img src={socialInstagram} alt="Facebook Icon" title='Instagram'/></a>
            <a><img src={socialTwitter} alt="Facebook Icon" title='Twitter'/></a>
            <a><img src={socialTiktok} alt="Facebook Icon" title='Tik Tok'/></a>
            <a><img src={socialWhatsapp} alt="Facebook Icon" title='Whatsapp'/></a>
          </div>
        </div>
    </div>
  )
}
