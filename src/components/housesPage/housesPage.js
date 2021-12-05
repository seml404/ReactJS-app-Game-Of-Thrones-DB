import React, { Component } from "react";
import ErrorMessage from "../errorMessage";
import ItemList from "../itemList";
// import CharDetails from "../charDetails";
import ItemDetails from "../itemDetails/";
import GotService from "../../services/gotService";
import RowBlock from "../rowBlock";
import { Field } from "../itemDetails";
export default class CharacterPage extends Component {
  constructor(props) {
    super(props);
    this.selectItem = this.selectItem.bind(this);
  }
  state = {
    error: false,
    itemSelected: null,
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

  selectItem = (i) => {
    console.log(i);
    this.setState({ itemSelected: i });
  };

  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.selectItem}
        getData={this.gotService.getAllHouses}
        renderItem={({ name }) => (
          <>
            <span>{name} </span>
            <button>heyyou</button>
          </>
        )}
      />
    );
    const houseDetails = (
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
          getItem={this.gotService.getHouse}
        >
          <Field field="name" label="name"></Field>
        </ItemDetails>
      </>
    );
    if (this.state.error) {
      return <ErrorMessage />;
    }
    return <RowBlock left={itemList} right={houseDetails}></RowBlock>;
  }
}
