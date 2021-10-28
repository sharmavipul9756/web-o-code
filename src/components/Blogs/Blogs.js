import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import blog1 from "../../images/blog1.svg";
import blog2 from "../../images/blog2.svg";
import blog3 from "../../images/blog3.svg";

const Blogs = () => {
  return (
    <Container>
      <Row xs={1} md={3} className="pb-3">
        <Link
          target="_blank"
          to={{pathname:"https://www.fool.com/investing/how-to-invest/stocks/"}}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Col>
            <Card>
              <Card.Img variant="top" src={blog1} height="300rem" />
              <Card.Body>
                <Card.Title>How to invest</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Link>
        <Link
          target="_blank"
          to={{pathname:"https://www.fintechfutures.com/"}}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Col>
            <Card>
              <Card.Img variant="top" src={blog2} height="300rem" />
              <Card.Body>
                <Card.Title>Fintech the future</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Link>
        <Link
          target="_blank"
          to={{pathname:"https://www.investopedia.com/terms/c/cryptocurrency.asp"}}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Col>
            <Card>
              <Card.Img variant="top" src={blog3} height="300rem" />
              <Card.Body>
                <Card.Title>Cryptocurrencies</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Link>
      </Row>
    </Container>
  );
};

export default Blogs;
