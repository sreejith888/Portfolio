import React from "react";
import "./Blog.css";
import Blog1 from './img/blog-1.webp';
import Blog2 from './img/blog-2.webp';
import Blog3 from './img/blog-3.jpg';

function Blog() {
  return (
    <div className="blog component__space" id="Blog">
      <div className="heading">
        <h1 className="heading">Latest Projects</h1>
        <p className="heading p__color">
          Hopping into a profession that i always passionate about was indeed a right decision,
        </p>
        <p className="heading p__color">
          and the projects built over here made me more enthusiastic to learn more.
        </p>
      </div>
      <div className="container">
          <div className="row">
              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">Development</h5>
                         <h4 className="project__text">Password generator</h4>
                         <a href="https://sreejith888.github.io/Password-Generator/" className="blog project__btn btn">Know More</a>
                       </div>
                 </div>
              </div>

              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">Development</h5>
                         <h4 className="project__text">Quiz App</h4>
                         <a href="https://sreejith888.github.io/Quiz-app/" className="blog project__btn btn">Know More</a>
                       </div>
                 </div>
              </div>

              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">Development</h5>
                         <h4 className="project__text">Netflix clone</h4>
                         <a href="https://sreejith888.github.io/Netflix-clone/" className="blog project__btn btn">Know More</a>
                       </div>
                 </div>
              </div>

          </div>
      </div>
    </div>
  );
}

export default Blog;