import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  state = {
    lat: null,
    errorMessage: ""
  };

  //   display = () => {
  //   };

  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      error => {
        this.setState({ errorMessage: error.message });
      }
    );

    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage} </div>;
    }
    if (this.state.lat && !this.state.errorMessage) {
      return <div> latitude: {this.state.lat} </div>;
    }
    return <div> Loading... </div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
