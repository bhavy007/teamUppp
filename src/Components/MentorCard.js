import React from 'react'
import "./MentorCard.css"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


function MentorCard(props) {
  return (
    <div><div id = "sponsor_card_main">
    <Row id="sponsor_card" xs={1} md={1} className="g-4">
      
        <Col>
          <Card>
            <Card.Img id="mentor_image" variant="top" src={props.image}/>
            <Card.Body>
              <Card.Title>{props.name}</Card.Title>
              <Card.Text>
                {props.numberOfStars}⭐
              </Card.Text>
              <Card.Text>
                {props.numberOfhackathons}+ hackathons⭐
              </Card.Text>
              <Button variant="primary">Approach {props.name}</Button>
            </Card.Body>
          </Card>
        </Col>
      
    </Row>
    </div></div>
  )
}

export default MentorCard