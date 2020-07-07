import React, { Component } from "react";
import Okra from "npm-okrajs";

export default class OkraButton extends Component {
  state = {
    isOkraLoaded: false,
    isOkraError: false,
  };

  callOkra = (e) => {
    e.preventDefault();
    Okra.buildWithOptions({
      name: "Peter the Builder",
      env: "production-sandbox",
      key: "31e87ceb-9e29-5e26-986b-d8ce0727b196", //Your key from the Okra dashboard
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRmZDg2MDVhYTk5MzA2OTA0MWJlYTQiLCJpYXQiOjE1OTE3MjgyMjR9.hVY-vB56VyRh8MoPRg7uWaMZj_hL3IQLxzHkKeU8gqg", //your token from the okra dashboard
      onSuccess: this.handleOkraSuccess,
      onClose: this.handleOkraSuccess,
      onError: this.handleOkraError,
    });

    return;
  };

  handleOkraError = () => {
    console.log("error");
    this.setState({ isOkraError: true });
  };

  handleOkraSuccess = () => {
    console.log("success");
    this.setState({ isOkraLoaded: false });
  };

  render() {
    return (
      <>
        <button onClick={this.callOkra}>Okra</button>
      </>
    );
  }
}
