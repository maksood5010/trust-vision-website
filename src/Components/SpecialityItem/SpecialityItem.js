function SpecialityItem({speciality}) {
    console.log(speciality)
    return (
        <div className="col-sm-6 col-md-6 col-lg-3">
            <div className="feature-item">
                <div className="feature__img">
                    <img src={speciality.image} alt="service" loading="lazy" />
                </div>
                <div className="feature__content">
                    <div className="feature__icon">
                        <i className={speciality.icon}></i>
                    </div>
                    <h4 className="feature__title">{speciality.title}</h4>
                </div>
                <a href="#" className="btn__link">
                    <i className="icon-arrow-right icon-outlined"></i>
                </a>
            </div>
        </div>
    )
}
export default SpecialityItem