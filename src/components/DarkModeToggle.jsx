import { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply dark mode to the body and other elements
  useEffect(() => { 
    const bodyClassList = document.body.classList;
    const navbar = document.querySelector('.navbar');
    const footer = document.querySelector('footer');
    const contact = document.querySelector('.contact');
    if (isDarkMode) {
      bodyClassList.add('dark-mode');

      if (navbar) {
        navbar.classList.add('navbar-dark', 'bg-dark');
        navbar.classList.remove('navbar-light', 'bg-light');
      }

      if (footer) {
        footer.classList.add('dark-footer');
        footer.classList.remove('light-footer');
      }

      if (contact) {
        contact.classList.add('dark-contact');
        contact.classList.remove('light-contact');
      }

    } else {
      bodyClassList.remove('dark-mode');

      if (navbar) {
        navbar.classList.add('navbar-light', 'bg-light');
        navbar.classList.remove('navbar-dark', 'bg-dark');
      }

      if (footer) {
        footer.classList.add('light-footer');
        footer.classList.remove('dark-footer');
      }
      
      if (contact) {
        contact.classList.add('light-contact');
        contact.classList.remove('dark-contact');
      }
    }
  }, [isDarkMode]);

  return (
    <button className="btn btn-link nav-link" onClick={toggleTheme}>
      {isDarkMode ? 'Switch to Day Mode' : 'Switch to Night Mode'}
    </button>
  );
};

export default DarkModeToggle;