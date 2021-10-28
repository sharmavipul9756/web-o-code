import React from 'react'
import { Card,Col, Container, Row } from 'react-bootstrap'
import blog1 from '../../images/blog1.svg';
import blog2 from '../../images/blog2.svg';
import blog3 from '../../images/blog3.svg';

const MainBlog = () => {
    return (
        <Container>
        <Row xs={1} md={3} className="pb-3">
        <Col>
  <Card>
    <Card.Img variant="top" src={blog1} height="300rem" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
    </Card.Body>
  </Card>
</Col>

<Col>
  <Card>
    <Card.Img variant="top" src={blog2} height="300rem"/>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
    </Card.Body>
  </Card>
  </Col>
  <Col>
  <Card>
    <Card.Img variant="top" src={blog3} height="300rem" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
    </Card.Body>
  </Card>
</Col>
</Row>
</Container>
    )
}

export default MainBlog
