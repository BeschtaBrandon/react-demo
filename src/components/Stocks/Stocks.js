import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import './Stocks.scss'

class Stocks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      fb: [],
      cof: [],
      lnt: [],
      appl: []
    };
  }

  componentDidMount() {
    fetch("https://api.iextrading.com/1.0/stock/aapl/quote")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            appl: result
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

    fetch("https://api.iextrading.com/1.0/stock/lnt/quote")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            lnt: result
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

    fetch("https://api.iextrading.com/1.0/stock/fb/quote")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            fb: result
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

      fetch("https://api.iextrading.com/1.0/stock/cof/quote")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              cof: result
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

  renderStocksontent = () => {
    const { error, isLoaded, appl, fb, cof, lnt } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {

    const isAPPLStockUp = appl.iexRealtimePrice > appl.open ? "success" : "danger";
    const isFBStockUp = fb.iexRealtimePrice > fb.open ? "success" : "danger";
    const isLNTStockUp = lnt.iexRealtimePrice > lnt.open ? "success" : "danger";
    const isCOFStockUp = cof.iexRealtimePrice > cof.open ? "success" : "danger";

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
            <tr key={lnt.symbol}>
              <td>{lnt.companyName}</td>
              <td>{lnt.symbol}</td>
              <td className={ isLNTStockUp }>{lnt.open}</td>
            </tr>
            <tr key={appl.symbol}>
              <td>{appl.companyName}</td>
              <td>{appl.symbol}</td>
              <td className={ isAPPLStockUp }>{appl.open}</td>
            </tr>
            <tr key={cof.symbol}>
              <td>{cof.companyName}</td>
              <td>{cof.symbol}</td>
              <td className={ isCOFStockUp }>{cof.open}</td>
            </tr>
            <tr key={fb.symbol}>
              <td>{fb.companyName}</td>
              <td>{fb.symbol}</td>
              <td className={ isFBStockUp }>{fb.open}</td>
            </tr>
          </tbody>
        </Table>
      );
    }
  }

  render() {
    return (
      <div>
        { this.renderStocksontent() }
      </div>
    );
  }
}

export default Stocks;
