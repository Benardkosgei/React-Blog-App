import React from 'react';

// Home component representing the home page
const Home = ({ data }) => {
  return (
    <div className="container my-5">
      {/* Introduction Section */}
      <section className="mb-5 services shadow p-3">
        {/* Heading for the introduction */}
        <h1 className="h2 mb-3">Welcome to My Portfolio</h1>
        {/* Introduction content */}
        <p>
          Hi, I'm Dharmang, a passionate graphic designer and website developer.
          This is my portfolio showcasing some of my recent works.
        </p>
      </section>
      {/* Graphic Design Section */}
      <section className="mb-5 services shadow p-3">
        {/* Subheading for the graphic design section */}
        <h2 className="h4 mb-3">Graphic Design</h2>
        {/* Description of graphic design services */}
        <p>
          In the realm of graphic design, I focus on creating visually appealing and
          effective designs. From logos to print materials, I strive to bring
          creativity and uniqueness to every project.
        </p>
      </section>

      {/* Website Development Section */}
      <section className="mb-5 services shadow p-3">
        {/* Subheading for the website development section */}
        <h2 className="h4 mb-3">Website Development</h2>
        {/* Description of website development services */}
        <p>
          As a website developer, I specialize in crafting responsive and user-friendly
          websites. Whether it's a personal blog or a business site, I enjoy bringing
          ideas to life through code and interactive user experiences.
        </p>
      </section>
    </div>
  );
}
// Export the Home component  
export default Home;
