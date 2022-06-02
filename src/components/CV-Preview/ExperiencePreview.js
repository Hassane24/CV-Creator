const ExperiencePreview = (props) => {
  return (
    <div>
      <h3>Experience</h3>
      <div>
        <span>Years of experience</span>
        <span>
          From:{props.from} To:{props.to}
        </span>
      </div>
      <div>
        <span>Position:{props.position}</span>
        <span>Company:{props.company}</span>
      </div>
    </div>
  );
};

export default ExperiencePreview;
