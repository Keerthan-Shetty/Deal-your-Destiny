import React from 'react'
import '../../App.css'
import './customercare.css'
import emp1 from '../../assets/business-man-curly-cute-handsome-guy-black-suit-red-tie-glasses-with-crossed-hands.jpg'
import emp2 from '../../assets/cheerful-curly-business-girl-wearing-glasses.jpg'
import emp3 from '../../assets/good-looking-business-woman-with-arms-crossed.jpg'
import emp4 from '../../assets/portrait-expressive-young-man-wearing-formal-suit.jpg'


const CustomerCare = () => {
  return (
    <div>
        <section className="customercare">
    <div className="container">
      <div className="customerservice-content text-center">
        <h5>Do You Have Any Question or Anything else</h5>
        <h1><b>COSTUMER SERVICE</b></h1>
      </div>
      <div className="customer-emp">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="employee">
                <img src={emp1} alt="emp-img"/>
                  
                <div className="emp-description">
                  <h2><b>Mathew Johnson</b></h2>
                  <p>Customer Service</p>
                 <hr />
                  <p>Skype: team.member <br />
                    Tel: 555 555-5555 <br />
                    <span style={{color:'red'}}> dreamyourdestiny@gmail.com</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="employee">
                <img src={emp2} alt="emp-img"/>
                <div className="emp-description">
                  <h2><b>Emma Watson</b></h2>
                  <p>Customer Service</p>
                 <hr />
                  <p>Skype: team.member <br />
                    Tel: 555 555-5555 <br />
                    <span style={{color:'red'}}> dreamyourdestiny@gmail.com</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="employee">
                <img src={emp3} alt="emp-img"/>
                <div className="emp-description">
                  <h2><b>Alia Jackhson</b></h2>
                  <p>Customer Service</p>
                 <hr />
                  <p>Skype: team.member <br />
                    Tel: 555 555-5555 <br />
                    <span style={{color:'red'}}> dreamyourdestiny@gmail.com</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="employee">
                <img src={emp4} alt="emp-img" />
                <div className="emp-description">
                  <h2><b>George Fernadus</b></h2>
                  <p>Customer Service</p>
                 <hr />
                  <p>Skype: team.member <br />
                    Tel: 555 555-5555 <br />
                    <span style={{color:'red'}}> dreamyourdestiny@gmail.com</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default CustomerCare;