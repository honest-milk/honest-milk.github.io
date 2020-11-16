import React, { useEffect } from 'react';

import { Container } from "reactstrap";

import blog1 from "../assets/img/blogs/blog1.jpeg";
import blog2 from "../assets/img/blogs/blog2.jpeg";
import blog3 from "../assets/img/blogs/blog3.jpeg";
import blog4 from "../assets/img/blogs/blog4.jpeg";

import blogs from './blogs';
import BlogList from './Blog';
const images = [
  blog1,
  blog2,
  blog3,
  blog4,
]


const BlogPost = ({match}) => {
  let {params} = match;
  let {id} = params;
  id = parseInt(id)-1;
  let blog = blogs[id];
  useEffect(() => {
    
    document.documentElement.scrollTop = 0;
  })
  return (
    <div>
      <Container style={{marginTop: 100}}>
      {
        blog ?
        <div id="blog-post">
          <h1>{blog.title}</h1>
          <div className="blog-post-image-container">
          <img src={images[id]} alt="banner" className="blog-post-image"></img>
          </div>
          {blog.body}
        </div>:
        <div>
          No Such blog was found.
        </div>
      }
      <h2>Other Blogs</h2>
      <BlogList showHeader={false} />
      </Container>
    </div>
  );
  
};

export default BlogPost;