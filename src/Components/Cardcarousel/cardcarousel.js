import React, { useEffect } from 'react'
import '../../App.css'
import './cardcarousel.css'
import carouselimg1 from '../../assets/aventador-1488548409.jpg'
import carouselimg2 from '../../assets/atf5691.jpeg'
import carouselimg3 from '../../assets/li3020379_u6a0684488_1.jpg'
import carouselimg4 from '../../assets/2018_McLaren_720S_V8_S-A_4.0.jpg'
import carouselimg5 from '../../assets/20210618063502_Roma_tracking_1.jpg'
import carouselimg6 from '../../assets/2022-hyundai-ioniq-5-front-three-quarter.jpg'
import carouselimg7 from '../../assets/01.-The-New-MINI-3-Door-e1622624219932.jpg'
import carouselimg8 from '../../assets/download (49).jpg'
import carouselimg9 from '../../assets/2023-range-rover-05.jpg'

const CardCarousel = () => {
  useEffect(() => {
    // Example of async operation
    const fetchData = async () => {
      try {
        // Simulating an async operation
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log('Data fetched successfully');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className='cardcarousel-slider'>
        <div className='container'>
          <div className='carouselheading text-center'>
            <h2>DREAM YOUR DESTINY OFFERS FOR YOU</h2>
          </div>
          <div className='cardCarousel'>
            <div id="carouselExampleIndicators" class="carousel slide carousel-fade d-none d-sm-block" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className='container'>
                    <div className='row'>
                      <div className='col-md-4'>
                        <div class="car1">
                          <img src={carouselimg1} alt="car" />
                          <br /><br />
                          <div class="car1-body text-center">
                            <h5 style={{ textTransform: 'uppercase' }}>Lamborghini Huracan</h5>
                            <p>Range from $236k</p>
                            <button type="submit"><b>BOOK NOw</b></button>
                          </div><br />
                          <div class="car-specification">
                            <p><i class="fa-solid fa-car"></i> 2023</p>
                            <p><i class="fa-solid fa-gas-pump"></i> Petrol</p>
                            <p><i class="fa-solid fa-gear"></i> Auto</p>
                            <p><i class="fa-solid fa-horse-head"></i> 500hp</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-4'>
                        <div class="car1">
                          <img src={carouselimg2} alt="car" />
                          <br /><br />
                          <div class="car1-body text-center">
                            <h5 style={{ textTransform: 'uppercase' }}>mercedes benz gt 63</h5>
                            <p>Range from $236k</p>
                            <button type="submit"><b>BOOK NOw</b></button>
                          </div><br />
                          <div class="car-specification">
                            <p><i class="fa-solid fa-car"></i> 2023</p>
                            <p><i class="fa-solid fa-gas-pump"></i> Petrol</p>
                            <p><i class="fa-solid fa-gear"></i> Auto</p>
                            <p><i class="fa-solid fa-horse-head"></i> 500hp</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-4'>
                        <div class="car1">
                          <img src={carouselimg3} alt="car" />
                          <br /><br />
                          <div class="car1-body text-center">
                            <h5 style={{ textTransform: 'uppercase' }}>ferrari 488 pista</h5>
                            <p>Range from $236k</p>
                            <button type="submit"><b>BOOK NOw</b></button>
                          </div><br />
                          <div class="car-specification">
                            <p><i class="fa-solid fa-car"></i> 2023</p>
                            <p><i class="fa-solid fa-gas-pump"></i> Petrol</p>
                            <p><i class="fa-solid fa-gear"></i> Auto</p>
                            <p><i class="fa-solid fa-horse-head"></i> 500hp</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className='container'>
                    <div className='row'>
                      <div className='col-md-4'>
                        <div class="car1">
                          <img src={carouselimg4} alt="car" />
                          <br /><br />
                          <div class="car1-body text-center">
                            <h5 style={{ textTransform: 'uppercase' }}>Mclaren 560s orange</h5>
                            <p>Range from $236k</p>
                            <button type="submit"><b>BOOK NOw</b></button>
                          </div><br />
                          <div class="car-specification">
                            <p><i class="fa-solid fa-car"></i> 2023</p>
                            <p><i class="fa-solid fa-gas-pump"></i> Petrol</p>
                            <p><i class="fa-solid fa-gear"></i> Auto</p>
                            <p><i class="fa-solid fa-horse-head"></i> 500hp</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-4'>
                        <div class="car1">
                          <img src={carouselimg5} alt="car" />
                          <br /><br />
                          <div class="car1-body text-center">
                            <h5 style={{ textTransform: 'uppercase' }}>ferrari roma knight</h5>
                            <p>Range from $236k</p>
                            <button type="submit"><b>BOOK NOw</b></button>
                          </div><br />
                          <div class="car-specification">
                            <p><i class="fa-solid fa-car"></i> 2023</p>
                            <p><i class="fa-solid fa-gas-pump"></i> Petrol</p>
                            <p><i class="fa-solid fa-gear"></i> Auto</p>
                            <p><i class="fa-solid fa-horse-head"></i> 500hp</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-4'>
                        <div class="car1">
                          <img src={carouselimg6} alt="car" />
                          <br /><br />
                          <div class="car1-body text-center">
                            <h5 style={{ textTransform: 'uppercase' }}>Hyundai inonq5 ev </h5>
                            <p>Range from $236k</p>
                            <button type="submit"><b>BOOK NOw</b></button>
                          </div><br />
                          <div class="car-specification">
                            <p><i class="fa-solid fa-car"></i> 2023</p>
                            <p><i class="fa-solid fa-gas-pump"></i> Petrol</p>
                            <p><i class="fa-solid fa-gear"></i> Auto</p>
                            <p><i class="fa-solid fa-horse-head"></i> 500hp</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className='container'>
                    <div className='row'>
                      <div className='col-md-4'>
                        <div class="car1">
                          <img src={carouselimg7} alt="car" />
                          <br /><br />
                          <div class="car1-body text-center">
                            <h5 style={{ textTransform: 'uppercase' }}>mini cooper super s</h5>
                            <p>Range from $236k</p>
                            <button type="submit"><b>BOOK NOw</b></button>
                          </div><br />
                          <div class="car-specification">
                            <p><i class="fa-solid fa-car"></i> 2023</p>
                            <p><i class="fa-solid fa-gas-pump"></i> Petrol</p>
                            <p><i class="fa-solid fa-gear"></i> Auto</p>
                            <p><i class="fa-solid fa-horse-head"></i> 500hp</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-4'>
                        <div class="car1">
                          <img src={carouselimg8} alt="car" />
                          <br /><br />
                          <div class="car1-body text-center">
                            <h5 style={{ textTransform: 'uppercase' }}>hyundai i20 n-line</h5>
                            <p>Range from $236k</p>
                            <button type="submit"><b>BOOK NOw</b></button>
                          </div><br />
                          <div class="car-specification">
                            <p><i class="fa-solid fa-car"></i> 2023</p>
                            <p><i class="fa-solid fa-gas-pump"></i> Petrol</p>
                            <p><i class="fa-solid fa-gear"></i> Auto</p>
                            <p><i class="fa-solid fa-horse-head"></i> 500hp</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-4'>
                        <div class="car1">
                          <img src={carouselimg9} alt="car" />
                          <br /><br />
                          <div class="car1-body text-center">
                            <h5 style={{ textTransform: 'uppercase' }}>landrover 2024 autobiography</h5>
                            <p>Range from $236k</p>
                            <button type="submit"><b>BOOK NOw</b></button>
                          </div><br />
                          <div class="car-specification">
                            <p><i class="fa-solid fa-car"></i> 2023</p>
                            <p><i class="fa-solid fa-gas-pump"></i> Petrol</p>
                            <p><i class="fa-solid fa-gear"></i> IMT</p>
                            <p><i class="fa-solid fa-horse-head"></i> 500hp</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='cardCarousel-1'>
            <div id="carouselExampleIndicators" class="carousel slide carousel-fade d-sm-none" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className='container'>
                    <div className='row'>
                      <div className='col-sm-12'>
                        <div class="car1">
                          <img src={carouselimg1} alt="car" />
                          <br /><br />
                          <div class="car1-body text-center">
                            <h5 style={{ textTransform: 'uppercase' }}>Lamborghini Huracan</h5>
                            <p>Range from $236k</p>
                            <button type="submit"><b>BOOK NOw</b></button>
                          </div><br />
                          <div class="car-specification">
                            <p><i class="fa-solid fa-car"></i> 2023</p>
                            <p><i class="fa-solid fa-gas-pump"></i> Petrol</p>
                            <p><i class="fa-solid fa-gear"></i> Auto</p>
                            <p><i class="fa-solid fa-horse-head"></i> 500hp</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item ">
                  <div className='container'>
                    <div className='row'>
                      <div className='col-sm-12'>
                        <div class="car1">
                          <img src={carouselimg2} alt="car" />
                          <br /><br />
                          <div class="car1-body text-center">
                            <h5 style={{ textTransform: 'uppercase' }}>mercedes benz gt 63</h5>
                            <p>Range from $236k</p>
                            <button type="submit"><b>BOOK NOw</b></button>
                          </div><br />
                          <div class="car-specification">
                            <p><i class="fa-solid fa-car"></i> 2023</p>
                            <p><i class="fa-solid fa-gas-pump"></i> Petrol</p>
                            <p><i class="fa-solid fa-gear"></i> Auto</p>
                            <p><i class="fa-solid fa-horse-head"></i> 500hp</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                <div class="carousel-item ">
                  <div className='container'>
                    <div className='row'>
                      <div className='col-sm-12'>
                        <div class="car1">
                          <img src={carouselimg3} alt="car" />
                          <br /><br />
                          <div class="car1-body text-center">
                            <h5 style={{ textTransform: 'uppercase' }}>ferrari 488 pista</h5>
                            <p>Range from $236k</p>
                            <button type="submit"><b>BOOK NOw</b></button>
                          </div><br />
                          <div class="car-specification">
                            <p><i class="fa-solid fa-car"></i> 2023</p>
                            <p><i class="fa-solid fa-gas-pump"></i> Petrol</p>
                            <p><i class="fa-solid fa-gear"></i> Auto</p>
                            <p><i class="fa-solid fa-horse-head"></i> 500hp</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item ">
                  <div className='container'>
                    <div className='row'>
                      <div className='col-sm-12'>
                        <div class="car1">
                          <img src={carouselimg4} alt="car" />
                          <br /><br />
                          <div class="car1-body text-center">
                            <h5 style={{ textTransform: 'uppercase' }}>Mclaren 560s orange </h5>
                            <p>Range from $236k</p>
                            <button type="submit"><b>BOOK NOw</b></button>
                          </div><br />
                          <div class="car-specification">
                            <p><i class="fa-solid fa-car"></i> 2023</p>
                            <p><i class="fa-solid fa-gas-pump"></i> Petrol</p>
                            <p><i class="fa-solid fa-gear"></i> Auto</p>
                            <p><i class="fa-solid fa-horse-head"></i> 500hp</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className='container'>
                    <div className='row'>
                      <div className='col-sm-12'>
                        <div class="car1">
                          <img src={carouselimg8} alt="car" />
                          <br /><br />
                          <div class="car1-body text-center">
                            <h5 style={{ textTransform: 'uppercase' }}>hyundai i20 n-line</h5>
                            <p>Range from $236k</p>
                            <button type="submit"><b>BOOK NOw</b></button>
                          </div><br />
                          <div class="car-specification">
                            <p><i class="fa-solid fa-car"></i> 2023</p>
                            <p><i class="fa-solid fa-gas-pump"></i> Petrol</p>
                            <p><i class="fa-solid fa-gear"></i> Auto</p>
                            <p><i class="fa-solid fa-horse-head"></i> 500hp</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item ">
                  <div className='container'>
                    <div className='row'>
                      <div className='col-sm-12'>
                        <div class="car1">
                          <img src={carouselimg6} alt="car" />
                          <br /><br />
                          <div class="car1-body text-center">
                            <h5 style={{ textTransform: 'uppercase' }}>hyundai ioniq5 ev</h5>
                            <p>Range from $236k</p>
                            <button type="submit"><b>BOOK NOw</b></button>
                          </div><br />
                          <div class="car-specification">
                            <p><i class="fa-solid fa-car"></i> 2023</p>
                            <p><i class="fa-solid fa-gas-pump"></i> Petrol</p>
                            <p><i class="fa-solid fa-gear"></i> Auto</p>
                            <p><i class="fa-solid fa-horse-head"></i> 500hp</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item ">
                  <div className='container'>
                    <div className='row'>
                      <div className='col-sm-12'>
                        <div class="car1">
                          <img src={carouselimg7} alt="car" />
                          <br /><br />
                          <div class="car1-body text-center">
                            <h5 style={{ textTransform: 'uppercase' }}>mini cooper super s</h5>
                            <p>Range from $236k</p>
                            <button type="submit"><b>BOOK NOw</b></button>
                          </div><br />
                          <div class="car-specification">
                            <p><i class="fa-solid fa-car"></i> 2023</p>
                            <p><i class="fa-solid fa-gas-pump"></i> Petrol</p>
                            <p><i class="fa-solid fa-gear"></i> Auto</p>
                            <p><i class="fa-solid fa-horse-head"></i> 500hp</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardCarousel;