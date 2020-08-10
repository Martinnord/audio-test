import React, { Component, createRef } from "react";
import logo from "./logo.svg";
import Chime from "./chime.wav";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = createRef();
    this.state = {
      muted: true,
    };
  }

  // componentDidMount() {
  //   if (this.ref.current !== null) {
  //     // this.ref.current.click();
  //     this.setState({ muted: false });
  //     // this.ref.current.play();
  //   }
  // }

  onPlay = () => {
    this.setState({ muted: false });
    this.ref.current.play();
  };

  render() {
    console.log(this.ref.current);

    const { muted } = this.state;

    return (
      <div className="App" style={{ height: "100vh" }}>
        <h3>{window.location.host.split(".")[0]} is your sub domain</h3>
        <iframe
          allow="autoplay"
          id="audio"
          src=""
          style={{ display: "none" }}
        ></iframe>
        <audio id="player" autoPlay loop>
          <source src={Chime} type="audio/wav" />
        </audio>

        {/* <audio loop autoPlay muted={false} ref={this.ref} src={Chime} />
        <button onClick={this.toggleMuted}>
          MUTED: {muted ? "YES" : "NO"}
        </button> */}
      </div>
    );
  }
}

export default App;
