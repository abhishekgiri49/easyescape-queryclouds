import { BlogSidebar, TrendingBlogs } from "../../../components";
import { BlogService } from "../../../../repositories";
import { useParams, Link, useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import { useEffect, useState } from "react";
const BlogDetail = () => {
  const [blog, setBlog] = useState([]);
  const { blogId } = useParams();
  useEffect(() => {
    fetchBlogList();
  }, [blogId]);

  const fetchBlogList = () => {
    BlogService.findforPublic(blogId).then((data) => {
      setBlog(data);
      // console.log(data);
    });
  };

  return (
    <div class="blog-main-area">
      <div class="container container-default custom-area">
        <div class="row">
          <div class="col-12 col-custom widget-mt">
            <div class="blog-post-details">
              <figure class="blog-post-thumb mb-5">
                <img
                  className="card-img-top"
                  src={`/src/assets/uploads/blogs/${blog.image}`}
                  alt={blog.title}
                />
              </figure>
              <section class="blog-post-wrapper product-summery">
                <div class="section-content section-title">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: blog.description,
                    }}
                  />
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <TrendingBlogs />
    </div>
  );
};
export default BlogDetail;
