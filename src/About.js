import React from "react";
import "./About.css";
import aboutImg from "./img/about.jpg";
function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
              I was very good at math and ten years ago I was into everything regarding computers.
               In high school I was open to many options. I remember thinking, “if it has to do with math,
                I’m fine with it.”Computer Science was the strongest candidate. But speaking to my family and friends,
                 a common opinion was that “working with programming languages won’t get you a job.
                 I took that opinion to heart and I ended up in Civil Engineering.
              </p>
              <p className="about__text p__color">
              I didn’t feel it was my craft,eventhough i had a very good scoresby the time i got graduated.
               I saw my friends dedicating more time and diving into deeper subjects.
               Not just people in my class, but other friends as well. 
               I didn’t have that kind of passion for my chosen career,and having a neat 5 years of expirience didn't even help me to secure a career in the profession.
              </p>
              <p className="about__text p__color">
               It was one of the most difficult decision I had to make in my life.
               “Do I stay in Civil Engineering or should I switch?" 
               At about that point I gathered up the courage to make the change.
               I started studying about programming on my own.
                I later got enrolled in a Fullstack developer course by Newton School. It took me 6 months of immense dedication and commitment and I really enjoyed it.
                I learned a lot and got interested in what would become the next phase of my life.
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="https://app.luminpdf.com/viewer/62a8af086d7f3d216c220c76">
                  <button className="about btn pointer">Download Cv</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;