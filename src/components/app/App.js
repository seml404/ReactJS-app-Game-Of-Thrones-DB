import React, { Component } from "react";
import { Button, Col, Row, Container } from "reactstrap";
import "./App.css";
import Header from "../header";
import RandomChar from "../randomChar";
// import ItemList from "../itemList";
// import CharDetails from "../charDetails";
// import ErrorMessage from "../errorMessage";
import GotService from "../../services/gotService";
import CharacterPage from "../characterPage";
import BooksPage from "../booksPage";
import HousesPage from "../housesPage";
// router

import { Routes, Route, Link } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRandom: false,
      error: false,
      // charSelected: "",
    };
    this.selectItem = this.selectItem.bind(this);
    this.toggleRandomChar = this.toggleRandomChar.bind(this);
  }

  selectItem = (i) => {
    console.log(i);
    this.setState({ charSelected: i });
  };

  // selectChar = (i) => {
  //   console.log(i);
  //   this.setState({ charSelected: i });
  // };
  gotService = new GotService();

  componentDidCatch() {
    console.log("error");
    this.setState({ error: true });
  }

  toggleRandomChar() {
    this.setState((state) => {
      let newState = {};
      Object.assign(newState, state);
      console.log(newState);
      newState.showRandom = !newState.showRandom;

      return newState;
    });
  }
  render() {
    const { showRandom } = this.state;
    const content = showRandom ? (
      <RandomChar />
    ) : (
      <div>please, push the button</div>
    );
    // return (
    // <div className="main">
    {
      /* <Container>
        <Header />
      </Container> */
    }
    {
      /* <Container className="container-main">
          <Row>
            <Col lg={{ size: 5, offset: 0 }}>{content}</Col>
          </Row>
          <Button onClick={this.toggleRandomChar}>
            {showRandom ? "Hide" : " Show"} random character
          </Button> */
    }
    {
      /* <Row>
            <Col md="6">
              <ItemList onCharSelected={this.selectChar} />
            </Col>
            <Col md="6">
              <CharDetails charId={this.state.charSelected} />
            </Col>
          </Row> */
    }
    {
      /* <CharacterPage />

          <Row>
            <Col md="6">
              <ItemList
                getData={this.gotService.getAllBooks}
                renderItem={(item) => `${item.name}, (name of book)`}
              />
            </Col>
            <Col md="6">
              <ItemList
                getData={this.gotService.getAllHouses}
                renderItem={(item) => `${item.name}, (name of house)`}
              />
            </Col>
          </Row>
        </Container>
      </div> */
    }

    // return (
    //   <div className="main">
    //     <Header></Header>
    //     <Container className="container-main">
    //       <Row>
    //         <Col lg={{ size: 5, offset: 0 }}>{content}</Col>
    //       </Row>
    //       <Button onClick={this.toggleRandomChar}>
    //         {showRandom ? "Hide" : " Show"} random character
    //       </Button>
    //       <Routes>
    //         <Route path="/characters" element={<CharacterPage />}></Route>
    //         <Route path="/books" element={<BooksPage />}></Route>
    //         <Route path="/houses" element={<HousesPage />}></Route>
    //         {/* <CharacterPage /> */}
    //       </Routes>
    //       {/*
    //       <Row>
    //         <Col md="6">
    //           <ItemList
    //               getData={this.gotService.getAllBooks}
    //               renderItem={(item) => `${item.name}, (name of book)`}
    //             />
    //         </Col>
    //         <Col md="6">
    //             <ItemList
    //               getData={this.gotService.getAllHouses}
    //               renderItem={(item) => `${item.name}, (name of house)`}
    //             />
    //           </Col>
    //       </Row> */}
    //     </Container>
    //   </div>
    // );
    return (
      <div className="main">
        <Header></Header>
        <div className="container-main">
          <div className="content-wrapper">{content}</div>
          <Button onClick={this.toggleRandomChar}>
            {showRandom ? "Hide" : " Show"} random character
          </Button>
          <Routes>
            <Route path="/characters" element={<CharacterPage />}></Route>
            <Route path="/books" element={<BooksPage />}></Route>
            <Route path="/houses" element={<HousesPage />}></Route>
            {/* <CharacterPage /> */}
          </Routes>
          {/* 
          <Row>
            <Col md="6">
              <ItemList
                  getData={this.gotService.getAllBooks}
                  renderItem={(item) => `${item.name}, (name of book)`}
                />
            </Col>
            <Col md="6">
                <ItemList
                  getData={this.gotService.getAllHouses}
                  renderItem={(item) => `${item.name}, (name of house)`}
                />
              </Col>
          </Row> */}
        </div>
      </div>
    );
  }
}
