

function Growth() {

    const data = [
        { dateLabel: '1985', title: 'Scand Care' },
        { dateLabel: '1990', title: 'Talat' },
        // Add more items as needed
        { dateLabel: '2005', title: 'Majestic' },
        { dateLabel: '2014', title: 'Cosmo Sharjah' },
        { dateLabel: '2015', title: 'Lauretta' },
        { dateLabel: '2016', title: 'NewLook AD' },
        { dateLabel: '2017', title: 'NewLook Khabisi' },
        { dateLabel: '2017', title: 'NewLook Extra' },
        { dateLabel: '2018', title: 'NewLook Yahar' },
        // Add more items as needed
    ];
    return (
        <section className="services-layout1 services-carousel">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
                        <div className="heading text-center mb-60">
                            <h2 className="heading__subtitle">Our Growth!</h2>
                            <h3 className="heading__title">Committed to Providing Medical Care For The Sickest In Our Community.</h3>

                            <a href="#" className="btn btn__secondary btn__outlined btn__rounded">
                                <span>Our Growth</span>
                                <i className="icon-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div>
                    <h1>UL timeline cards</h1>
                    <ul>
                        {data.map((item, index) => (
                            <li key={index} style={{ '--accent-color': '#41516C' }}>
                                <div className="date">{item.dateLabel}</div>
                                <div className="title">{item.title}</div>
                                <div className="descr">Description goes here</div>
                            </li>
                        ))}
                    </ul>
                 
                </div>
            </div>
        </section>
    )

}

export default Growth