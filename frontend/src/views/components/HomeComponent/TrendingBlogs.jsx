const TrendingBlogs = () => {
  return (
    <section className="trendings">
      <div className="container">
        <div className="trendings-content">
          <div className="section-header">
            <h3 className="section-head-title">Trending stories</h3>
            {/* <a href="#" className="view-all">
              View all <span></span>
            </a> */}
          </div>
          <div className="stories">
            <div className="story">
              <img
                src="https://raw.githubusercontent.com/mustafadalga/tour-and-travel/master/assets/img/stories/story-1.jpg"
                alt=""
                className="story-img"
              />
              <h4 className="story-title">
                The many benefits of taking a healing holiday
              </h4>
              <p className="story-desc">
                ‘Helaing holidays’ are on the rise tohelp maximise your health
                and happines...
              </p>
              <a href="#" className="read-more">
                Read More
              </a>
            </div>
            <div className="story">
              <img
                src="https://raw.githubusercontent.com/mustafadalga/tour-and-travel/master/assets/img/stories/story-2.jpg"
                alt=""
                className="story-img"
              />
              <h4 className="story-title">
                The best Kyoto restaurant to try Japanese food
              </h4>
              <p className="story-desc">
                From tofu to teahouses, here’s our guide to Kyoto’s best
                restaurants to visit...
              </p>
              <a href="#" className="read-more">
                Read More
              </a>
            </div>
            <div className="story">
              <img
                src="https://raw.githubusercontent.com/mustafadalga/tour-and-travel/master/assets/img/stories/story-3.jpg"
                alt=""
                className="story-img"
              />
              <h4 className="story-title">
                Skip Chichen Itza and head to this remote Yucatan
              </h4>
              <p className="story-desc">
                It’s remote and challenging to get, but braving the jungle and
                exploring these ruins without the...
              </p>
              <a href="#" className="read-more">
                Read More
              </a>
            </div>
            <div className="story">
              <img
                src="https://raw.githubusercontent.com/mustafadalga/tour-and-travel/master/assets/img/stories/story-4.jpg"
                alt=""
                className="story-img"
              />
              <h4 className="story-title">
                Surf’s up at these beginner spots around the world
              </h4>
              <p className="story-desc">
                If learning to surf has in on your to- do list for a while, the
                good news is: it’s never too late...
              </p>
              <a href="#" className="read-more">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TrendingBlogs;
