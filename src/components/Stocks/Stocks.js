import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import './Stocks.scss'

class Stocks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api.iextrading.com/1.0/stock/fb/quote")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
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

  renderStocksContent = () => {
    const { error, isLoaded, items } = this.state;
                console.log("Result: ", items)
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {

    const isStockUp = items.iexRealtimePrice > items.open ? "success" : "danger";

    return (
        <Table condensed>
          <thead>
            <tr>
              <th>Company</th>
              <th>Symbol</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr key={items.symbol}>
              <td>{items.companyName}</td>
              <td>{items.symbol}</td>
              <td className={ isStockUp }>{items.open}</td>
            </tr>
          </tbody>
        </Table>
      );
    }
  }

  render() {
    return (
      <div>
        { this.renderStocksContent() }
      </div>
    );
  }
}

export default Stocks;
