import React from 'react';

const Footer = () => {
    return (
        <footer className="footer bg-light py-5 bg-white">
            <div className="container ">
                <div className="row px-5">
                    <div className="col-md-3">
                        <h5>Company Info</h5>
                        <ul className="list-unstyled">
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">Carrier</a></li>
                            <li><a href="/">We are hiring</a></li>
                            <li><a href="/">Blog</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Features</h5>
                        <ul className="list-unstyled">
                            <li><a href="/">Business Marketing</a></li>
                            <li><a href="/">User Analytic</a></li>
                            <li><a href="/">Live Chat</a></li>
                            <li><a href="/">Unlimited Support</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Resources</h5>
                        <ul className="list-unstyled">
                            <li><a href="/">ISO $ Android</a></li>
                            <li><a href="/">Watch a Demo</a></li>
                            <li><a href="/">Customers</a></li>
                            <li><a href="/">Api</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Get in Touch</h5>
                        <ul className="list-unstyled" style={{ color: '#96BB7C', fontSize: '1.2rem' }}>
                            <li>
                                <i class="bi bi-telephone" style={{ marginRight: '10px' }}></i>
                                <span>32467987 </span>
                            </li>
                            <li>
                                <i class="bi bi-geo-alt" style={{ marginRight: '10px' }}></i>
                                <span>4517 Washington Ave. Manchester,
                                    Kentucky 39495 </span>
                            </li>
                            <li>
                                <i class="bi bi-envelope-fill" style={{ marginRight: '10px' }}></i>
                                <span>abc@gmail.com </span>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
