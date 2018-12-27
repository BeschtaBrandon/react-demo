import React, { Component } from 'react';
import { ListGroup, ListGroupItem, PageHeader } from 'react-bootstrap';

import './News.scss';

class News extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      articles: []
    };
  }

  componentDidMount() {
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=e6f7827e0da94e2a8f213be575bbf833")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            articles: result.articles
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  renderNewsHeader = () => {
    return (
      <PageHeader>
        Latest news
      </PageHeader>
    );
  }

  renderNewsContent = () => {

    const { error, isLoaded, articles } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {

      return (
        <ListGroup>
          {articles.slice(0,8).map(item => (
            <ListGroupItem key={item.source.id} href={item.url} header={item.title}>{item.description}</ListGroupItem>
          ))}
        </ListGroup>
      );
    }
  }

  renderNewsAttribution = () => {
    return (
      <a href="https://newsapi.org">Powered by News API</a>
    );
  }

  render () {
    return (
      <div>
        { this.renderNewsHeader() }
        { this.renderNewsContent() }
        { this.renderNewsAttribution() }
      </div>
    );
  }
}

export default News;
