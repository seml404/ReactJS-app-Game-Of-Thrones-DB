import React from "react";
// import { Col, Row } from "reactstrap";
import "./rowBlock.css";

const RowBlock = ({ left, right }) => {
  return (
    // <div className="row-block-wrapper">
    //   <Row>
    //     <Col md="6">{left}</Col>
    //     <Col md="6">{right}</Col>
    //   </Row>
    // </div>

    <div className="block-wrapper">
      <div className="block-item">{left}</div>
      <div className="block-item">{right}</div>
    </div>
  );
};

export default RowBlock;
