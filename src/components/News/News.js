import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const News = () => {
  const [news, setNews] = useState([{}]);
  useEffect(()=> {
    axios.get('https://mboum-finance.p.rapidapi.com/ne/news',{
      headers: {
        'x-rapidapi-host': process.env.REACT_APP_HOST_NEWS,
        'x-rapidapi-key': process.env.REACT_APP_KEY_NEWS
      }
    })
    .then(res => setNews(res.data))
    .catch(err => console.log(err))

  },[])
  console.log(news);
  return (
    <>
      <Row xs={1} sm={1} md={3} lg={3} xl={3} xxl={4} className="g-4 p-5">
        {news
          .map((newss) => {
            return (
              <Link to={{pathname: `${newss.link}`}} target="_blank" style={{textDecoration: "none", color: "inherit"}}>
                <Col key={newss.id}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title>{newss.title}</Card.Title>
                      <Card.Text>Published date : {newss.pubDate}</Card.Text>
                      <Button variant="primary">Source : {newss.source}</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Link>
            );
          })}
      </Row>
    </>
  );
};

export default News;
