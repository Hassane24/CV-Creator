import React, { Component } from "react";
import GeneralInfo from "./CV-Form/GeneralInfo";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      firstName: { text: "" },
      lastName: { text: "" },
      email: { text: "" },
    };
  }

  handleFirstNameChange = (e) => {
    this.setState({
      firstName: { text: e.target.value },
    });
  };

  handleLastNameChange = (e) => {
    this.setState({
      lastName: { text: e.target.value },
    });

    console.log(this.state);
  };

  handleEmailChange = (e) => {
    this.setState({
      email: { text: e.target.value },
    });
  };

  render() {
    const { firstName, lastName, email } = this.state;
    return (
      <GeneralInfo
        firstName={firstName.text}
        firstNameChange={this.handleFirstNameChange}
        lastName={lastName.text}
        lastNameChange={this.handleLastNameChange}
        email={email.text}
        emailChange={this.handleEmailChange}
      ></GeneralInfo>
    );
  }
}

export default Main;
