import React from 'react';

const Packages = () => {
    return (
        <section className="packages d-flex align-items-center py-5 " style={{ height: '80vh' }}>
            <div className="container">
                <div className="row mt-5  align-items-center">
                    <div className="col-md-12">
                        <h2 className="mx-5 mb-4 w-25 ">
                            <hr />
                        </h2>
                    </div>
                    <div className="col-md-6">
                        <h2 className="px-5 mb-3">Approbable Packages</h2>
                        <h6 className="px-5 mb-5 w-75" style={{ maxWidth: '600px', opacity: 0.7 }}>
                            Problems trying to resolve the conflict between
                            the two major realms of Classical physics:
                            Newtonian mechanics
                        </h6>
                        <button
                            className="button-custom px-5 ml-10"
                        >
                            Learn More
                            <i className="bi bi-chevron-right"></i>
                        </button>
                    </div>
                    <div className="col-md-3 mr-5">
                        <div class="card shadow p-2 " style={{ backgroundColor: '#FFF', border: 'none' }}>
                            <div class="mx-3 my-3 d-flex align-items-center justify-content-center text-white" style={{ width: '60px', height: '60px', borderRadius: '5px', backgroundColor: ' #96BB7C' }}>
                                <i class="bi bi-easel-fill" style={{ fontSize: '1.5rem' }}></i>

                            </ div>
                            <div class="card-body">
                                <h5 class="card-title">Certified Teacher</h5>
                                <hr style={{ width: '5rem', height: '4px', backgroundColor: '#A01A10', border: 'none' }} />
                                <h6 className="w-75" style={{ maxWidth: '600px', opacity: 0.7 }}>Some quick example text to build on the card title and make up the bulk of the card's content.</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card shadow p-2 " style={{ backgroundColor: '#FFF', border: 'none' }}>
                            <div class="mx-3 my-3 d-flex align-items-center justify-content-center text-white" style={{ width: '60px', height: '60px', borderRadius: '5px', backgroundColor: ' #96BB7C' }}>
                                <i class="bi bi-lightbulb-fill" style={{ fontSize: '1.5rem' }}></i>

                            </ div>
                            <div class="card-body">
                                <h5 class="card-title">Certified Teacher</h5>
                                <hr style={{ width: '5rem', height: '4px', backgroundColor: '#A01A10', border: 'none' }} />
                                <h6 className="w-75" style={{ maxWidth: '600px', opacity: 0.7 }}>Some quick example text to build on the card title and make up the bulk of the card's content.</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Packages;
