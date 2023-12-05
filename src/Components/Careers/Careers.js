import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
function Careers({ show, handleClose }) {
    return (
        <Modal show={show} onHide={handleClose} >

            <Modal.Body>

                <form className="contact-panel__form" method="post" action="assets/php/contact.php" id="contactForm">
                    <div className="row">
                        <div className="col-sm-12">
                            <h4 className="contact-panel__title">Apply for us</h4>

                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="form-group">
                                <i className="icon-user form-group-icon"></i>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    id="contact-name"
                                    name="contact-name"
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="form-group">
                                <i className="icon-email form-group-icon"></i>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    id="contact-email"
                                    name="contact-email"
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="form-group">
                                <i className="icon-phone form-group-icon"></i>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Phone"
                                    id="contact-Phone"
                                    name="contact-phone"
                                    required
                                />
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="form-group">
                                <i className="icon-alert form-group-icon"></i>
                                <textarea
                                    className="form-control"
                                    placeholder="Message"
                                    id="contact-message"
                                    name="contact-message"
                                ></textarea>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="form-group">
                                <Form.Control type="file" />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="btn btn__secondary btn__rounded btn__block btn__xhight mt-10"
                        >
                            <span>Submit Request</span> <i className="icon-arrow-right"></i>
                        </button>
                        <div className="contact-result"></div>

                    </div>
                </form>

            </Modal.Body>
        </Modal>

    )
}
export default Careers