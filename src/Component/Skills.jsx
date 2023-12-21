import React from 'react'
import { Col, Container } from 'react-bootstrap';
import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'
import colorSharp from '../assets/img/color-sharp.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <section className='skill' id='skill'>

        <Container>
            <Col>
            <div className='skill-bx'>
                <h2>Skills</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur aliquam natus nesciunt molestiae sit odio vero voluptatibus magnam maiores. Nemo ab magnam sequi aut in est. Autem maxime illo aspernatur?
                </p>

                <Carousel 
                className='skill-slider'
                responsive={responsive} infinite={true}>
                <div className='item'>
                    <img src={meter1} alt="img" />
                    <h5>Web Developer</h5>
                </div>
                 <div className='item'>
                    <img src={meter2} alt="img" />
                    <h5>Html&Css</h5>
                 </div>
                 <div className='item'>
                    <img src={meter3} alt="img" />
                    <h5>JavaScript</h5>
                 </div>
                 <div className='item'>
                    <img src={meter1} alt="img" />
                    <h5>React</h5>
                 </div>
</Carousel>

                 </div>
            </Col>
        </Container>
        <img src={colorSharp} className='background-image-left' alt="" />
    </section>
  )
}

export default Skills