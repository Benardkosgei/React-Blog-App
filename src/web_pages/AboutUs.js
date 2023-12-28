import React from 'react';
// About component representing the about page
const About = ({ data }) => {
  return (
    <div className="container mt-5">
      {/* Heading for the About Us page */}
      <h1>About Us</h1>
      <p>Welcome to our company's about page!</p>
      {/* Main content section with a border */}
      <div className="row border mb-5 py-3">
        {/* Left column with text content */}
        <div className="col-md-6">
          {/* Subheading */}
          <h2>Let's Create Together</h2>
          {/* Description */}
          <p>
            Whether you're a startup looking for a brand facelift, a business in need of a user-friendly website, or a visionary with a software idea, I'm here to bring your concepts to life.
            Let's embark on a journey where design meets innovation, and creativity knows no bounds.
            Ready to create something extraordinary? Let's connect and start crafting your digital masterpiece!
          </p>
         
        </div>
        {/* Right column with an image */}
        <div className='col-md-6 col-lg-6'>
          <img src="images/service.jpg" className='img-fluid' alt="Services" />
        </div>
        {/* Full-width column for the CTA (Call to Action) */}
        <div className='col-lg-12 '>
          {/* CTA button to navigate to the contact page */}
          <a href='/contact' className='btn btn-primary btn-lg'>
            Let's connect and start crafting <i className='bi bi-arrow-right'></i>
          </a>
        </div>
      </div>
    </div>
  );
}
// Export the About component as the default export
export default About;
