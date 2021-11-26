import React, { Component } from "react";
import { Button, Col, Row, Container } from "reactstrap";
import "./App.css";
// import Header from "../header";
import RandomChar from "../randomChar";
import ItemList from "../itemList";
import CharDetails from "../charDetails";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRandom: false,
      charSelected: "",
    };
    this.toggleRandomChar = this.toggleRandomChar.bind(this);
  }
  selectChar = (i) => {
    console.log(i);
    this.setState({ charSelected: i });
  };
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
    return (
      <div className="main">
        {/* <Container>
        <Header />
      </Container> */}
        <Container className="container-main">
          <Row>
            <Col lg={{ size: 5, offset: 0 }}>{content}</Col>
          </Row>
          <Row>
            <Col md="6">
              <ItemList onCharSelected={this.selectChar} />
            </Col>
            <Col md="6">
              <CharDetails charId={this.state.charSelected} />
            </Col>
          </Row>
        </Container>
        <Button onClick={this.toggleRandomChar}>
          {showRandom ? "Hide" : " Show"} random character
        </Button>
      </div>
    );
  }
}
