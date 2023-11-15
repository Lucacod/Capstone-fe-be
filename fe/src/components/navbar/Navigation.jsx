import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './nav.css'
import Button from 'react-bootstrap/esm/Button';
import { Link, useLocation } from 'react-router-dom';





const Navigation = () => {
    const location = useLocation();

    // Verifica se il percorso corrente è diverso dalla pagina di login
    if (location.pathname === '/') {
        return null;  // Restituisce null solo sulla pagina di login
    }


    return (
        <Navbar expand="md">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">
                    <Navbar.Brand href="#home" id="music-academy-brand">MUSIC ACADEMY</Navbar.Brand>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/About">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        <Button className='btn btn-dark'>Logout</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation