import React, { Component } from "react";

// import "./randomChar.css";

import GotService from "../../services/gotService";
import Spinner from "../spinner";
import ErrorMessage from "../errorMessage";
export default class RandomChar extends Component {
  constructor(props) {
    super(props);
    this.updateChar = this.updateChar.bind(this);
    this.onError = this.onError.bind(this);
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

  onError = (err) => {
    this.setState({ error: true, loading: false });
  };

  async updateChar() {
    try {
      const id = Math.floor(Math.random() * 100);
      let info = await this.gotService.getCharacter(id);
      this.setState({ info, loading: false });
    } catch (error) {
      this.onError();
    }
  }

  render() {
    const { loading, error } = this.state;
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const toBeRendered = !(loading || error) ? (
      <MainContent values={this.state.info} />
    ) : null;
    return (
      <div className="char-details rounded">
        {errorMessage}
        {spinner}
        {toBeRendered}
      </div>
    );
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
