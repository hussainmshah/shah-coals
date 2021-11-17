import React from "react";
import contactImg from "../../assets/img/contact.png";
const contact = () => {
  return (
    <contact>
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-img">
            <img src = {contactImg} alt ="Contact Us" />
          </div>
          <div className ="contact-right">
            <div>
                <h2>Contact Us</h2>
                <p>Turpis facilisis tempor pulvinar in lobortis ornare magna.</p>
            </div>

            <div className="contact-form">
              <form>
                  <input placeholder ="First Name"/>
                  <input className ="right-input" placeholder ="Last Name"/>
                  <input placeholder ="Email address"/>
                  <input className ="right-input" placeholder ="Phone Number"/>
                  <textarea  placeholder ="Description"/>
              </form>
                <div className="form-button">
              <button>Get a Quote</button>
              <p>We don’t sell your email and spam</p>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </contact>
  );
};

export default contact;
