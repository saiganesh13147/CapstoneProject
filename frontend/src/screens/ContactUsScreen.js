import React from 'react'
import { Link } from 'react-router-dom'
import VMC from '../components/VMC'
import MetaTag from '../components/MetaTag'

const ContactUsScreen = () => {
  return (
    <>
      <MetaTag title={'Contact Us'} />
      <div>
        <section className='section'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 text-center'>
                <h3 className='main-heading'>Our Company</h3>
                <div className='underline mx-auto'></div>
                <p>
                Sello Marketplace is for selling and buying goods. 
                The website's foremost goal is to get all the retail/people-sellers to register and upload sellable items with proper images, 
                descriptions, and details about the listed item. Encourages more sellers to advertise their products/ List 
                with the best price on the website. 
                From the user perspective, anyone/buyers can buy the products/items listed on the page. 
                Everyone needs to register on the website to access/buy any item on the website. 
                Users/customers can add the items into the cart and checkout, where sellers can also update their product and 
                offers list at any time after the listing has been published. We are providing a user-friendly payment gateway for the purchases.
                </p>
                <Link to='/contactus' className='btn btn-warning shadow'>
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our Vision, mission and values */}
        <VMC />

        {/* Testimonials */}
        <section className='VMCsection bg-c-light border-top'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 text-center'>
                <h3 className='main-heading'>Testimonials</h3>
                <div className='underline mx-auto'></div>
              </div>
              <div className='col-md-4'>
                <div className='card shadow'>
                  <img
                    src='/images/shravani.jpg'
                    className='img border-bottom'
                    alt='author1'
                  />
                  <hr />
                  <div className='card-body'>
                    <h6>Details</h6>
                    <div className='underline'></div>
                    <p>
                      LinkedIn: <a href='https://www.linkedin.com/in/shravani-male-622029195/'>ShravaniMale-LinkedIn</a><br></br>
                      G-mail: <a href = "mailto: shravanireddymaale@gmail.com">shravanireddymaale@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='card shadow'>
                  <img
                    src='/images/koushik.jpeg'
                    className='img border-bottom'
                    alt='author2'
                  />
                  <hr />
                  <div className='card-body'>
                    <h6>Details</h6>
                    <div className='underline'></div>
                    <p>
                      LinkedIn: <a href='https://www.linkedin.com/in/gururkguduru/'>GuruRamKoushik-LinkedIn</a><br></br>
                      G-mail: <a href = "mailto: gururamkoushik@gmail.com">gururamkoushik@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='card shadow'>
                  <img
                    src='/images/saiganesh.jpg'
                    className='img border-bottom'
                    alt='author3'
                  />
                  <hr />
                  <div className='card-body'>
                    <h6>Details</h6>
                    <div className='underline'></div>
                    <p>
                      LinkedIn: <a href='https://www.linkedin.com/in/sai-ganesh-mokhamatla/'>SaiGanesh-LinkedIn</a><br></br>
                      G-mail: <a href = "mailto: ganeshsai287@gmail.com">ganeshsai287@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ContactUsScreen
