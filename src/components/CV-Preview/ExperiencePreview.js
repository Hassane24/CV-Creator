const ExperiencePreview = (props) => {
  return (
    <div className="exp-container">
      <h3>Experience</h3>
      <div className="experience">
        <span>Years of experience</span>
        <span>
          From: {props.from} To: {props.to}
        </span>
      </div>
      <div>
        <span>Position:{props.position}</span>
        <span>Company:{props.company}</span>
        <h4>Description</h4>
        <span>{props.description}</span>
      </div>
    </div>
  );
};

export default ExperiencePreview;
