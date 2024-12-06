import React from "react";
import image from "../../Images/contact.jpg";
import call from "../../Images/phone-call.png";
import email from "../../Images/image.png";
import address from "../../Images/location-pin.png";

function Contactus() {
  const details = [
    { label: "Call", value: "0781402190",image:call },
    { label: "Email", value: "yasindu@gmail.com",image:email },
    { label: "Address", value: "160/1,Magalegoda",image:address },
  ];

  return (
    <div>
      <section className="contactus-section">
        <div className="container">
          <div className="contact-us">
            <div className="message">
              <div className="image-container">
                <img src={image} alt="image" className="image-contact" />
              </div>

              <h3>Lets work together</h3>
              <div className="description">
                <p>
                  Create horizontal forms with the grid by adding the .row class
                  to form groups and using the .col-*-* classes to specify the
                  width of your labels and controls. Be sure to add
                  .col-form-label to your s as well so they’re vertically
                  centered with their associated form controls.
                </p>
              </div>

            </div>

            <form className="form-fields">
              <h1 className="contact-title">Contact Me</h1>
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
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail3"
                  placeholder="Email"
                />
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
      <div className="contact-methods">
                {details.map((value, index) => (
                  <div className="contact-box" key={index}>
                    <div className="contact-img-container">
                      <img src={value.image }alt="call" className="contact-image" />
                    </div>
                    <div className="contact-label">
                      <h6>{value.label}</h6>
                      <h6>{value.value}</h6>
                    </div>
                  </div>
                ))}
              </div>
              
    </div>
  );
}

export default Contactus;
