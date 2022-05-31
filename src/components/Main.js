import React, { Component } from "react";
import GeneralInfo from "./CV-Form/GeneralInfo";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      name: {
        text: "",
      },
      email: {
        text: "",
      },
    };
  }

  handleNameInput = (e) => {
    this.setState({
      name: { text: e.target.value },
    });
  };

  handleEmailChange = (e) => {
    this.setState({
      email: { text: e.target.value },
    });
  };

  render() {
    return (
      <GeneralInfo
        name={this.state.name.text}
        nameChange={this.handleNameInput}
        email={this.state.email.text}
        emailChange={this.handleEmailChange}
      ></GeneralInfo>
    );
  }
}

export default Main;
