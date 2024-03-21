import { BlogSidebar, Pagination } from "../../../components";
import { BlogService } from "../../../../repositories";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import { useEffect, useState, useMemo } from "react";
const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState([]);
  const [limit] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchBlogList();
  }, [currentPage, formData]);

  const fetchBlogList = () => {
    BlogService.getBlogsByFilter(currentPage, limit, formData).then((data) => {
      // console.log(data);
      setBlogs(data.blogs);
      setTotalPages(data.totalPages);
    });
  };
  const truncateContent = (htmlString, limit) => {
    // Create a temporary element to parse the HTML string
    const tempElement = document.createElement("div");
    tempElement.innerHTML = htmlString;

    // Extract text content from the temporary element
    let textContent = tempElement.textContent || tempElement.innerText || "";

    // Split the text content into words
    const words = textContent.split(" ");

    // If the number of words exceeds the limit, truncate the content
    if (words.length > limit) {
      textContent = words.slice(0, limit).join(" ") + "...";
    }

    return textContent;
  };
  // Function to divide array into chunks of size 'size'
  const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  // Divide 'blogs' into sets of 2
  const dividedBlogs = chunkArray(blogs, 2);
  const handleFilters = (data) => {
    setFormData({
      ...formData,
      ...data,
    });
  };
  return (
    <div class="blog-main-area">
      <div class="container container-default custom-area">
        <div class="trip_header row">
          <h2 class="trip_header__title">Trip Ideas</h2>
        </div>
        <div class="row flex-row-reverse">
          <div class="col-lg-9 col-12 col-custom widget-mt">
            {dividedBlogs.map((blogSet, index) => (
              <div class="row" key={index}>
                {blogSet.map((blog) => (
                  <div class="col-12 col-md-6 col-custom mb-30" key={blog._id}>
                    <div class="blog-lst">
                      <div class="single-blog">
                        <div class="blog-image">
                          <Link class="d-block" to={"/blog/detail/" + blog._id}>
                            <img
                              src={`/src/assets/uploads/blogs/${blog.image}`}
                              alt="Blog Image"
                              class="w-100"
                            />
                          </Link>
                        </div>
                        <div class="blog-content">
                          <div class="blog-text">
                            <h4>
                              <Link to={"/blog/detail/" + blog._id}>
                                {blog.title}
                              </Link>
                            </h4>
                            <div class="blog-post-info">
                              <span>
                                <a href="#">By Admin</a>
                              </span>
                              {/* <span>{blog.date}</span> */}
                            </div>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: truncateContent(blog.description, 30),
                              }}
                            />

                            <a
                              href="blog-details-fullwidth.html"
                              class="readmore"
                            >
                              Read More <i class="fa fa-long-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
            {blogs.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                limit={limit}
                onPageChange={handlePageChange}
              />
            )}
            {blogs.length == 0 && (
              <Alert variant={"danger"} style={{ textAlign: "center" }}>
                No blogs Found!
              </Alert>
            )}
          </div>
          <div class="col-lg-3 col-12 col-custom">
            <BlogSidebar onChange={handleFilters} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogList;
