import Carousel from 'react-bootstrap/Carousel';
import './hero.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Image2 from "../assets/photo2.png";
import Image1 from "../assets/photo1.png";
function IndividualIntervalsExample() {
  return (
    <div className='caro'>

    <Carousel className='w-75'>
      <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src={Image1}
        alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img
        className="d-block w-100"
        src={Image2}
        alt="2 slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100"
        src={Image1}
        alt="3 slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default IndividualIntervalsExample;