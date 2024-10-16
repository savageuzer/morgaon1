import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Portrait from '../assets/portrait-1.jpg'
import Portrait2 from '../assets/portrait-2.jpg'
import Portrait3 from '../assets/portrait-3.jpg'
import Portrait4 from '../assets/portrait-4.jpg'
import Portrait5 from '../assets/portrait-5.jpg'
import project1 from '../assets/painting-1.png'
import project2 from '../assets/painting-2.png'
import project3 from '../assets/painting-3.png'
import project4 from '../assets/painting-4.png'
import project5 from '../assets/painting-5.png'
import project6 from '../assets/painting-6.png'

function Services() {
  return (
    <div>
      <section className='about-banner'>
        <Col><h1>Services</h1></Col>
      </section>


        <section className='Services container-fluid'>
        {/* <Container className="container-fluid"> */}
          <Row>
            <Col lg="6" md="12"  className="">
              <img src={Portrait} alt='portrait ' />
            </Col>
            <Col lg="6" md="12" className="text-container">
              <h1>Service Description</h1>
              <p>There are always situations that call for more than just a photograph. Have your portrait painted by a really experienced fine artist who can literally paint anything you can dream up! A portrait is a representation of a particular person. Such paintings have always been more than just a record. They have been used to show the power, importance, virtue, beauty, wealth, taste, learning or other important qualities that characterize the sitter. It is one of the best ways to depict a person and show his/her character.</p>
              <button className='button'>Learn More</button>
            </Col>
          </Row>
        {/* </Container> */}
      </section>

      <section className='services-2 container-fluid'>
      {/* <Container className="container-fluid"> */}
      <Row>
        <Col lg="4" md="12" className="justify-content-center mb-4">
        <img src={Portrait2} alt='portrait2' className='image-fluid'/>
        </Col>
        <Col lg="8" md="12" className="justify-content-center mb-4">
        <img src={Portrait3} alt='portrait3' className='image-fluid' />
        <h1>Oil on Canvas of a Little Girl</h1>
        <p>This portrait was created in 2015 for my brother’s daughter, Emily Morgan.</p>
        </Col>
      </Row>
      <Row>
        <Col lg="8" md="12">
        <img src={Portrait4} alt='portrait4' className='image-fluid mb-4'/>
        </Col>
        <Col lg="4" md="12">
        <img src={Portrait5} alt='portrait5' className='image-fluid'/>
        <br></br>
        <h1>Watercolor Portrait</h1>
        <p>Jane Williams, my friend and colleague, asked me to paint her portrait and this is what I did.</p>
        </Col>
      </Row>
    {/* </Container> */}
      </section>

      {/* My paintings */}

      <section className='my-paintings bg-light'>
        <Container>
          <Row>
            <Col lg="12" className='text-center'><h1>My Paintings</h1></Col>

          </Row>
          <Row>
            <Col lg="4" className="image-wrapper">
              <div className="overflow-hidden">
                <img src={project1} alt="project1" className="hover-image" />
              </div>
              <h3>Sea Storm</h3>
              <p>This painting is one of my latest works on sea and ocean topics.</p>
            </Col>
            <Col lg="4" className="image-wrapper">
              <div className="overflow-hidden">
                <img src={project2} alt="project2" className="hover-image" />
              </div>
              <h3>Ruins of Ancient Fortress</h3>
              <p>When I’ve been to Scotland, I made this painting just in a day.</p>
            </Col>
            <Col lg="4" className="image-wrapper">
              <div className="overflow-hidden">
                <img src={project3} alt="project3" className="hover-image" />
              </div>
              <h3>Two Lovers</h3>
              <p>This work was finished in two days for my customers from San Diego, CA, who needed something special.</p>
            </Col>
          </Row>
          <Row>
            <Col lg="4" className="image-wrapper">
              <div className="overflow-hidden">
                <img src={project4} alt="project4" className="hover-image" />
              </div>
              <h3>Watercolor Portrait</h3>
              <p>Jane Williams, my friend and colleague, asked me to paint her portrait and this is what I did.</p>
            </Col>
            <Col lg="4" className="image-wrapper">
              <div className="overflow-hidden">
                <img src={project5} alt="project5" className="hover-image" />
              </div>
              <h3>Birches in Autumn</h3>
              <p>I love painting autumn trees and this work is a perfect example.</p>
            </Col>
            <Col lg="4" className="image-wrapper">
              <div className="overflow-hidden">
                <img src={project6} alt="project6" className="hover-image" />
              </div>
              <h3>Green Landscape</h3>
              <p>Another abstract work, which appeared at my last year’s exhibition, Morgan Paintings 2016.</p>
            </Col>
          </Row>
        </Container>
      </section>
      
    </div>
  )
}

export default Services