import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Card';
import './room.css';
import { Link } from 'react-router-dom';


const TestRoom = () => {
  const [saleProve, setSaleProve] = useState([]);

  useEffect(() => {
    const fetchSaleProve = async () => {
      try {
        const response = await fetch('http://localhost:5050/saleprove');
        const data = await response.json();
        setSaleProve(data);

      } catch (error) {
        console.error('Errore durante il recupero delle sale prove:', error);
      }
    };

    fetchSaleProve();
  }, []);

  return (
    <div className="page-background text-center">
      <Container className=''>
        <Row className="justify-content-center">
          {saleProve.map((sala, index) => (
            <Col key={index} xs={12} sm={12} md={6} lg={6} className="mb-2 mt-4" style={{ width: '480px' }}>
              <Card style={{ width: '100%' }} className='mx-auto'>
                <Card.Img variant="top" src={sala.image} alt={sala.title} style={{ objectFit: 'cover', height: '300px', }} />
                <Card.Body>
                  <Card.Text>{sala.description}</Card.Text>
                  <div className="d-flex justify-content-between">
                    <div>
                      <Card.Title className='d-flex'>{sala.title}</Card.Title>
                      <Card.Subtitle className="text-muted">{sala.price}</Card.Subtitle>

                    </div>
                    <div>
                      <Button className='btn'as={Link} to='../reservation'>Prenota qui</Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

    </div>
  );
};



export default TestRoom;
