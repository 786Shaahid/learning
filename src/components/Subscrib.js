import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'; 

const Subscribe = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!email) {
            setError('Please enter a valid email address.');
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Please enter a valid email address.');
        } else {
            setError('');
             console.log('Subscribed with:', email);
        }
    };

    return (
        <section className="subscribe py-5 bg-light d-flex align-items-center justify-content-center min-vh-100">
            <div className="container text-center">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                        <h5 className="px-5 mb-4" style={{ color: '#FEBC94' }}>Newsletter</h5>
                        <h3 className="px-5 mb-3">Watch our Courses</h3>
                        <h6 className="px-5 mb-5" style={{ opacity: 0.7 }}>
                            Problems trying to resolve the conflict between
                            the two major realms of Classical physics: Newtonian mechanics
                        </h6>
                        <form className="mt-4" onSubmit={handleSubmit}>
                            <div className="input-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Button
                                    type="submit"
                                    style={{
                                        backgroundColor: '#96BB7C',
                                        border: 'none',
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        marginLeft: '10px'
                                    }}
                                >
                                    Subscribe
                                </Button>
                            </div>
                            {error && <div className="mt-2 text-danger">{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;
