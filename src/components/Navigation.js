import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { fetchNews } from "../actions/News";
class Navigation extends Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">News Dash</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/health">Health Care</Nav.Link>
          <Nav.Link href="/immigration">Immigration</Nav.Link>
          <Nav.Link href="/voting">Voting</Nav.Link>
          <Nav.Link href="/climate">Climate</Nav.Link>
          <Nav.Link href="/education">Education</Nav.Link>
          <Nav.Link href="/foreign">Foreign Policy</Nav.Link>
          <Nav.Link href="/economy">Economy</Nav.Link>
          <Nav.Link href="/guns">Gun Policy</Nav.Link>
          <Nav.Link href="/criminal">Criminal Justice</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    );
  }
}
const mapStateToProps = (state) => ({
  news: state.news.news,
});
export default connect(mapStateToProps, { fetchNews })(Navigation);
