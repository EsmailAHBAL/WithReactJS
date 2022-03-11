
import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Counter  from './Counter'; 
import pt from './images/pro.jpeg';
import to from './images/fo.jpg';
import fo from './images/to.jpg';
import th from './images/th.jpg';

function App() {

  
  return (
    <div className="App">
      <Container className="mt-2">
  <Row>
     <Col>
  <Counter name="Jhon" job="Registered Nurse"photo={th} />
  </Col>
  <Col>
  <Counter name="Red" job="Pharmacist" photo={fo}/>
  </Col>
    <Col>
  <Counter name="Sam" job="Developer" photo={to}/>
  </Col>
  <Col>
  <Counter name="Ben" job="Dentist"  photo={pt}/>
  </Col>
  </Row>
      </Container>
    </div>
  );
}

export default App;
