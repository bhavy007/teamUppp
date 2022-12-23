import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import "./SponsorCard.css";

function SponsorCard(props) {
  return (
    <div id = "sponsor_card_main">
    <Row id="sponsor_card" xs={1} md={1} className="g-4">
      
        <Col>
          <Card>
            <Card.Img id="sponsor_image" variant="top" src={props.image}/>
            <Card.Body>
              <Card.Title>{props.name}</Card.Title>
              <Card.Text>
                Sponsored {props.numberOfEvents}+ events.
              </Card.Text>
              <Button variant="primary">Contact {props.name}</Button>
            </Card.Body>
          </Card>
        </Col>
      
    </Row>
    </div>
  )
}

export default SponsorCard



