import React, { Component } from "react";
import GeneralInfo from "./CV-Form/GeneralInfo";
import Education from "./CV-Form/Education";
import Experience from "./CV-Form/Experience";
import Preview from "./CV-Preview/Preview";
import "../styles/Main.css";
import "../styles/form-styles/Form.css";
import "../styles/preview-styles/Preview.css";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      renderPreview: false,
      // General state
      general: {
        firstName: { text: "" },
        lastName: { text: "" },
        email: { text: "" },
        number: { text: "" },
        description: { text: "" },
      },
      // Education state
      education: {
        university: { text: "" },
        degree: { text: "" },
        subject: { text: "" },
        from: { text: "" },
        to: { text: "" },
      },
      // Experience state
      experience: {
        position: { text: "" },
        company: { text: "" },
        from: { text: "" },
        to: { text: "" },
      },
    };
  }

  // General section event handlers

  handleFirstNameChange = (e) => {
    this.setState((prevState) => ({
      general: { ...prevState.general, firstName: { text: e.target.value } },
    }));
  };

  handleLastNameChange = (e) => {
    this.setState((prevState) => ({
      general: { ...prevState.general, lastName: { text: e.target.value } },
    }));
  };

  handleEmailChange = (e) => {
    this.setState((prevState) => ({
      general: { ...prevState.general, email: { text: e.target.value } },
    }));
  };

  handleNumberChange = (e) => {
    this.setState((prevState) => ({
      general: { ...prevState.general, number: { text: e.target.value } },
    }));
  };

  handleDescriptionChange = (e) => {
    this.setState((prevState) => ({
      general: { ...prevState.general, description: { text: e.target.value } },
    }));
  };

  // Education section event handlers

  handleUniChange = (e) => {
    this.setState((prevState) => ({
      education: {
        ...prevState.education,
        university: { text: e.target.value },
      },
    }));
  };

  handleDegreeChange = (e) => {
    this.setState((prevState) => ({
      education: { ...prevState.education, degree: { text: e.target.value } },
    }));
  };

  handleSubjectChange = (e) => {
    this.setState((prevState) => ({
      education: { ...prevState.education, subject: { text: e.target.value } },
    }));
  };

  handleFromChange = (e) => {
    this.setState((prevState) => ({
      education: { ...prevState.education, from: { text: e.target.value } },
    }));
  };

  handleToChange = (e) => {
    this.setState((prevState) => ({
      education: { ...prevState.education, to: { text: e.target.value } },
    }));
  };

  // Experience section event handlers

  handlePositionChange = (e) => {
    this.setState((prevState) => ({
      experience: {
        ...prevState.experience,
        position: { text: e.target.value },
      },
    }));
  };

  handleCompanyChange = (e) => {
    this.setState((prevState) => ({
      experience: {
        ...prevState.experience,
        company: { text: e.target.value },
      },
    }));
  };

  handleFromExChange = (e) => {
    this.setState((prevState) => ({
      experience: { ...prevState.experience, from: { text: e.target.value } },
    }));
  };

  handleToExChange = (e) => {
    this.setState((prevState) => ({
      experience: { ...prevState.experience, to: { text: e.target.value } },
    }));
  };

  // onClick handlers

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.setState({ renderPreview: !this.state.renderPreview });
  };

  render() {
    const { general, education, experience } = this.state;
    if (this.state.renderPreview)
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
          <button type="submit" onClick={this.handleOnSubmit}>
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
              firstNameChange={this.handleFirstNameChange}
              lastName={general.lastName.text}
              lastNameChange={this.handleLastNameChange}
              email={general.email.text}
              emailChange={this.handleEmailChange}
              number={general.number.text}
              numberChange={this.handleNumberChange}
              description={general.description.text}
              descriptionChange={this.handleDescriptionChange}
            ></GeneralInfo>
            <Education
              uni={education.university.text}
              uniChange={this.handleUniChange}
              degree={education.degree.text}
              degreeChange={this.handleDegreeChange}
              subject={education.subject.text}
              subjectChange={this.handleSubjectChange}
              from={education.from.text}
              fromChange={this.handleFromChange}
              to={education.to.text}
              toChange={this.handleToChange}
            ></Education>
            <Experience
              position={experience.position.text}
              positionChange={this.handlePositionChange}
              company={experience.company.text}
              companyChange={this.handleCompanyChange}
              from={experience.from.text}
              fromChange={this.handleFromExChange}
              to={experience.to.text}
              toChange={this.handleToExChange}
            ></Experience>
            <button type="submit" onClick={this.handleOnSubmit}>
              Check your CV
            </button>
          </form>
        </div>
      );
  }
}

export default Main;
