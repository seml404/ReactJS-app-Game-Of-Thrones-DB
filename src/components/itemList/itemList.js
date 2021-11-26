import React, { Component } from "react";
import GotService from "../../services/gotService";
import Spinner from "../spinner";

export default class ItemList extends Component {
  state = {
    charList: null,
  };
  componentDidMount() {
    this.gotService.getAllCharacters().then((charList) => {
      this.setState({ charList });
    });
  }

  renderItems(arr) {
    return arr.map((item, index) => {
      return (
        <li
          key={Math.random() * 100 + index * 100}
          className="list-group-item"
          onClick={() => this.props.onCharSelected(item.url)}
        >
          {item.name}
        </li>
      );
    });
  }

  gotService = new GotService();
  render() {
    const { charList } = this.state;

    if (!charList) {
      return <Spinner />;
    }

    const items = this.renderItems(charList);
    return <>{items}</>;
  }
}
