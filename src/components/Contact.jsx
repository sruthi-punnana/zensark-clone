import React from 'react';
 
const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Speak With Our Experts</h2>
        <p>Contact us today, and we will schedule a free consultation to find the right solution for your business needs.</p>
        <div className="contact-form">
          <form>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Your Phone" />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn-primary">Get Free Consultation</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
