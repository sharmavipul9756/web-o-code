import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import c1 from "../../images/c1.svg";
import c2 from "../../images/c2.svg";
import c3 from "../../images/c3.svg";

const MainBlog = () => {
  return (
    <Container>
      <Row xs={1} md={3} className="pb-3">
        <Link
        target="_blank"
          to={{pathname:"https://ethereum.org/en/"}}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Col>
            <Card>
              <Card.Img variant="top" src={c1} height="300rem" />
              <Card.Body>
                <Card.Title>Etherum</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Link>
        <Link
        target="_blank"

          to={{pathname:"https://www.investopedia.com/articles/investing/082614/how-stock-market-works.asp"}}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Col>
            <Card>
              <Card.Img variant="top" src={c2} height="300rem" />
              <Card.Body>
                <Card.Title>Share Market</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Link>
        <Link
        target="_blank"

          to={{pathname:"https://bitcoin.org/en/"}}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Col>
            <Card>
              <Card.Img variant="top" src={c3} height="300rem" />
              <Card.Body>
                <Card.Title>Bitcoin</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Link>
      </Row>
    </Container>
  );
};

export default MainBlog;
