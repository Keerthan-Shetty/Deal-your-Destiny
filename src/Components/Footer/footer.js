import React from 'react'
import './footer.css'
import '../../App.css'
import img1 from '../../assets/01.-The-New-MINI-3-Door-e1622624219932.jpg'
import img2 from '../../assets/2022-hyundai-ioniq-5-front-three-quarter.jpg'
import img3 from '../../assets/2023-range-rover-05.jpg'
import img4 from '../../assets/20210618063502_Roma_tracking_1.jpg'
import img5 from '../../assets/carousel2.jpg'
import img6 from '../../assets/carousel3.jpg'

const Footer = () => {
  return (
    <div>
        <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="about">
              <h4>About</h4><br />
              <p style={{textAlign: "justify"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error beatae quos autem harum debitis officiis facilis libero, tenetur tempora consectetur</p>
              <div className="social-iconbottom d-flex">
                <p className="d-flex justify-content-center align-items-center"><i className="fa-brands fa-facebook-f"></i></p>
                <p className="d-flex justify-content-center align-items-center"><i className="fa-brands fa-instagram"></i></p>
                <p className="d-flex justify-content-center align-items-center"><i className="fa-brands fa-x-twitter"></i></p>
                <p className="d-flex justify-content-center align-items-center"><i className="fa-brands fa-whatsapp"></i></p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="reach">
              <h4>Reach at..</h4><br />
              <p><i className="fa-solid fa-location-dot"></i><span>Location</span></p>
              <p><i className="fa-solid fa-phone"></i><span>Call +01 1234567890</span></p>
              <p><i className="fa-solid fa-envelope"></i><span>dreamyourdestiny@gmail.com</span></p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="subscribe">
              <h4>Subscribe</h4><br />
              <input type="email" id="e-mail" name="e-mail" placeholder="Enter mail" required />
              <div className="subscribe-button">
                <button type="submit">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="Gallery">
            <h4>Gallery</h4><br />
            <div className='img-gallery'>
              <img src={img1} alt='car-img' />
              <img src={img2} alt='car-img' />
              <img src={img3} alt='car-img' />
              <img src={img4} alt='car-img' />
              <img src={img5} alt='car-img' />
              <img src={img6} alt='car-img' />
            </div>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <fotter-bottom>
        <p><i className="fa-regular fa-copyright"></i> 2024 All Rights Reserved By - DreamYourDestiny</p>
      </fotter-bottom>
  </footer>
    </div>
  )
}

export default Footer;


