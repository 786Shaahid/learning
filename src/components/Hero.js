import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="hero d-flex align-items-center" style={{ background: '#F5F5F5', padding: '120px 0', height: '100vh' }} id="home">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 text-md-left">
                        <h6 className="mb-4" style={{ margin: '20px auto', color: '#FEBC94' }}>
                            Welcome
                        </h6>
                        <h1 className="font-weight-bold mb-4 w-75 color" >
                            Best Learning Opportunities
                        </h1>
                        <h6 className="mb-4" style={{ maxWidth: '600px', opacity: 0.7 }}>
                            A smart solution to streamline your factory operations from fabric rolls to finished products
                        </h6>
                        <Button
                            style={{
                                backgroundColor: '#96BB7C',
                                border: 'none',
                                fontSize: '16px',
                                fontWeight: 600,
                                marginRight: '20px'
                            }}
                            onClick={() => navigate('/signup')}
                        >
                            Join Us
                            <i className="bi bi-arrow-right" style={{ marginLeft: '8px', fontSize: '18px' }}></i>
                        </Button>
                        <button type="button" className="btn btn-outline-warning">Learn More</button>
                    </div>
                    <div className="col-md-6 d-none d-md-block">
                        <img
                            alt="Illustration"
                            className="img-fluid rounded-3"
                            src="https://www.euroschoolindia.com/wp-content/uploads/2023/07/student-study-group.jpg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
