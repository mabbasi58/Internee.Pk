import React from 'react';

function AboutMe() {
  return (
    <section id="about" className="py-5 mt-2">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 d-flex flex-column">
            <h2 className="fw-bold">👋 Hello I'm</h2>
            <h2 className="fw-bold">SOFTWARE DEVELOPER</h2>
            <p className='para'>
              Hello! I'm MUQADUS ABBASI, a passionate web developer with a keen interest in creating modern and user-friendly websites.
              With a strong foundation in HTML, CSS, and JavaScript, I enjoy turning complex problems into simple, beautiful, and intuitive solutions.
              I'm constantly learning and exploring new technologies to expand my skillset and stay up-to-date in the fast-paced world of web development.
            </p>
          </div>
          <div className="col-md-6">
            <img src="portfolio.png" alt=" " className="img-fluid rounded-circle" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
