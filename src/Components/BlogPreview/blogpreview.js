import React from 'react'
import '../../App.css'
import '../Main/main.css'
import lambo from '../../assets/2021-Lamborghini-Huracan-STO.png'
import Audi from '../../assets/Audi-R8.png'

const BlogPreview = () => {
  return (
    <div>
        <div className='blogpreview'>
            <div className='blog1'>
                <div className='container'>
                    <div className='row d-flex justify-content-center align-items-center'>
                        <div className='blog-heading text-center'>
                            <h2>Flagship <span style={{color:'rgb(150, 7, 160)'}}>Models</span></h2>
                            <p>Chase your vehicle with your destiny</p>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <div className='car-img'>
                                <img src={lambo} alt='carimage' />
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <div className='blog-content'>
                                <h2>Lamborghini Huracan STO</h2>
                                <br />
                                <p style={{textAlign:'justify'}}>A super-sports car created with a singular purpose, the Huracán STO delivers all the feel and technology of a genuine race car in a road-legal model.
                                Lamborghini’s years-long motorsport know-how, intensified by a winning heritage, is concentrated in the new Huracán STO. Its extreme aerodynamics, track-honed handling dynamics, lightweight contents and the highest-performing V10 engine to date come together, ready to trigger all the emotions of the racetrack in your everyday life.</p>
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
                    </div>
                </div>
            </div>
            <div className='blog2'>
                <div className='container'>
                    <div className='row d-flex justify-content-center align-items-center'>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <div className='blog-content'>
                                <h2>Audi R8</h2>
                                <br />
                                <p style={{textAlign:'justify'}}>Audi R8 Features: The R8 is equipped with a host of features such as six airbags, carbon- ceramic brakes, LED headlamps, front and rear parking sensors, reverse parking camera, cruise control, a 12.3-inch Audi Cockpit digital instrument cluster, electrically-adjustable and heated front seats, automatic climate control system, etc.</p>
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
                            <div className='car-img'>
                                <img src={Audi} alt='carimage' />
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogPreview