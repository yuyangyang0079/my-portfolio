
const Projects = () => {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-grid container py-5">
        <div className="project-card">
          <h3>Project 1</h3>
          <p>Description of Project 1</p>
          <ul>
            <li>Technology 1</li>
            <li>Technology 2</li>
          </ul>
          <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>

        <div className="project-card">
          <h3>Project 2</h3>
          <p>Description of Project 2</p>
          <ul>
            <li>Technology 1</li>
            <li>Technology 2</li>
          </ul>
          <a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>

        {/* Add more projects here */}
      </div>
    </div>
  );
};

export default Projects;