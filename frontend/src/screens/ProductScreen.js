import React, { useState, useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState({})

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`api/products/${match.params.id}`)

      setProduct(data)
    }
    fetchProduct()
  }, [])
  return (
    <div>
      <LinkContainer to='/'>
        <Button>Go Back</Button>
      </LinkContainer>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid></Image>
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3> {product.name} </h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              ></Rating>
            </ListGroup.Item>
            <ListGroup.Item>Price : ${product.price}</ListGroup.Item>
            <ListGroup.Item>Price : ${product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  )
}

export default ProductScreen
