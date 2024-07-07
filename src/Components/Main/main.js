import React from 'react'
import '../../App.css'
import './main.css'
import porsche from '../../assets/purepng.com-white-porsche-991-turbo-carcarvehicletransportporscheporsche-991-961524654827njj8p.png'

const Main = () => {
  return (
    <div>
        <section className='main'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-12 col-sm-12'>
                        <div className='content-section'>
                            <p className='meet'>Meet your new Destiny</p>
                            <h1>Porsche 911 GT3 RS</h1>
                            <br />
                            <p className='porsche-content'>Porsche 911 GT3 is a 2 seater Petrol car. 911 GT3 has Multi-function Steering Wheel, Power Adjustable Exterior Rear View Mirror, Touch Screen, Automatic Climate Control, Engine Start Stop Button, Anti Lock Braking System, Alloy Wheels, Fog Lights - Front, Fog Lights - Rear, Power Windows Rear.</p>
                            <br />
                            <div className='two-button'>
                                <div className='button1'>
                                    <button type='submit'>More Details</button>
                                </div>
                                <div className='button2'>
                                    <button type='submit'>Test Drive</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12'>
                        <div className='main-img' data-aos="fade-left">
                            <img src={porsche} alt='porschecar' />
                        </div> 
                    </div>
                </div>
            </div>
        </section>
        <section className="submain">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-12 col-md-6 ">
                        <div className="card">
                            <i className="fa-solid fa-gear"></i><br />
                            <h3><b>7/24 CAR SUPPORT</b></h3>
                            <div className="description text-center">
                                <i className="fa-solid fa-gear"></i><br />
                                <h4>7/24 CAR SUPPORT</h4><br />
                                <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4><br />
                                <button type="submit"><b>Read More</b></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div className="card">
                            <i className="fa-regular fa-calendar-days"></i><br />
                            <h3><b>RESERVATION ANY TIME</b></h3>
                            <div className="description text-center">
                                <i className="fa-solid fa-calendar-days"></i><br />
                                <h4>RESERVATION ANY TIME</h4><br />
                                <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4><br />
                                <button type="submit"><b>Read More</b></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-md-6">
                        <div className="card">
                            <i className="fa-solid fa-location-dot"></i><br />
                            <h3><b>LOTS OF LOCATION</b></h3>
                            <div className="description text-center">
                              <i className="fa-solid fa-location-dot"></i><br />
                                <h4>LOTS OF LOCATION</h4><br />
                                <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4><br />
                                <button type="submit"><b>Read More</b></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    </div>
    )
}

export default Main;