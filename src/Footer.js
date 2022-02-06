import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

const stickyFooterStyle = {
  backgroundColor: "#D3D3D3",
  fontSize: "13px",
  color: "black",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "30px",
  width: "100%"
};

export default class Footer extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col style={stickyFooterStyle} sm={12}>
            &copy; Copyright 2020 - 2021 "CompanyName" Here |
            info@CompanyName.com | (888) 777-6666 |
            <a
              href="https://www.GOOGLE.com"
              target="_blank"
              rel="noopener nonreferrer"
            >
              (CompanyName)
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
}
