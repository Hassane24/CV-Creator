const EducationPreview = (props) => {
  return (
    <div>
      <h3>Education</h3>
      <div>
        <div>
          <span>Years spent studying</span>
          <span>
            From: {props.from} To: {props.to}
          </span>
        </div>
        <div>
          <span>University: {props.uni}</span>
          <span>Degree: {props.degree}</span>
          <span>Subject: {props.subject}</span>
        </div>
      </div>
    </div>
  );
};

export default EducationPreview;
