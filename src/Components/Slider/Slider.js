function Slider() {
    return (
        <div className="row slider-bg text-center" style={{backgroundColor:" #0077b5"}}>

            <div className="col-sm-6 align-self-center mb-30 mt-30" >
                <div className="ml-30 mr-30">
                    <h2 className="title">Diverse and Fast Growing</h2>
                    <p className="desc">
                        <b>Trust Vision Investment focuses on diverse and fast-growing segments of the healthcare industry.
                            Our investment is built on positive dynamics regional healthcare sector and supporting regulations and
                            policies in the UAE.</b>
                    </p>
                    <a href="#" className="btn btn__secondary btn__rounded">
                        <span>Learn more</span> <i className="icon-arrow-right"></i>
                    </a>
                </div>
            </div>
            <div className="col-sm-6">

                <img src="assets/images/sliders/Ai1.jpg" alt="slide img" style={{ maxWidth: '110%' }} />
            </div>

        </div>
    )

}
export default Slider;