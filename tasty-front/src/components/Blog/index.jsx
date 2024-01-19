import React from "react";
import "./index.scss";
import BlogCards from "../BlogCards";
const Blog = () => {
  return (
    <>
      <section id="blog">
        <div className="blog_container">
          <div className="blog_content">
            <div className="blog_title">
              <p>BLOG</p>
              <h3>Recent Blog</h3>
            </div>
            <BlogCards/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
