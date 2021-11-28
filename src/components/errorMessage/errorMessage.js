import React, { Component } from "react";
import "./errorMessage.css";
// import img from "./img/fail.jpg";
export default class ErrorMessage extends Component {
  render() {
    return (
      <div className="img-wrapper">
        <img src={process.env.PUBLIC_URL + "/img/fail.jpg"} alt="err pic"></img>
        {/* <img src={img} alt="err pic"></img> */}
        <span>Error happened</span>
      </div>
    );
  }
}
