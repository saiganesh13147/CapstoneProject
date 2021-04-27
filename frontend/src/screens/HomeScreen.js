import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Carousel } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import MetaTag from '../components/MetaTag'
import Loader from '../components/Loader'
import { listProducts } from '../actions/productActions'
import VMC from '../components/VMC'

const HomeScreen = () => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)

  const { loading, error, products } = productList
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <>
      <MetaTag />
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='/images/crsl1.png'
            alt='First slide'
            style={{ width: 'auto', height: 'auto' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='/images/crsl2.png'
            alt='Second slide'
          />
        </Carousel.Item>
      </Carousel>
      <VMC />
      <h1>Products </h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default HomeScreen
