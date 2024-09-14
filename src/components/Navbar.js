import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';

const HeaderNavbar = () => {
    const navigate = useNavigate();

    return (
        <Navbar fixed="top" bg="white" expand="lg" className="shadow-sm border-bottom">
            <Container className="d-flex justify-content-between align-items-center">
                {/* Brand Name */}
                <Navbar.Brand href="#" style={{ fontSize: '24px', color: '#252B42', fontWeight: 'bold' }}>
                    Brandname
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto d-flex align-items-center">
                        {['Home', 'Product', 'Pricing', 'Contact'].map((text) => (
                            <Nav.Link key={text} className="mx-2" style={{ fontSize: '18px', color: '#252B42' }}>
                                <Link
                                    to={text.toLowerCase().replace(/\s+/g, '')}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    className="nav-link"
                                    spy={true}
                                    style={{ cursor: 'pointer', color: '#252B42' }}
                                >
                                    {text}
                                </Link>
                            </Nav.Link>
                        ))}
                    </Nav>
                    <div className="d-flex align-items-center">
                        {/* Login Button */}
                        <Button
                            className="login-button"
                            style={{
                                fontSize: '16px',
                                marginRight: '10px',
                            }}
                            onClick={() => navigate('/login')}
                        >
                            Login
                        </Button>

                        {/* Join Us Button */}
                        <Button
                            style={{
                                backgroundColor: '#96BB7C',
                                border: 'none',
                                fontSize: '16px',
                                fontWeight:600
                            }}
                            onClick={() => navigate('/signup')}
                        >
                            Join Us
                            <i className="bi bi-arrow-right" style={{ marginLeft: '8px', fontSize: '18px' }}></i>
                        </Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default HeaderNavbar;
