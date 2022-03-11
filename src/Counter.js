import React, { Component } from 'react';
import {Card,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@restart/ui/esm/Button';


export default class Counter extends Component {
  constructor(props){
 super(props);
 this.state={
   counter:1,
   list:[0]
 }

  }
   forInorDe=(s)=>{

  let sing =s==='+'?1:-1;

  this.setState({

    counter:this.state.counter+sing,
    list:new Array(this.state.counter+sing).fill(0)
  });


  
   }

  render() {
    return (
      <div>
   <Card border="primary">
     <Card.Header>
      <strong>This About Mr:</strong> {this.props.name}
     </Card.Header>
     <Card.Body>
       <Card.Text>
   <p>   <strong> Your job is : </strong>{this.props.job}
      </p>
      
       </Card.Text>
   
      <div>
        <Row>
        {
          this.state.list.map((v,i)=> 
          <Col><img src={this.props.photo} width={50} /></Col>
          )
        }
        </Row>
      </div>
     </Card.Body>
    

     <Card.Footer>
     <Row>
       <Col><button className="btn btn-primary" onClick={()=>this.forInorDe('+')}>+</button></Col>
       <Col><button className="btn btn-primary"  onClick={()=>this.forInorDe('-')}>-</button></Col>

     </Row>
     </Card.Footer>
   </Card>

      </div>
    )
  }
}
