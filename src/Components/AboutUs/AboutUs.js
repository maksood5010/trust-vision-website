import About from "../About/About"
import Values from "../Values/Values"
import NetworkGrowth from "../NetworkGrowth/NetworkGrowth"
function AboutUs() {
    return (
        <div>
            <section className="page-title page-title-layout5"  style={{marginTop: "-80px", zIndex: -1}}>
                <div className="bg-img"><img src="assets/images/backgrounds/6.jpg" alt="background" style={{height: "200px", width: "100%"}}/></div>
                <div className="container" >
                    <div className="row">
                        <div  className="col-12 d-flex justify-content-between flex-wrap align-items-center" style={{marginTop: "-200px"}}>
                            <h1 className="pagetitle__heading my-3" style={{zIndex: 1}}>About us</h1>
                            <nav style={{zIndex: 1}}>
                                <ol className="breadcrumb my-3">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">About us</a></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <About />
            <Values />
            <NetworkGrowth />

        </div>

    )
}
export default AboutUs