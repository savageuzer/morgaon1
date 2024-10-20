import React from 'react'
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
//import Col from 'react-bootstrap/Col';
import Banner from '../assets/brand-inverse (1).png'
import "./Home.css"
import Samantha from '../assets/about-me.jpg'
import project1 from '../assets/painting-1.png'
import project2 from '../assets/painting-2.png'
import project3 from '../assets/painting-3.png'
import project4 from '../assets/painting-4.png'
import project5 from '../assets/painting-5.png'
import project6 from '../assets/painting-6.png'


function Home() {
  return (
    <div>
      <section className="banner">
        <Container>
          <Row>
            <Col lg='12'>
              <img src={Banner} alt="project" className="image-fluid" />
            </Col>
          </Row>
        </Container>
      </section>


      <section className='grid-1 align-content-center'>
        <Container>
          <Row>
            <Col lg="6" className="p-5 check">
              <h1>A Few Words About Me</h1>
              <p>My name is Samantha Morgan, and I have been a fine artist since my youth. I find inspiration from the innovative styles of contemporary and urban art, such as graphic and graffiti illustrations. I strongly believe that art is a global form of communication. It educates visually by either moving you, pleasing you, or even inspiring you.</p>
              <button className='button'>Learn More</button>
            </Col>
            <Col lg="6" className="pt-5">
              <img src={Samantha} alt='samantha'className='image-fluid' />
            </Col>
          </Row>

        </Container>
      </section>

      {/* my paintings */}

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
      {/* Services */}
      <section className='cards'>
        <Container>
          <Row>
            <Col lg="12" className="text-center"><h1>Services</h1></Col>
          </Row>
          <Row>
            <Col lg="12" className="text-center"><p>If you are looking for custom paintings, which will decorate your home or office, consider booking one or several of my services listed below. They will add more colors and emotions to your daily life.</p></Col>
          </Row>
          <Row>
            <Col lg="3" className="cards-1">
              <h3>Potrait</h3>
            </Col>
            <Col lg="3" className="cards-1">
              <h3>Landscape</h3>
            </Col>
            <Col lg="3" className="cards-1">
              <h3>Still Life</h3>

            </Col>
            <Col lg="3" className="cards-1">
              <h3>Urban</h3>
            </Col>
            <Col lg="">
            <button className='button mt-5'>View All services</button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Home