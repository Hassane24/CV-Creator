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
      description: { text: "" },
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
    console.log(this.state);
  };

  render() {
    const { firstName, lastName, email, number, description } = this.state;
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
        description={description.text}
        descriptionChange={this.handleDescriptionChange}
      ></GeneralInfo>
    );
  }
}

export default Main;
