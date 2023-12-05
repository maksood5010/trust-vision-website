function About()
{
    return(
        <div style={{marginTop: "-150px"}}>
        <section className="about-layout1 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="heading-layout2">
                <p><span>About us</span></p>
                <h3 className="heading__title mb-40">United in the Pursuit of Better Healthcare Across Disciplines.</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="about__Text">
                <p className="mb-30">TrustVision Group operates with a vision - to revolutionize healthcare access and
                  experiences across various medical disciplines. We are a unified group managing and operating an
                  expansive chain of medical facilities, including hospitals, dental and cosmetic centers, poly clinics,
                  and rehabilitation centers.
                </p>
                <p className="mb-30">
                  Born out of a commitment to improving lives, TrustVision Group is the embodiment of progressive
                  healthcare. We operate across various specialty areas, providing end-to-end healthcare services to
                  communities. Our chain of healthcare facilities provides a wide spectrum of medical services, from
                  primary care to specialty treatments, and from preventive health measures to rehabilitation services.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="video-banner">
                <img src="assets/images/sliders/1.jpg" alt="about" />
                {/* Uncomment the following code if you want to include a video button */}
                {/* <a className="video__btn video__btn-white popup-video" href="https://www.youtube.com/watch?v=nrJtHemSPW4">
                  <div className="video__player">
                    <i className="fa fa-play"></i>
                  </div>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-layout1 pt-130 pb-50 mt--90 off-white">
        <div className="container">
          <div className="row mb-40">
            <div className="col-sm-12 col-md-12 col-lg-5">
              <h4>Our mission</h4>
              <div className="heading__layout2">
                <h3 className="heading__title">Your Health is Our Priority</h3>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-5 offset-lg-1">
              <p className="font-weight-bold mission">
                Provide broad-spectrum, top-quality healthcare services by
                harnessing the collective strength of our diverse network of medical centers and hospitals.
                Deliver high-quality, accessible healthcare through innovation, a patient-centric culture, community
                commitment, and groundbreaking research.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="features-layout1 pt-130 pb-50 mt--90 off-white">
        <div className="container">
          <div className="row mb-40">
            <div className="col-sm-12 col-md-12 col-lg-5">
              <h4>Our vision</h4>
              <div className="heading__layout2">
                <h3 className="heading__title">World-class healthcare accessible to all</h3>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-5 offset-lg-1">
              <p className="font-weight-bold mission" id="values">
                We aspire to be an eminent force in the health sector in UAE and all GCC, transforming lives through
                unparalleled care and advanced medical solutions. Our dream is to make world-class healthcare accessible
                to all, with our chain of medical centers and hospitals as beacons of medical excellence, compassion, and
                innovation
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
    )

}
export default About