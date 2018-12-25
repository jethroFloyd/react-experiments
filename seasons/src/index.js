import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, long: null, errorMessage: "" };
  }

  componentDidMount() {
    console.log("The component rendered");
    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log("Received geolocation");
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude
        });
        console.log("Set geolocation");
      },
      err => {
        console.log(err.message);
        this.setState({ errorMessage: err.message });
      }
    );
  }

  componentDidUpdate() {
    console.log("The component updated");
  }
  // Helper function for rendering conditional content.
  renderContent() {
    if (!this.state.lat && !this.state.errorMessage) return <Spinner />;
    if (!this.state.lat && this.state.errorMessage)
      return <div>Error: {this.state.errorMessage}</div>;
    return <SeasonDisplay lat={this.state.lat} />;
  }

  render() {
    console.log("Rendering Done!");
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
