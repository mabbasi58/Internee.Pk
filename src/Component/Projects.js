import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Header.css'; 
function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch project data from projects.json
    fetch('/project.json')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching project data:', error));
  }, []);

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3  mb-4">
            <h2 className='head'>Projects</h2>
          </div>
        </div>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
