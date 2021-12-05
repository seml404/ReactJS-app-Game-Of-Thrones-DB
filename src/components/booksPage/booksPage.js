import React, { Component } from "react";
import ErrorMessage from "../errorMessage";
import ItemList from "../itemList";
import ItemDetails from "../itemDetails/";
import GotService from "../../services/gotService";
import RowBlock from "../rowBlock";
import { Field } from "../itemDetails";
export default class BooksPage extends Component {
  constructor(props) {
    super(props);
    this.selectItem = this.selectItem.bind(this);
  }
  state = {
    error: false,
    itemSelected: null,
  };

  selectItem = (i) => {
    console.log(i);
    this.setState({ itemSelected: i });
  };

  componentDidCatch() {
    console.log("error");
    this.setState({ error: true });
  }
  //   renderItem(item) {
  //     console.log("heeeyyyooo");
  //     return item.name;
  //   }

  gotService = new GotService();

  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.selectItem}
        getData={this.gotService.getAllBooks}
        renderItem={({ name, gender }) => (
          <>
            <span>
              {name} ({gender}){" "}
            </span>
            <button>heyyou</button>
          </>
        )}
      />
    );
    const bookDetails = (
      //   <>
      //     <CharDetails charId={this.state.charSelected}>
      //       <Field field="gender" label="Gender"></Field>
      //       <Field field="born" label="Born"></Field>
      //       <Field field="died" label="Died"></Field>
      //       <Field field="culture" label="Culture"></Field>
      //     </CharDetails>
      //   </>
      //  <>
      <>
        <ItemDetails
          itemId={this.state.itemSelected}
          getItem={this.gotService.getBook}
        >
          <Field field="name" label="name"></Field>
          <Field field="url" label="url"></Field>
        </ItemDetails>
      </>
    );
    if (this.state.error) {
      return <ErrorMessage />;
    }
    return <RowBlock left={itemList} right={bookDetails}></RowBlock>;
  }
}
