import React, {Component} from "react";
import Cards from '../components/Cards';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

class Home extends Component{
    state={
        txtArray: ["80% of millennials fail to vote in local elections , which has been proven to have more of an direct effect on their lives",
                    "Statitics show that you are more likely to be heard when you are activley engaging with your elected officials"
     ],

     title: ["Lets Vote", "Millenials Rock"]
    }
    render(){
        return(
        
          <Container>
            <Row>
              <Col sm={8}>
              
              </Col>
              <Col sm={12}>
              <Alert variant="success">
  <Alert.Heading>Hey, nice to see you</Alert.Heading>
  <p>
    Aww yeah, you successfully read this important alert message. This example
    text is going to run a bit longer so that you can see how spacing within an
    alert works with this kind of content.
  </p>
  <hr />
  <p className="mb-0">
    Whenever you need to, be sure to use margin utilities to keep things nice
    and tidy.
  </p>
</Alert>
                  </Col>
            </Row>
            <Row>
              <Col sm>={4}
                  
                {this.state.txtArray.map((item, index) => Cards(item,index))}
                {/* {this.state.title.map((item, index) => Card(item,index))} */}

              </Col>
              <Col md={5}>
              <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://picsum.photos/id/237/200/300"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://picsum.photos/id/237/200/300"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://picsum.photos/id/237/200/300"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
              </Col>
              <Col sm={3}>
              <Card style={{ width: '18rem' }}>
            <Card.Header>Featured</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </Card>
              </Col>
            </Row>
          </Container>



            // <section>
                
                /*} <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://picsum.photos/id/237/200/300"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://picsum.photos/id/237/200/300"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://picsum.photos/id/237/200/300"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> */


                /* {this.state.txtArray.map((item, index) => Card(item,index))}
                {this.state.title.map((item, index) => Card(item,index))}

            </section> */
            
            
           
        )
    }
}

export default Home;
