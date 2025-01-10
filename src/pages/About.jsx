
const About = () => {
  return (
    <div id="about" className="container my-5 py-4">
      <h2 className="text-center mb-4">About Me</h2>
      <div className="row">
        {/* Left Column: Profile Picture */}
        <div className="col-md-4 text-center">
          <img height={200} width={200}
            src="/Avatar.svg" 
            alt="Profile"
            className="img-fluid rounded-circle mb-3"
          />
          <h4>Yangyang Yu</h4>
          <p className="text-muted ">Web Developer</p>
          <a target="_blank" type="button" className="btn btn-light bg-transparent" href="https://drive.google.com/file/d/1h9nXje-QyBrEMvXZrJ9kih8gqiVsUUR0/view?usp=sharing">
          <button type='button' className="btn btn-link" >Resume <i className="bi bi-cloud-arrow-down"></i></button>
          </a>
          
        </div>
        
        {/* Right Column: Description */}
        <div className="col-md-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. 
            Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. 
            Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, 
            mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl 
            sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. 
            Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. 
            Praesent egestas leo in pede. Praesent blandit laoreet nunc. Nulla sit amet est. Quisque vestibulum 
            felis eu felis. Nulla malesuada, metus et malesuada pharetra, lectus urna cursus urna, vitae 
            facilisis libero dui id metus.
          </p>
          <p>
            Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend 
            tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam 
            ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas 
            tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed 
            ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt 
            tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus 
            tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Fusce convallis, mauris imperdiet gravida bibendum, 
            nisl eros porta est, ac bibendum odio metus sit amet ante.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;