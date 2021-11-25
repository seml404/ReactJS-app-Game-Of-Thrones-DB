import React from "react";
import { Col, Row, Container } from "reactstrap";
import "./App.css";
// import Header from "../header";
import RandomChar from "../randomChar";
// import ItemList from "../itemList";
// import CharDetails from "../charDetails";

const App = () => {
  return (
    <div className="main">
      {/* <Container>
        <Header />
      </Container> */}
      <Container className="container-main">
        <Row>
          <Col lg={{ size: 5, offset: 0 }}>
            <RandomChar />
          </Col>
        </Row>
        {/* <Row>
          <Col md="6">
            <ItemList />
          </Col>
          <Col md="6">
            <CharDetails />
          </Col>
        </Row> */}
      </Container>
    </div>
  );
};

export default App;
