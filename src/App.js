import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Main></Main>
      </div>
    );
  }
}

export default App;
