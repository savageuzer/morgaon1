import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

function Contact() {
  return (
    <div>
      <section className="about-banner">
      <Col><h1>Contact</h1></Col>
      </section>

      <section className='contact'>
      <Container>
      <Row>
        <Col lg="6" md="12">
        <h1 className='mb-4'>Get In Touch</h1>
        <Form>
      <Form.Group className="mb-3 text-dark" controlId="formBasicEmail">
        <Form.Control type="name" placeholder="Your Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="email" placeholder="Enter Email Address" />
      </Form.Group>

      <Form.Group className="mb-3 text-dark" controlId="formBasicEmail">
        <Form.Control type="number" placeholder="Enter Mobile Number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="name" placeholder="Your City" />
      </Form.Group>

      <Form.Group className="mb-3 text-dark" controlId="formBasicEmail">
        <Form.Control type="text-area" placeholder="Your Message" />
      </Form.Group>
      <button className='button mb-4'>Submit</button>
    </Form>
        </Col>
        <Col lg="6" md="12" className='img-fluid'>
        <h1>Our Address</h1>
        <iframe title="Google Map showing Heuristic Academy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1886.6214950023755!2d72.82872598251684!3d18.964873155065956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfdf5cadca43%3A0x2f248f63460fcd4f!2sHeuristic%20Academy!5e0!3m2!1sen!2sin!4v1728633238823!5m2!1sen!2sin" width="600" height="450" style={{border:0}}allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="map"></iframe>
        </Col>
      </Row>
    </Container>

      </section>
    </div>
  )
}

export default Contact