function Info()
{
    return(
        <section>
      <div className="container">
        <div className="row">

          <div className="col-sm-4">

            <div className="video-banner-layout2 ">
              <img src="assets/images/about/ab1.jpg" alt="about" className="w-100" />
            </div>

          </div>
          <div className="col-sm-8">

            <div className="row ml-30 mr-30 mt-20">
              <div className="heading-layout2" style={{ textAlign: 'start' }}>
                <h3 className="heading__title mb-60">United in the Pursuit of Better Healthcare Across Disciplines</h3>
              </div>
              {/* /heading */}

              <div className="text__content" style={{ textAlign: 'justify' }}>
                <p className="heading__desc font-weight-bold color-secondary mb-30">At Trust Vision Investment, we stand as a
                  prominent healthcare group, dedicating our efforts to enhancing the lives of
                  individuals through a range of specialized services. With a strong presence across the United Arab
                  Emirates, our clinics
                  cater to a diverse array of healthcare needs. Our commitment to excellence shines through our
                  comprehensive offerings in
                  Cosmetic, Dermatology, Dental, Rehabilitation, and Multi-Specialty services.
                </p>
                <a href="history.html" className="btn btn__secondary btn__rounded mb-70">
                  <span>About us</span> <i className="icon-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}
export default Info