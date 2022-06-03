const EducationPreview = (props) => {
  return (
    <div className="education-container">
      <h3>Education</h3>

      <div className="from-to">
        <span>Years spent studying</span>
        <span>
          From: {props.from} To: {props.to}
        </span>
      </div>
      <div className="uni-deg-sub">
        <span>University: {props.uni}</span>
        <span>Degree: {props.degree}</span>
        <span>Subject: {props.subject}</span>
      </div>
    </div>
  );
};

export default EducationPreview;
