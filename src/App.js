import React, { Component, createRef } from "react";
import logo from "./logo.svg";
import Chime from "./chime.wav";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = createRef();
  }

  componentDidMount() {
    if (this.ref.current !== null) {
      this.ref.current.play();
    }
  }

  render() {
    return (
      <div className="App">
        <audio loop ref={this.ref} src={Chime} />
        <button onClicK={this.ref.current.play}>PLAY</button>
      </div>
    );
  }
}

export default App;
