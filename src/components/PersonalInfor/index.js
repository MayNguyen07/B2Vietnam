import React, { Component } from "react";
import { Form, Col, Row, Image, Button, Card} from "react-bootstrap";

function personalInfo() {
  return (
    <React.Fragment>
      <Row>
      <Col>
        <div className="container"> 
        <Image  className=""className="text-center p-2"variant="top"src="https://picsum.photos/171/180" roundedCircle  />
         </div></Col>
         <Col>
        <div className="container">
        
        <h1> Genny Nguyen</h1>
        <h3>Summary Intro:</h3>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        <p> Experience : 5 years</p>
        <p>city: Huyen Son Tra, Da Nang, VietNam</p>
       
        </div>
        </Col>
      </Row>
     
    </React.Fragment>
  );
}

export default personalInfo;
