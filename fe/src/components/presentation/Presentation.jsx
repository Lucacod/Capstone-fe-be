import React from 'react'
import './style.css'
import logo from '../presentation/assets/logo-yamaha.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


const Presentation = () => {
    return (
        <Container fluid className='p-0'>
            <Row className="justify-content-center">
                <Col xs={12} sm={12} md={4} className='custom-div' as={Link} to="../rooms">
                    <h1>SALE PROVA </h1>
                    <p>Entra in un mondo di pura creatività nelle nostre sale prove all'avanguardia. Isolamento acustico perfetto, attrezzature di prima classe e uno spazio ispiratore per liberare il tuo talento musicale</p>
                </Col>

                <Col xs={12} sm={12} md={4} className='custom-div-two' as={Link} to="../studio">
                    <h1>STUDIO DI REGISTRAZIONE</h1>
                    <p>
                        Studio di registrazione,outboards analogici, registrazioni live, ampia sala di ripresa e possibilità di realizzare progetti ed arrangiamenti.
                    </p>
                </Col>

                <Col xs={12} sm={12} md={4} className='custom-div-three' as={Link} to="../course">
                    <h1>CORSI DI MUSICA</h1>
                    <p>Esplora la tua passione per la musica con i nostri corsi personalizzati. Dalle lezioni per principianti alle masterclass avanzate, c'è qualcosa per tutti. Unisciti a noi e inizia a suonare le tue note migliori.</p>
                    <img src={logo} alt="Logo" style={{ width: '20%', height: 'auto' }} />
                </Col>

            </Row>
        </Container>

    )
}

export default Presentation