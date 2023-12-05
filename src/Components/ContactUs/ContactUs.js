function ContactUs() {

    return (
        <div>
            {/* Google Map Section */}
            <section className="google-map py-0">
                <iframe
                    frameborder="0"
                    height="500"
                    width="100%"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3637.964476750261!2d55.718214075875494!3d24.243021178337578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8ab6caeb83a1eb%3A0xc448f109067c4146!2sTrust%20Vision%20Investment%20L.L.C!5e0!3m2!1sen!2sae!4v1692622309777!5m2!1sen!2sae"
                    loading="lazy"
                ></iframe>
            </section>

            {/* Contact Layout 1 Section */}
            <section className="contact-layout1 pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="contact-panel d-flex flex-wrap">
                                {/* Contact Form */}
                                <form className="contact-panel__form" method="post" action="assets/php/contact.php" id="contactForm">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <h4 className="contact-panel__title">How Can We Help? </h4>
                                            <p className="contact-panel__desc mb-30">
                                                Please feel welcome to contact our friendly reception staff with any general or medical enquiry. Our
                                                doctors will receive or return any urgent calls.
                                            </p>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-6">
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
                                        <div className="col-sm-6 col-md-6 col-lg-6">
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
                                        <div className="col-sm-6 col-md-6 col-lg-6">
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
                                        <div className="col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <i className="icon-news form-group-icon"></i>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Subject"
                                                    id="contact-name"
                                                    name="contact-name"
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
                                            <button
                                                type="submit"
                                                className="btn btn__secondary btn__rounded btn__block btn__xhight mt-10"
                                            >
                                                <span>Submit Request</span> <i className="icon-arrow-right"></i>
                                            </button>
                                            <div className="contact-result"></div>
                                        </div>
                                    </div>
                                </form>
                                {/* Info Panel */}
                                <div className="contact-panel__info d-flex flex-column justify-content-between bg-overlay bg-overlay-primary-gradient">
                                    <div className="bg-img">
                                        <img src="assets/images/banners/1.jpg" alt="banner" />
                                    </div>
                                    <div>
                                        <h4 className="contact-panel__title color-white">Quick Contacts</h4>
                                        <p className="contact-panel__desc font-weight-bold color-white mb-30">
                                            Please feel free to contact our friendly staff with any medical enquiry.
                                        </p>
                                    </div>
                                    <div>
                                        <ul className="contact__list list-unstyled mb-30">
                                            <li>
                                                <i className="icon-phone"></i>
                                                <a href="tel:0097137011888">Emergency Line: 0097137011888</a>
                                            </li>
                                            <li>
                                                <i className="icon-location"></i>
                                                <a href="#">Location: Al ain, Abudhabi, UAE</a>
                                            </li>
                                            <li>
                                                <i className="icon-clock"></i>
                                                <a href="#">Mon - Fri: 8:00 am - 7:00 pm</a>
                                            </li>
                                        </ul>
                                        <a href="#" className="btn btn__white btn__rounded btn__outlined">
                                            Contact Us
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}
export default ContactUs