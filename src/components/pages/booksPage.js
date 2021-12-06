// import React, { Component } from "react";
// import ErrorMessage from "../errorMessage";
// import ItemList from "../itemList";
// import ItemDetails from "../itemDetails/";
// import GotService from "../../services/gotService";
// import RowBlock from "../rowBlock";
// import { Field } from "../itemDetails";
// export default class BooksPage extends Component {
//   constructor(props) {
//     super(props);
//     this.selectItem = this.selectItem.bind(this);
//   }
//   state = {
//     error: false,
//     itemSelected: null,
//   };

//   selectItem = (i) => {
//     console.log(i);
//     this.setState({ itemSelected: i });
//   };

//   componentDidCatch() {
//     console.log("error");
//     this.setState({ error: true });
//   }

//   gotService = new GotService();

//   render() {
//     const itemList = (
//       <ItemList
//         onItemSelected={this.selectItem}
//         getData={this.gotService.getAllBooks}
//         renderItem={({ name, gender }) => (
//           <>
//             <span>
//               {name} ({gender}){" "}
//             </span>
//             <button>heyyou</button>
//           </>
//         )}
//       />
//     );
//     const bookDetails = (
//       <>
//         <ItemDetails
//           itemId={this.state.itemSelected}
//           getItem={this.gotService.getBook}
//         >
//           <Field field="name" label="name"></Field>
//           <Field field="url" label="url"></Field>
//         </ItemDetails>
//       </>
//     );
//     if (this.state.error) {
//       return <ErrorMessage />;
//     }
//     return <RowBlock left={itemList} right={bookDetails}></RowBlock>;
//   }
// }

// v2
import React, { Component } from "react";
import ItemList from "../itemList";
import GotService from "../../services/gotService";
import { useNavigate } from "react-router";

class BooksPageClass extends Component {
  state = {
    error: false,
  };

  componentDidCatch() {
    console.log("error");
    this.setState({ error: true });
  }

  gotService = new GotService();

  render() {
    return (
      <>
        <div className="wrapper">
          <ItemList
            onItemSelected={(itemId) => {
              this.props.navigate(`/books/${itemId}`);
            }}
            getData={this.gotService.getAllBooks}
            renderItem={({ name, gender }) => (
              <>
                <span>
                  {name} ({gender}){" "}
                </span>
                <button>heyyou</button>
              </>
            )}
          ></ItemList>
        </div>
      </>
    );
  }
}

function BooksPageWithNavigate(props) {
  let navigate = useNavigate();
  return <BooksPageClass navigate={navigate} />;
}

export default BooksPageWithNavigate;
