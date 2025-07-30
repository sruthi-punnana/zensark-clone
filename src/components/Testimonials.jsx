import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Zensark has been an invaluable partner in transforming Salcit's AI-based respiratory health platform, Swaasa®. They addressed our key challenges with exceptional skill and expertise, delivering a scalable, high-performing SaaS solution with a user-friendly UI.",
      author: "Narayana Rao Sripada"
    },
    {
      text: "Zensark has been an exceptional partner for Geocon, providing us with top-notch service and support in managing our Microsoft Dynamics 365 - Finance and Operations instance.",
      author: "Brad Warren"
    },
    {
      text: "We treat Zensark as the extended IT arm of our company. We collaborate extensively and seek their suggestions, even on the integration of our business with our web presence.",
      author: "Peter Schneeberger"
    },
    {
      text: "Zensark is very good to work with. For us they are a great partner and appreciate that they are very responsive and work with us closely as needed.",
      author: "Sharon Bergquist"
    },
    {
      text: "Zensark has provided us good candidates with great skills and we are happy with their services.",
      author: "Manu Krishna"
    },
    {
      text: "Zensark was very responsive and highly adaptive to our evolving business requirements.",
      author: "Biren Shah"
    }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2>What Our Clients Say</h2>
        <p>We are committed to creating value and making an impact to our client's business. Here are few of the amazing things our customers say about us.</p>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p>"{testimonial.text}"</p>
              <strong>- {testimonial.author}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
