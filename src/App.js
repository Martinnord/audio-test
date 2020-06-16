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
  //     this.ref.current.play();
  //   }
  // }

  handleClick = () => {
    this.ref.current.play();
  };

  toggleMuted = () => {
    this.setState((curr) => ({ muted: !curr.muted }));
  };

  render() {
    console.log(this.ref.current);

    const { muted } = this.state;

    return (
      <div className="App">
        <audio autoPlay loop ref={this.ref} src={Chime} />
        <button onClick={this.handleClick}>PLAY</button>
        <button onClick={this.toggleMuted}>
          MUTED: {muted ? "YES" : "NO"}
        </button>
      </div>
    );
  }
}

export default App;
