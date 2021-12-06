import React, { Component } from "react";
import ErrorMessage from "../errorMessage";
import ItemDetails from "../itemDetails";
import GotService from "../../services/gotService";
import { Field } from "../itemDetails";
import { Routes, Route, useParams } from "react-router-dom";

class BooksItemClass extends Component {
  state = {
    error: false,
    // itemSelected: 3,
  };

  gotService = new GotService();

  componentDidMount() {
    console.log(this.props.itemSelected);
  }

  render() {
    const itemList = (
      <>
        <div className="wrapper">
          <ItemDetails
            itemId={this.props.itemSelected}
            getItem={this.gotService.getBook}
          >
            <Field field="name" label="name"></Field>
            <Field field="url" label="url"></Field>
          </ItemDetails>
        </div>
      </>
    );
    if (this.state.error) {
      return <ErrorMessage />;
    }
    return itemList;
  }
}

function BooksItem() {
  let params = useParams();
  return <BooksItemClass itemSelected={params.bookId} />;
}

export default BooksItem;
