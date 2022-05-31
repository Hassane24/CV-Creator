import React, { Component } from "react";
import GeneralInfo from "./CV-Form/GeneralInfo";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      name: {
        text: "",
      },
    };
  }

  handleNameInput = (e) => {
    this.setState({
      name: { text: e.target.value },
    });
  };

  render() {
    return (
      <GeneralInfo
        name={this.state.name.text}
        nameChange={this.handleNameInput}
      ></GeneralInfo>
    );
  }
}

export default Main;
