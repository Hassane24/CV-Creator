import React, { Component } from "react";
import GeneralInfo from "./CV-Form/GeneralInfo";
import Education from "./CV-Form/Education";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      // general state
      firstName: { text: "" },
      lastName: { text: "" },
      email: { text: "" },
      number: { text: "" },
      description: { text: "" },
      // education state
      university: { text: "" },
      degree: { text: "" },
      subject: { text: "" },
      from: { text: "" },
      to: { text: "" },
    };
  }

  handleFirstNameChange = (e) => {
    this.setState({ firstName: { text: e.target.value } });
  };

  handleLastNameChange = (e) => {
    this.setState({ lastName: { text: e.target.value } });
  };

  handleEmailChange = (e) => {
    this.setState({ email: { text: e.target.value } });
  };

  handleNumberChange = (e) => {
    this.setState({ number: { text: e.target.value } });
  };

  handleDescriptionChange = (e) => {
    this.setState({ description: { text: e.target.value } });
  };

  handleUniChange = (e) => {
    this.setState({ university: { text: e.target.value } });
  };
  handleDegreeChange = (e) => {
    this.setState({ degree: { text: e.target.value } });
  };
  handleSubjectChange = (e) => {
    this.setState({ subject: { text: e.target.value } });
  };
  handleFromChange = (e) => {
    this.setState({ from: { text: e.target.value } });
  };
  handleToChange = (e) => {
    this.setState({ to: { text: e.target.value } });
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      number,
      description,
      university,
      degree,
      subject,
      from,
      to,
    } = this.state;
    return (
      <form>
        <GeneralInfo
          firstName={firstName.text}
          firstNameChange={this.handleFirstNameChange}
          lastName={lastName.text}
          lastNameChange={this.handleLastNameChange}
          email={email.text}
          emailChange={this.handleEmailChange}
          number={number.text}
          numberChange={this.handleNumberChange}
          description={description.text}
          descriptionChange={this.handleDescriptionChange}
        ></GeneralInfo>
        <Education
          uni={university.text}
          uniChange={this.handleUniChange}
          degree={degree.text}
          degreeChange={this.handleDegreeChange}
          subject={subject.text}
          subjectChange={this.handleSubjectChange}
          from={from.text}
          fromChange={this.handleFromChange}
          to={to.text}
          toChange={this.handleToChange}
        ></Education>
      </form>
    );
  }
}

export default Main;
