import React from 'react'
import '../../App.css'
import './header.css'
import Logo from '../../assets/Logo-preview.png'

const Header = () => {
  return (
    <div>
      <header>
        <div className='container'>
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">
            <a className="navbar-brand" href="/"><img src={Logo} alt="logo"/></a>
            <button className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around" type="button"
              data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent "
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="toggler-icon top-bar"></span>
              <span className="toggler-icon middle-bar"></span>
              <span className="toggler-icon bottom-bar"></span>
            </button>
            <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto ">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">HOME</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">VEHICLES</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">ABOUT</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">CONTACT US</a>
                </li>
              </ul>
               {/* Login button */}
              <div className="login-button">
                <button type='submit' href="/">Login</button>
              </div>
            </div>
          </div>
        </nav>
        </div>
      </header>
      </div>
  )
}

export default Header;