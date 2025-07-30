import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Building Custom Generative AI Solutions",
      description: "Transforming businesses with cutting-edge AI technology",
      cta: "View More"
    },
    {
      title: "Microsoft Dynamics Finance and Operations",
      description: "We specialize in maintaining Dynamics 365 Finance and Operations, maximizing its value for your business.",
      cta: "Book a Demo"
    },
    {
      title: "Transforming Healthcare with predictive AI solutions",
      description: "AI solutions in weeks, not months.",
      cta: "Partner with us"
    },
    {
      title: "Capitalize on the Power of Value-Driven AI in Financial Services",
      description: "Empowering financial institutions with intelligent solutions",
      cta: "Book a Demo"
    },
    {
      title: "Empower your businesses with an unparalleled 360-degree view",
      description: "Complete visibility of consumers and operations",
      cta: "View More"
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>What We Offer</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="btn-outline">{service.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
