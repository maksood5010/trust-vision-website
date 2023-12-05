import './Brands.css'

function Brands() {
    
    const brandsData = [
        { id: 2, imagePath: 'assets/images/clients/Nazek.png', alt: 'Brand 2' },
        { id: 4, imagePath: 'assets/images/clients/Cosmo.png', alt: 'Brand 4' },
        { id: 5, imagePath: 'assets/images/clients/Ivory.png', alt: 'Brand 5' },
        { id: 7, imagePath: 'assets/images/clients/NewLook.png', alt: 'Brand 7' },
        { id: 8, imagePath: 'assets/images/clients/Lauretta.png', alt: 'Brand 8' },
        { id: 9, imagePath: 'assets/images/clients/Wldy.png', alt: 'Brand 9' },
        { id: 10, imagePath: 'assets/images/clients/Tmc.png', alt: 'Brand 10' },
        { id: 11, imagePath: 'assets/images/clients/Scand.png', alt: 'Brand 11' },
        { id: 12, imagePath: 'assets/images/clients/Majestic.png', alt: 'Brand 12' },
        { id: 14, imagePath: 'assets/images/clients/aacsh.png', alt: 'Brand 14' },
        { id: 1, imagePath: 'assets/images/clients/TrueLife.png', alt: 'Brand 1' },

    ];
    return (
        <section className="off-white">
            <div className="container">
                <div className="heading-layout2">
                    <h3 className="heading__title mb-30">Our Brands</h3>
                </div>

                <p className="heading__desc font-weight-bold color-secondary mb-60">
                    Explore our collaborative efforts that empower us to provide a comprehensive range of healthcare resources,
                    fostering healthier futures for all. With a diversified multi-specialty approach, we're well-positioned in the
                    UAE healthcare landscape. We serve middle to high-income consumer segments, focus on positive financial
                    performance, and continually expand our services. The government's emphasis on healthcare further supports our
                    growth and impact.
                </p>

                <div className="slider">
                    <div className="slide-track-1">
                        {brandsData.map((brand) => (
                            <div className="slide" key={brand.id}>
                                <img src={brand.imagePath} alt={brand.alt} />
                            </div>
                            
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Brands