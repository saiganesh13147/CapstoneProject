import React from 'react'
import { Link } from 'react-router-dom'
import VMC from '../components/VMC'

const ContactUsScreen = () => {
  return (
    <div>
      <section className='section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <h3 className='main-heading'>Our Company</h3>
              <div className='underline mx-auto'></div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
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
                  <h6>Description</h6>
                  <div className='underline'></div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
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
                  <h6>Description</h6>
                  <div className='underline'></div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
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
                  <h6>Description</h6>
                  <div className='underline'></div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUsScreen
