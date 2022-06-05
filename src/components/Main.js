import React, { useState } from "react";
import GeneralInfo from "./CV-Form/GeneralInfo";
import Education from "./CV-Form/Education";
import Experience from "./CV-Form/Experience";
import Preview from "./CV-Preview/Preview";
import "../styles/Main.css";
import "../styles/form-styles/Form.css";
import "../styles/preview-styles/Preview.css";

const Main = () => {
  const [state, setState] = useState({
    renderPreview: false,
  });

  const [general, setGeneral] = useState({
    firstName: { text: "" },
    lastName: { text: "" },
    email: { text: "" },
    number: { text: "" },
    description: { text: "" },
  });

  const [education, setEducation] = useState({
    university: { text: "" },
    degree: { text: "" },
    subject: { text: "" },
    from: { text: "" },
    to: { text: "" },
  });

  const [experience, setExperience] = useState({
    position: { text: "" },
    company: { text: "" },
    from: { text: "" },
    to: { text: "" },
  });

  // General section event handlers

  const handleFirstNameChange = (e) => {
    setGeneral((prevState) => {
      const newGeneral = { ...prevState, firstName: { text: e.target.value } };
      return newGeneral;
    });
  };

  const handleLastNameChange = (e) => {
    setGeneral((prevState) => {
      const newGeneral = { ...prevState, lastName: { text: e.target.value } };
      return newGeneral;
    });
  };

  const handleEmailChange = (e) => {
    setGeneral((prevState) => {
      const newGeneral = { ...prevState, email: { text: e.target.value } };
      return newGeneral;
    });
  };

  const handleNumberChange = (e) => {
    setGeneral((prevState) => {
      const newGeneral = { ...prevState, number: { text: e.target.value } };
      return newGeneral;
    });
  };

  const handleDescriptionChange = (e) => {
    setGeneral((prevState) => {
      const newGeneral = {
        ...prevState,
        description: { text: e.target.value },
      };
      return newGeneral;
    });
  };

  // Education section event handlers

  const handleUniChange = (e) => {
    setEducation((prevState) => {
      const newEducation = {
        ...prevState,
        university: { text: e.target.value },
      };
      return newEducation;
    });
  };

  const handleDegreeChange = (e) => {
    setEducation((prevState) => {
      const newEducation = {
        ...prevState,
        degree: { text: e.target.value },
      };
      return newEducation;
    });
  };

  const handleSubjectChange = (e) => {
    setEducation((prevState) => {
      const newEducation = {
        ...prevState,
        subject: { text: e.target.value },
      };
      return newEducation;
    });
  };

  const handleFromChange = (e) => {
    setEducation((prevState) => {
      const newEducation = {
        ...prevState,
        from: { text: e.target.value },
      };
      return newEducation;
    });
  };

  const handleToChange = (e) => {
    setEducation((prevState) => {
      const newEducation = {
        ...prevState,
        to: { text: e.target.value },
      };
      return newEducation;
    });
  };

  // Experience section event handlers

  const handlePositionChange = (e) => {
    setExperience((prevState) => {
      const newExperience = {
        ...prevState,
        position: { text: e.target.value },
      };
      return newExperience;
    });
  };

  const handleCompanyChange = (e) => {
    setExperience((prevState) => {
      const newExperience = {
        ...prevState,
        company: { text: e.target.value },
      };
      return newExperience;
    });
  };

  const handleFromExChange = (e) => {
    setExperience((prevState) => {
      const newExperience = {
        ...prevState,
        from: { text: e.target.value },
      };
      return newExperience;
    });
  };

  const handleToExChange = (e) => {
    setExperience((prevState) => {
      const newExperience = {
        ...prevState,
        to: { text: e.target.value },
      };
      return newExperience;
    });
  };

  // onClick handlers

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setState({ renderPreview: !state.renderPreview });
  };

  if (state.renderPreview)
    return (
      <div className="main">
        <Preview
          firstName={general.firstName.text}
          lastName={general.lastName.text}
          number={general.number.text}
          job={experience.position.text}
          position={experience.position.text}
          to={experience.to.text}
          company={experience.company.text}
          toEd={education.to.text}
          email={general.email.text}
          description={general.description.text}
          fromEd={education.from.text}
          uni={education.university.text}
          degree={education.degree.text}
          from={experience.from.text}
          subject={education.subject.text}
        ></Preview>
        <button className="edit-btn" type="submit" onClick={handleOnSubmit}>
          Edit your CV
        </button>
      </div>
    );
  else
    return (
      <div className="main">
        <form>
          <GeneralInfo
            firstName={general.firstName.text}
            firstNameChange={handleFirstNameChange}
            lastName={general.lastName.text}
            lastNameChange={handleLastNameChange}
            email={general.email.text}
            emailChange={handleEmailChange}
            number={general.number.text}
            numberChange={handleNumberChange}
            description={general.description.text}
            descriptionChange={handleDescriptionChange}
          ></GeneralInfo>
          <Education
            uni={education.university.text}
            uniChange={handleUniChange}
            degree={education.degree.text}
            degreeChange={handleDegreeChange}
            subject={education.subject.text}
            subjectChange={handleSubjectChange}
            from={education.from.text}
            fromChange={handleFromChange}
            to={education.to.text}
            toChange={handleToChange}
          ></Education>
          <Experience
            position={experience.position.text}
            positionChange={handlePositionChange}
            company={experience.company.text}
            companyChange={handleCompanyChange}
            from={experience.from.text}
            fromChange={handleFromExChange}
            to={experience.to.text}
            toChange={handleToExChange}
          ></Experience>
          <button className="check-btn" type="submit" onClick={handleOnSubmit}>
            Check your CV
          </button>
        </form>
      </div>
    );
};

export default Main;
