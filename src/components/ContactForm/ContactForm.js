import React from 'react'
import { Card,Button, Container,Form } from 'react-bootstrap'

const ContactForm = () => {
    return (
        <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#212529" fill-opacity="1" d="M0,0L9.2,48C18.5,96,37,192,55,229.3C73.8,267,92,245,111,234.7C129.2,224,148,224,166,224C184.6,224,203,224,222,202.7C240,181,258,139,277,144C295.4,149,314,203,332,234.7C350.8,267,369,277,388,234.7C406.2,192,425,96,443,101.3C461.5,107,480,213,498,240C516.9,267,535,213,554,176C572.3,139,591,117,609,117.3C627.7,117,646,139,665,133.3C683.1,128,702,96,720,90.7C738.5,85,757,107,775,144C793.8,181,812,235,831,240C849.2,245,868,203,886,181.3C904.6,160,923,160,942,144C960,128,978,96,997,106.7C1015.4,117,1034,171,1052,186.7C1070.8,203,1089,181,1108,176C1126.2,171,1145,181,1163,170.7C1181.5,160,1200,128,1218,106.7C1236.9,85,1255,75,1274,69.3C1292.3,64,1311,64,1329,69.3C1347.7,75,1366,85,1385,128C1403.1,171,1422,245,1431,282.7L1440,320L1440,0L1430.8,0C1421.5,0,1403,0,1385,0C1366.2,0,1348,0,1329,0C1310.8,0,1292,0,1274,0C1255.4,0,1237,0,1218,0C1200,0,1182,0,1163,0C1144.6,0,1126,0,1108,0C1089.2,0,1071,0,1052,0C1033.8,0,1015,0,997,0C978.5,0,960,0,942,0C923.1,0,905,0,886,0C867.7,0,849,0,831,0C812.3,0,794,0,775,0C756.9,0,738,0,720,0C701.5,0,683,0,665,0C646.2,0,628,0,609,0C590.8,0,572,0,554,0C535.4,0,517,0,498,0C480,0,462,0,443,0C424.6,0,406,0,388,0C369.2,0,351,0,332,0C313.8,0,295,0,277,0C258.5,0,240,0,222,0C203.1,0,185,0,166,0C147.7,0,129,0,111,0C92.3,0,74,0,55,0C36.9,0,18,0,9,0L0,0Z"></path>
</svg>
        <Container className="p-5">
         <Card> 
            <Card.Header>Contact Us</Card.Header>
            <Card.Body>
            <Card.Title>Your Problem Our Priority</Card.Title>
            <Card.Text>
            <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Explain Query</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
            </Card.Text>
            <Button variant="primary">Submit</Button>
            </Card.Body>
         </Card>
        </Container>
       
        </>
    )
}

export default ContactForm
