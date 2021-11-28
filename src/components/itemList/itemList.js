import React, { Component } from "react";
// import GotService from "../../services/gotService";
import Spinner from "../spinner";
export default class ItemList extends Component {
  state = {
    // charList: null,
    itemList: null,
  };
  // componentDidMount() {
  //   this.gotService.getAllCharacters().then((charList) => {
  //     this.setState({ charList });
  //   });
  // }

  componentDidMount() {
    const { getData } = this.props;
    getData().then((itemList) => {
      this.setState({ itemList });
    });
  }

  renderItems(arr) {
    return arr.map((item, index) => {
      // const { id } = item;
      const label = this.props.renderItem(item);
      return (
        <li
          key={Math.random() * 100 + index * 100}
          className="list-group-item"
          onClick={() => this.props.onItemSelected(item.url)}
        >
          {label}
        </li>
      );
    });
  }

  // gotService = new GotService();
  // render() {
  //   const { charList } = this.state;

  //   if (!charList) {
  //     return <Spinner />;
  //   }

  //   const items = this.renderItems(charList);
  //   return <>{items}</>;
  // }

  render() {
    const { itemList } = this.state;
    if (!itemList) {
      return <Spinner />;
    }
    const items = this.renderItems(itemList);
    return <>{items}</>;
  }
}
