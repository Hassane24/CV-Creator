import React, { Component } from "react";
import GeneralInfo from "./CV-Form/GeneralInfo";
import Education from "./CV-Form/Education";

class Main extends Component {
  constructor() {
    super();
    this.state = {
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
    console.log(this.state);
  };
  handleToChange = (e) => {
    this.setState((prevState) => ({
      education: { ...prevState.education, to: { text: e.target.value } },
    }));
  };

  // Experience section event handlers

  render() {
    const { general, education, experience } = this.state;
    return (
      <div>
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
      </div>
    );
  }
}

export default Main;
