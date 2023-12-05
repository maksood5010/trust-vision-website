function ArticlesCard({onComponentChange})
{

  const handleNavItemClick = (item) => {
    onComponentChange(item, '');
};
    return(
        <div className="col-sm-12 col-md-6 col-lg-4">
        <div className="post-item">
          <div className="post__img">
            <a href="#">
              <img src="assets/images/blog/grid/2.jpg" alt="post image" loading="lazy" />
            </a>
          </div>
          <div className="post__body">
            <div className="post__meta-cat">
              <a href="#">Infectious</a><a href="#">Tips</a>
            </div>
            <div className="post__meta d-flex">
              <span className="post__meta-date">Jan 30, 2022</span>
              <a className="post__meta-author" href="#">John Ezak</a>
            </div>
            <h4 className="post__title"><a href="#">Unsure About Wearing a Face Mask? Here’s How and Why</a></h4>
            <p className="post__desc">
              That means that you should still be following any shelter-in-place orders in your community. But when
              you’re venturing out to the grocery store, pharmacy or hospital...
            </p>
            <a className="btn btn__secondary btn__link btn__rounded">
              <span onClick={() => handleNavItemClick('blog')}>Read More</span>
              <i className="icon-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    )

}
export default ArticlesCard