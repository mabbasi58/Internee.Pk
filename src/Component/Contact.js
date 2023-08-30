import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4 head">Contact Details</h2>
        <div className="row">
          <div className="col-md-6 mx-auto">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
