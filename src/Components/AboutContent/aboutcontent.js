import React from 'react'
import '../../App.css'
import './aboutcontent.css'
import carouselimgone from '../../assets/carousel1.jpg'
import carouselimgtwo from '../../assets/carousel2.jpg'
import carouselimgthree from '../../assets/carousel3.jpg'


const AboutContent = () => {
    return (
        <div>
            <section className="aboutContent">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        {/*  content */}
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="content1" >
                                <h4>What Do You Know About Us</h4>
                                <h3>WHO WE ARE ?</h3><br />
                                <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
                                    sollicitudin,
                                    lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                                    nibh
                                    vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
                                    ornare
                                    odio. Sed non mauris vitae erat consequat auctor eu in elit.</p><br />
                                <div className="sub-content">
                                    <p><i className="fa-solid fa-circle-check" style={{ color: 'green' }}></i> Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                    <p><i className="fa-solid fa-circle-check" style={{ color: 'green' }}></i> Proin tempus sapien non iaculis pretium.</p>
                                </div><br />
                                <div className="buttons">
                                    <button type="submit" className="buttons1"><h6><b>SEE ALL VEHICLES</b></h6></button>
                                    <button type="submit" className="buttons2 "><h6><b>RESERVATION NOW</b></h6></button>
                                </div>
                            </div>
                        </div>
                        {/* Carousel with the 3 images  */}
                        <div className="col-lg-6 col-md-12 col-sm-12" >
                            <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="false">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={carouselimgone}  alt="car1" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={carouselimgtwo}  alt="car2" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={carouselimgthree}  alt="car3" />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" style={{opacity:'1'}} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next"  style={{opacity:'1'}} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutContent;