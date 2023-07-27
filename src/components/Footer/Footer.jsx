import './footer.css'

export const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='contact'>
        <h4>Treatment</h4>
        <h5>Opening hours:</h5>
        <p>08:00 to 20:00 -</p>
        <p>Monday to Saturday,</p>
        <p>Brasilia time</p>
        <p>(Except Sunday and holidays)</p>
        <br />        
        <h4>Address:</h4>
        <p>Rua Roronoa Zoro, 1300 -</p>
        <p>9th floor - Center </p>       
        <p>Alabast/OP - Zip code: 13480-010</p>
        <br />      
        <h4>Central SAC:</h4>
        <p>(55) 3232-4444</p>
        <br />
        <h4>Email:</h4>
        <p>shopping@shopping.com</p>
      </div>

      <div className='menu'>
        <ul className="footer-menu">
          <li>Games</li>
          <li>Computer</li>
          <li>Eletronic</li>
          <li>Toys</li>
          <li>Home</li>
          <li>Pet</li>            
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

    </div>
  )
}
