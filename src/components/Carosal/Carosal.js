import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import c1 from '../../images/c1.svg';
import c2 from '../../images/c2.svg';
import c3 from '../../images/c3.svg';
const Carosal = () => {
    return (
        <Container >
        <Carousel variant="dark">
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={c1}
      alt="First slide"
      height="500rem"
      width="100%"
    />
    <Carousel.Caption>
      <h5 className="mark">It is not the man who has too little, but the man who craves more, that is poor</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={c2}
      alt="Second slide"
      height="500rem"
      width="100%"
    />
   <Carousel.Caption>
      <h5 className="mark">Not he who has much is rich, but he who gives much.</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={c3}
      alt="Third slide"
      height="500rem"
      width="100%"
    />
   <Carousel.Caption>
      <h5 className="mark">The person who doesn't know where his next dollar is coming from usually doesn't know where his last dollar went</h5>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Container>
    )
}

export default Carosal
