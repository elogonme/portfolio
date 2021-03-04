import React from "react";

function Contact() {

  return (
    <div className="container main">
        <div className="card mt-4 col-lg-7 bg-light shadow animate__animated animate__zoomIn">
          <div className="card-body pb-0">
            <h2 className="card-title border-bottom pb-2 text-info"><i className="far fa-edit mr-2 text-secondary"></i>Contact</h2>
          </div>
          <div className="text-center display-6">E-mail me at 
            <a href="mailto:eldarha@gmail.com" target="_blank" rel="noreferrer" 
              className="text-info font-weight-bold"> eldarha@gmail.com </a> 
            or contact using form below</div>

          <form id="fs-frm" name="simple-contact-form" acceptCharset="utf-8" 
            action="https://formspree.io/f/moqpjoga" method="post" className="ml-4 mr-4">
            <fieldset id="fs-frm-inputs">
              <div className="form-group">
                  <label htmlFor="full-name">Name</label>
                  <input type="text" name="name" className="form-control col-md-12" id="full-name" 
                    aria-describedby="name" placeholder="First and Last name" required="" />
              </div>
              <div className="form-group">
                  <label htmlFor="email-address">Email</label>
                  <input type="email" name="_replyto" className="form-control col-md-12" id="email-address" 
                    aria-describedby="email" placeholder="Email" required="" />
              </div>
              <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" className="form-control col-md-12" id="message" rows="3" 
                    placeholder="Message" required=""></textarea>
              </div>
            </fieldset>
            <button type="submit" className="btn btn-info mb-4">Submit</button>
          
            <a href="https://github.com/elogonme/" target="_blank" rel="noreferrer" title="GitHub" 
              className="text-secondary float-right mr-sm-4 mt-1">
              <i className="fab fab fa-github fa-2x px-1 zoom"></i>
            </a>
            <a href="https://www.linkedin.com/in/eldarhumbatov/" target="_blank" rel="noreferrer" 
              title="LinkedIn" className="text-secondary float-right mr-sm-4 mt-1">
              <i className="fab fa-linkedin-in fa-2x px-1 zoom"></i>
            </a>
            <a href="mailto:eldarha@gmail.com" target="_blank" rel="noreferrer" title="E-mail" 
              className="text-secondary float-right mr-sm-4 mt-1">
              <i className="fas fa-at fa-2x px-1 zoom"></i>
            </a>
            <a href="tel:+1-416-823-4666" target="_blank" rel="noreferrer" title="Phone" 
              className="text-secondary float-right mr-sm-4 mt-1">
              <i className="fas fa-phone-square fa-2x px-1 zoom"></i>
            </a>
          </form>
        </div>   
      </div>
  );
}

export default Contact;
