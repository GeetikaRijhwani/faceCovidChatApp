import React, { Component } from "react";
// import Chat from "./Chat";
import { Link } from "react-router-dom";

export default class TalkButton extends Component {
  render() {
    return (
      <div>
        <Link to="/chat" className="btn btn-primary talkbtn">Talk to Expert</Link>
      </div>
    );
  }
}
