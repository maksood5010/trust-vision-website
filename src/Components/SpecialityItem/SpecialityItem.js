import * as icons from "react-icons/fa";


function SpecialityItem({speciality}) {
    console.log(speciality.icon)
    const Icon = speciality.icon ? icons[speciality.icon] : null;
    return (
        <div className="col-sm-6 col-md-6 col-lg-3" >
            <div className="feature-item" style={{height: "180px"}}>
                <div className="feature__img">
                    <img src={speciality.image} alt="service" loading="lazy" />
                </div>
                <div className="feature__content">
                    <div className="feature__icon">
                        {/* <i className={speciality.icon}></i> */}
                        <Icon />
                    </div>
                    <h3 className="feature__title">{speciality.title}</h3>
                </div>
                <a href="#" className="btn__link">
                    <i className="icon-arrow-right icon-outlined"></i>
                </a>
            </div>
        </div>
    )
}
export default SpecialityItem