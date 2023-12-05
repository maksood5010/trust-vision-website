function Blog() {

    return (
        <div>
      {/* Page Title Section */}
      <section className="page-title pt-30 pb-30 text-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item"><a href="#">Blog</a></li>
                  <li className="breadcrumb-item active" aria-current="page">
                    AACSH Embarks on a Humanitarian Mission
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Single Section */}
      <section className="blog blog-single pt-0 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-8">
              <div className="post-item mb-0">
                <div className="post__img">
                  <a href="#">
                    <img src="assets/images/blog/single/1.jpg" alt="post image" loading="lazy" />
                  </a>
                </div>
                <div className="post__body pb-0">
                  <div className="post__meta-cat">
                    <a href="#">Skin care</a><a href="#">Dermatology</a>
                  </div>
                  <div className="post__meta d-flex align-items-center mb-20">
                    <span className="post__meta-date">Aug 30, 2023</span>
                    <a className="post__meta-author" href="#">AACSH</a>
                    <a className="post__meta-comments" href="#"></a>
                  </div>
                  <h1 className="post__title mb-30">
                    AACSH Embarks on a Humanitarian Mission: Baby Rayan Travels from Iraq for Life-changing Surgery
                  </h1>
                  <div className="post__desc">
                    <p>
                      In a heartwarming testament to our commitment, we are thrilled to introduce baby Rayan, a courageous
                      young soul who has journeyed all the way from Iraq in search of a life-changing medical intervention.
                      Baby Rayan is facing the formidable challenge of a congenital giant nevus, a condition that demands
                      expert care and compassion.
                    </p>
                    <p>
                      At AACSH, we believe in making the impossible possible, and this conviction is embodied by Dr. Mohan Rangaswamy, an esteemed plastic and reconstructive surgeon within our ranks. Dr. Rangaswamy, renowned for his expertise and compassionate approach to healthcare, has taken the reins of baby Rayan's case.  
                    </p>
                    <p>
                      Congenital giant nevus, characterized by an abnormally large and pigmented birthmark on the skin, presents both physical and emotional hurdles. Dr. Rangaswamy and his dedicated medical team have diligently assessed baby Rayan's condition, developing a tailored treatment plan that holds the promise of transforming his life.  
                    </p>
                    <h6>About the American Academy of Cosmetic Surgery Hospital (AACSH)</h6>
                    <p>
                      AACSH is a world-renowned healthcare institution dedicated to providing the highest standard of reconstructive medical services. With a team of exceptionally skilled surgeons and a commitment to making a difference, AACSH has earned a reputation for transforming lives through compassionate and innovative healthcare solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-wrap justify-content-between border-top border-bottom pt-30 pb-30 mb-40">
                <div className="blog-share d-flex flex-wrap align-items-center">
                  <strong className="mr-20 color-heading">Share</strong>
                  <ul className="list-unstyled social-icons d-flex mb-0">
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-google"></i></a></li>
                  </ul>
                </div>
                <div className="widget-tags">
                  <ul className="list-unstyled d-flex flex-wrap mb-0">
                    <li><a href="#">Skincare</a></li>
                    <li><a href="#">Dermatology</a></li>
                    <li><a href="#">congenital giant nevus</a></li>
                  </ul>
                </div>
              </div>
              <div className="widget-nav d-flex justify-content-between mb-40">
                <a href="#" className="widget-nav__prev d-flex flex-wrap">
                  <div className="widget-nav__img">
                    <img src="assets/images/blog/grid/2.jpg" alt="blog thumb" />
                  </div>
                  <div className="widget-nav__content">
                    <span>Previous Post</span>
                    <h5 className="widget-nav__ttile mb-0">Unsure About Wearing a Face Mask?</h5>
                  </div>
                </a>
                <a href="#" className="widget-nav__next d-flex flex-wrap">
                  <div className="widget-nav__img">
                    <img src="assets/images/blog/grid/3.jpg" alt="blog thumb" />
                  </div>
                  <div className="widget-nav__content">
                    <span>Next Post</span>
                    <h5 className="widget-nav__ttile mb-0">Tips for Eating Healthy When You’re Home</h5>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <aside className="sidebar">
                <div className="widget widget-search">
                  <h5 className="widget__title">Search</h5>
                  <div className="widget__content">
                    <form className="widget__form-search">
                      <input type="text" className="form-control" placeholder="Search..." />
                      <button className="btn" type="submit"><i className="icon-search"></i></button>
                    </form>
                  </div>
                </div>
                <div className="widget widget-posts">
                  <h5 className="widget__title">Recent Posts</h5>
                  <div className="widget__content">
                    {/* Add recent posts content here */}
                    <div className="widget-post-item d-flex align-items-center">
                      <div className="widget-post__img">
                        <a href="#"><img src="assets/images/blog/grid/2.jpg" alt="thumb" /></a>
                      </div>
                      <div className="widget-post__content">
                        <span className="widget-post__date">Sep 19, 2022</span>
                        <h4 className="widget-post__title"><a href="#">Succession Risks That Threaten Your Leadership</a></h4>
                      </div>
                    </div>
                    <div className="widget-post-item d-flex align-items-center">
                      <div className="widget-post__img">
                        <a href="#"><img src="assets/images/blog/grid/3.jpg" alt="thumb" /></a>
                      </div>
                      <div className="widget-post__content">
                        <span className="widget-post__date">July 7, 2022</span>
                        <h4 className="widget-post__title"><a href="#">Do Employee Surveys Tell About Employee?</a></h4>
                      </div>
                    </div>
                    <div className="widget-post-item d-flex align-items-center">
                      <div className="widget-post__img">
                        <a href="#"><img src="assets/images/blog/grid/6.jpg" alt="thumb" /></a>
                      </div>
                      <div className="widget-post__content">
                        <span className="widget-post__date">March 13, 2022</span>
                        <h4 className="widget-post__title"><a href="#">Succession Risks That Threaten Your Leadership</a></h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="widget widget-categories">
                  <h5 className="widget__title">Categories</h5>
                  <div className="widget-content">
                    {/* Add categories content here */}
                    <ul className="list-unstyled mb-0">
                      <li><a href="#"><span className="cat-count">4</span><span>Neurology</span></a></li>
                      <li><a href="#"><span className="cat-count">0</span><span>Cardiology</span></a></li>
                      <li><a href="#"><span className="cat-count">3</span><span>Pathology</span></a></li>
                      <li><a href="#"><span className="cat-count">2</span><span>Laboratory</span></a></li>
                      <li><a href="#"><span className="cat-count">4</span><span>Pediatric</span></a></li>
                      <li><a href="#"><span className="cat-count">1</span><span>Cardiac Clinic</span></a></li>
                    </ul>
                  </div>
                </div>
                <div className="widget widget-tags">
                  <h5 className="widget__title">Tags</h5>
                  <div className="widget-content">
                    {/* Add tags content here */}
                    <ul className="list-unstyled mb-0">
                      <li><a href="#">AACSH</a></li>
                      <li><a href="#">Dubai</a></li>
                      <li><a href="#">congenital giant nevus</a></li>
                      <li><a href="#">Rare</a></li>
                      <li><a href="#">Surgery</a></li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
    )

}

export default Blog
