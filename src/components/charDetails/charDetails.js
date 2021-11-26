import React, { Component } from "react";
// import "./charDetails.css";

import GotService from "../../services/gotService";
// import Spinner from "../spinner";

export default class CharDetails extends Component {
  constructor(props) {
    super(props);
    this.updateChar = this.updateChar.bind(this);
  }

  state = {
    char: null,
  };

  componentDidMount() {
    this.updateChar();
  }

  componentDidUpdate(prevProps) {
    if (this.props.charId !== prevProps.charId) {
      this.updateChar();
    }
  }

  async updateChar() {
    console.log("started Update char");
    const { charId } = this.props;
    console.log(charId);
    if (!charId) {
      return;
    }
    let char = await this.gotService.getCharacter(charId);
    console.log(char);
    this.setState(() => {
      return { char };
    });
    console.log(this.state.char);
    this.render();
  }

  gotService = new GotService();

  render() {
    if (!this.state.char) {
      return <span className="select-error">Please, select a character</span>;
    }
    console.log(this.state.char);
    const { name, gender, born, died, culter } = this.state.char;
    return (
      <div className="char-details rounded">
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
            <span>{culter}</span>
          </li>
        </ul>
      </div>
    );
  }
}
