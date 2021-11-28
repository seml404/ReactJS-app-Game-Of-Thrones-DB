import React, { Component } from "react";
// import "./charDetails.css";

// import Spinner from "../spinner";

const Field = ({ item, field, label }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Field };

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.updateItem = this.updateItem.bind(this);
  }

  state = {
    item: null,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  async updateItem() {
    const { itemId } = this.props;
    if (!itemId) {
      return;
    }
    let item = await this.props.getItem(itemId);
    this.setState(() => {
      return { item };
    });
    this.render();
  }

  render() {
    if (!this.state.item) {
      return (
        <span className="select-error">Please, select an item to see info</span>
      );
    }
    const { name } = this.state.item;
    const { item } = this.state;
    return (
      <div className="char-details rounded">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, { item });
          })}
        </ul>
      </div>
    );
  }
}
