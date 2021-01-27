import React from 'react'
import { Carousel } from 'react-bootstrap'
import banner1 from '../assets/quesos1.jpeg'
import banner2 from '../assets/quesos2.jpg'
import banner3 from '../assets/quesos3.jpg'

function slideCard () {
  return (
        <Carousel id="banner" indicators={false} controls={false}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      alt="First slide"
      src={banner1}
    />
    {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      alt="First slide"
      src={banner2}
    />

    {/* <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      alt="First slide"
      src={banner3}
    />

    {/* <Carousel.Caption>
      <h3>Con pasion para su paladar</h3>
      <p>Un momento inolvidable cuando esta lejos de casa</p>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel>
  )
}

export default slideCard
