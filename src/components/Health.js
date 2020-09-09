import React, { Component } from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
} from "reactstrap";
import { fetchNews } from "../actions/News";
class Health extends Component {
  componentDidMount() {
    this.props.fetchNews("health care");
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.fetchNews(this.state.key);
  };
  render() {
    const newsItems = this.props.news.map((article) => {
      return (
        <Row>
          <Col xs="auto">
            <Card
              key={article.id}
              style={{
                height: "40%",
                width: "40%",
                border: "solid",
                margin: "2rem",
              }}
            >
              <CardImg
                top
                width="100%"
                src={article.urlToImage}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>
                  <strong>{article.title}</strong>
                </CardTitle>
                <CardSubtitle>Author: {article.author}</CardSubtitle>
                <CardText>{article.description}</CardText>
                <Button color="primary" size="lg" active>
                  View Article
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      );
    });
    return (
      <Container>
        <div>
          <h1>Informed - Health Care</h1>
          <Row>{newsItems}</Row>
        </div>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  news: state.news.news,
});
export default connect(mapStateToProps, { fetchNews })(Health);
