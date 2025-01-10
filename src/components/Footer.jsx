import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-center py-4">
      <div className="container">
        <p className="mb-0 ">
          &copy; {new Date().getFullYear()} Yangyang Yu's Portfolio | All Rights Reserved
        </p>
        <div>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
          <i className="bi bi-linkedin"></i> LinkedIn
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
          <i className="bi bi-github"></i> GitHub
          </a>
          {/* Add more links as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;