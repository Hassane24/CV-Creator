import React, { Component } from "react";
import GeneralInfo from "./CV-Form/GeneralInfo";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      firstName: { text: "" },
      lastName: { text: "" },
      email: { text: "" },
      number: { text: "" },
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
  };

  handleEmailChange = (e) => {
    this.setState({
      email: { text: e.target.value },
    });
  };

  handleNumberChange = (e) => {
    this.setState({
      number: { text: e.target.value },
    });
  };

  render() {
    const { firstName, lastName, email, number } = this.state;
    return (
      <GeneralInfo
        firstName={firstName.text}
        firstNameChange={this.handleFirstNameChange}
        lastName={lastName.text}
        lastNameChange={this.handleLastNameChange}
        email={email.text}
        emailChange={this.handleEmailChange}
        number={number.text}
        numberChange={this.handleNumberChange}
      ></GeneralInfo>
    );
  }
}

export default Main;
