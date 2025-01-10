import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home container text-center py-5">
      <h1 className="display-3 mb-3">Welcome to My Portfolio!</h1>
      <p className="lead">
        Hello! I'm a passionate web developer, and this is my portfolio. Take a look at my projects and learn more about me!
      </p>
      {/* Button that takes you to the About page */}
      <Link to="/about" className="btn btn-primary btn-lg mt-4">
        Learn More About Me
      </Link>
    </div>
  );
};

export default Home;