import ArticlesCard from "../ArticlesCard/ArticlesCard"

function Articles({onComponentChange}) {

    const articlesData = [
        {
            id: 1,
            image: 'assets/images/blog/grid/1.jpg',
            category: 'Skin Care',
            date: 'Aug 30, 2023',
            author: 'AACSH',
            title: 'Rare Surgery for Congenital Giant Nevus',
            description: 'The American Academy of Cosmetic Surgery Hospital is thrilled to announce a groundbreaking surgical achievement in the field of dermatology and cosmetic surgery...',
            link: 'blog-single-post.html',
        },
        {
            id: 2,
            image: 'assets/images/blog/grid/2.jpg',
            category: 'Infectious Tips',
            date: 'Jan 30, 2022',
            author: 'John Ezak',
            title: 'Unsure About Wearing a Face Mask? Here’s How and Why',
            description: 'That means that you should still be following any shelter-in-place orders in your community. But when you’re venturing out to the grocery store, pharmacy or hospital...',
            link: 'blog-single-post.html',
        },
        {
            id: 3,
            image: 'assets/images/blog/grid/3.jpg',
            category: 'Life Style Nutrition',
            date: 'Jan 28, 2022',
            author: 'Saul Wade',
            title: 'Tips for Eating Healthy When You’re Working From Home',
            description: 'It’s normal to feel anxiety, worry and grief any time you’re diagnosed with a condition that’s certainly true if you test positive for COVID-19, or are presumed to be positive...',
            link: 'blog-single-post.html',
        },
        // Add more articles as needed
    ];
    return (
        <section className="blog-grid pb-50 pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
                        <div className="heading text-center mb-40">
                            <h2 className="heading__subtitle">Resource Library</h2>
                            <h3 className="heading__title">Recent Articles</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* Post Item #2 */}
                    {articlesData .map((data, id) => (
                        <ArticlesCard key={id} data={data} onComponentChange={onComponentChange}/>
                    ))}
                

                    {/* Post Item #3 */}

                </div>
            </div>
        </section>
    )

}

export default Articles