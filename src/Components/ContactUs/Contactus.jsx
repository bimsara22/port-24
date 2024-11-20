import React from "react";
import image from '../../Images/contact.jpg'

function Contactus() {
  return (
    <div>
      <section className="contactus-section">
        <div className="container">
        <div className="image-container">
              <img src={image} alt="image" className="image-contact"/>
            </div>

          <div className="contact-us">
            
            <div className="message">
                <h3>We are here to help</h3>
                <div className="description">
              <p>
                Create horizontal forms with the grid by adding the .row class
                to form groups and using the .col-*-* classes to specify the
                width of your labels and controls. Be sure to add
                .col-form-label to your s as well so they’re vertically centered
                with their associated form controls.
              </p>
              </div>
            </div>

            <form className="form-fields">
              <>
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                />

                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                />
               <input type="email" class="form-control" id="inputEmail3" placeholder="Email"/>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Mobile No"
                />

                <button type="button" class="btn btn-primary">
                  Submit
                </button>
              </>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contactus;
