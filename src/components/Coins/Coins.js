import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Card,Button,Row,Col} from 'react-bootstrap'
const Coins = () => {
  const [coins,setCoins] = useState([{}])
useEffect(()=> {
  axios.get('https://coinranking1.p.rapidapi.com/coins',{
    headers: {
  'x-rapidapi-host': process.env.REACT_APP_KEY,
  'x-rapidapi-key': process.env.REACT_APP_HOST
    }})
      .then(res => setCoins(res.data.data.coins))
  .catch(err => console.log(err))


},[]);
console.log(coins);
    return (
        <>
        <Row xs={1} sm={1} md={3} lg={3} xl={3} xxl={4} className="g-4 p-5">

            {coins.slice(0,(window.location.pathname == '/')? 6 : 50).map((coin)=>{
                return (
                    <Col key={coin.id}>
                    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={coin.iconUrl} height="200rem" width="100%"/>
  <Card.Body>
    <Card.Title>{coin.name}</Card.Title>
    <Card.Text>
        Price : {coin.price}
    </Card.Text>
    <Button variant="primary">Rank : {coin.rank}</Button>
  </Card.Body>
</Card>
</Col>
                )
            })}

        </Row>
        </>
    )
}

export default Coins

