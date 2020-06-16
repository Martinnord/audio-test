import React, { Component, createRef } from "react";
import UIfx from "uifx";

import logo from "./logo.svg";
import Chime from "./chime.wav";
import "./App.css";

const sound = new UIfx(Chime, { volume: 0.9 });

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = createRef();
    this.state = {
      muted: true,
    };
  }

  componentDidMount() {
    if (this.ref.current !== null) {
      this.ref.current.click();
      // this.ref.current.play();
    }
  }

  handleClick = () => {
    this.ref.current.play();
  };

  toggleMuted = () => {
    this.setState((curr) => ({ muted: !curr.muted }));
  };

  render() {
    console.log("sound", sound);

    console.log(this.ref.current);

    const { muted } = this.state;

    return (
      <div className="App">
        <audio
          loop
          ref={this.ref}
          src={Chime}
          onClick={() => console.log("CLICKED")}
        />
        <button onClick={() => sound.play(0.6)}>PLAY</button>
        <button onClick={this.toggleMuted}>
          MUTED: {muted ? "YES" : "NO"}
        </button>
      </div>
    );
  }
}

export default App;
