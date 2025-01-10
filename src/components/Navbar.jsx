
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle'; // Import DarkModeToggle

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="nav-link navbar-brand" to="/">
          <span>
            <img src="/favicon-32x32.png" alt="logo" />
          </span>
          Yangyang Yu
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link btn btn-light" to="/">
                <i className="bi bi-house"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-light" to="/about">
                <i className="bi bi-file-person"></i> About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-light" to="/projects">
                <i className="bi bi-briefcase"></i> Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-light" to="/contact">
                <i className="bi bi-envelope"></i> Contact
              </Link>
            </li>
            <li className="nav-item">
              <DarkModeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;