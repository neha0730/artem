import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const PartnerCloud = ({ partners }) => {
  return (
    <Container>
      <Row>
        {partners.map((partner, index) => (
          <Col key={index} sm={6} md={4} lg={3}>
            <Card className="mb-4">
              <Card.Img variant="top" src={partner.logo} />
              <Card.Body>
                <Card.Title>{partner.name}</Card.Title>
                <Card.Text>{partner.description}</Card.Text>
                <a href={partner.website} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Visit Website
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PartnerCloud;
