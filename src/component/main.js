import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import cohete from '../assets/quesos2.jpg'

function Main () {
  return (
    <div>
    <Container id="hero">
      <Row>
          <Col className="text-center">
          <h1><b>Quesos Artesanales</b></h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          </Col>
          <Col>
          <img src={cohete} width="225px" height="350px"></img>
          <img src={cohete} width="225px" height="350px"></img>
          </Col>
          </Row>
    </Container>
    </div>
  )
}

export default Main
