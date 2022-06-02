import FullName from "./FullName";
import ExperiencePreview from "./ExperiencePreview";
import EducationPreview from "./EducationPreview";
const Preview = (props) => {
  return (
    <div>
      <FullName
        firstName={props.firstName}
        lastName={props.lastName}
        number={props.number}
        email={props.email}
        job={props.job}
      ></FullName>
      <ExperiencePreview
        from={props.from}
        to={props.to}
        position={props.position}
        company={props.company}
        description={props.description}
      ></ExperiencePreview>
      <EducationPreview
        from={props.fromEd}
        to={props.toEd}
        uni={props.uni}
        degree={props.degree}
        subject={props.subject}
      ></EducationPreview>
    </div>
  );
};

export default Preview;
