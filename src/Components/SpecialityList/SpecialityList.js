import SpecialityItem from "../SpecialityItem/SpecialityItem"

function SpecialityList() {

    const specialities = [
        {
            title: 'General Medicine',
            icon: 'icon-heart',
            image: 'assets/images/services/general_medicine.jpg',
        },
        {
            title: 'Psychology',
            icon: 'icon-doctor',
            image: 'assets/images/services/psychology.jpg',
        },
        {
            title: 'General Surgery',
            icon: 'icon-ambulance',
            image: 'assets/images/services/general_surgery.jpg',
        },
        {
            title: 'Cosmetic Surgery',
            icon: 'icon-drugs',
            image: 'assets/images/services/cosmetic_surgery.jpg',
        },
        {
            title: 'Ophthalmology',
            icon: 'icon-first-aid-kit',
            image: 'assets/images/services/opthalmology.jpg',
        },
        {
            title: 'Physiotherapy',
            icon: 'icon-hospital',
            image: 'assets/images/services/physiotherapy.jpg',
        },
        {
            title: 'Otolaryngology',
            icon: 'icon-expenses',
            image: 'assets/images/services/otolaryngology.jpg',
        },
        {
            title: 'Orthopedics',
            icon: 'icon-bandage',
            image: 'assets/images/services/orthopedics.jpg',
        },
        {
            title: 'Gynaecology',
            icon: 'icon-bandage',
            image: 'assets/images/services/obstetrics_gynaecology.jpg',
        },
        {
            title: 'Cardiology',
            icon: 'icon-bandage',
            image: 'assets/images/services/cardilogy.jpg',
        },
        {
            title: 'Dentistry',
            icon: 'icon-bandage',
            image: 'assets/images/services/dentistry.jpg',
        },
        {
            title: 'Dermatology',
            icon: 'icon-bandage',
            image: 'assets/images/services/dermatology.jpg',
        },
        {
            title: 'Internal Medicine',
            icon: 'icon-bandage',
            image: 'assets/images/services/internal_medicine.jpg',
        },
        {
            title: 'Neurology',
            icon: 'icon-bandage',
            image: 'assets/images/services/neurology.jpg',
        },
    ];


    return (
        <section className="features-layout2 pt-130 bg-overlay bg-overlay-primary">
            {/* <div className="bg-img"><img src="assets/images/backgrounds/2.jpg" alt="background"></div> */}
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="heading__layout2 mb-50">
                            <h3 className="heading__title">
                                Our Specialities<br /> Discover Our Diverse Healthcare Specialities
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row mb-100">
                    <div className="col-sm-3 col-md-3 col-lg-1 ">
                        <div className="heading__icon">
                            <i className="icon-insurance" style={{ color: 'darkblue', textAlign: 'center' }}></i>
                        </div>
                    </div>
                    <div className="col-sm">
                        <p className="heading__desc font-weight-bold mb-30">
                            We are committed to providing the best care possible to everyone who walks through our doors. When you choose us, you choose quality. We have Specialized to treat a wide range of conditions and provide you with the care you need.
                        </p>
                        {/* <a href="#" className="btn btn__link">
              <i className="icon-arrow-right icon-filled" style={{ color: '#0e204d' }}></i>
              <span>Our Specialities</span>
            </a> */}
                    </div>
                </div>
                <div className="row">
                    {specialities.map((speciality, index) => (
                        <SpecialityItem key={index} speciality={speciality} />
                    ))}
                </div>

            </div>
        </section>
    )
}
export default SpecialityList