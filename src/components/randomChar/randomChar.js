import React, { Component } from "react";

// import "./randomChar.css";

import GotService from "../../services/gotService";
import Spinner from "../spinner";
export default class RandomChar extends Component {
  constructor(props) {
    super(props);
    this.updateChar = this.updateChar.bind(this);
  }

  state = {
    info: {},
    loading: true,
    error: false,
  };

  gotService = new GotService();

  componentDidMount() {
    this.updateChar();
    this.timerId = setInterval(() => {
      this.updateChar();
    }, 1500);
  }
  componentWillUnmount() {
    console.log("unmounted");
    clearInterval(this.timerId);
  }

  // onError = (error) => {
  //   this.setState({ error: true, loading: false });
  // };

  async updateChar() {
    try {
      const id = Math.floor(Math.random() * 141 + 1);
      let info = await this.gotService.getCharacter(id);
      this.setState({ info, loading: false });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { loading } = this.state;
    const toBeRendered = loading ? (
      <Spinner />
    ) : (
      <MainContent values={this.state.info} />
    );
    return <div className="char-details rounded">{toBeRendered}</div>;
  }
}

const MainContent = ({ values }) => {
  // console.log(props);
  const { name, gender, born, died, culture } = values;
  return (
    <>
      <h4>{name}</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Gender</span>
          <span>{gender}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Born</span>
          <span>{born}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Died</span>
          <span>{died}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Culture</span>
          <span>{culture}</span>
        </li>
      </ul>
    </>
  );
};
