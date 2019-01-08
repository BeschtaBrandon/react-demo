import React, { Component } from 'react';
import { PageHeader, Table } from 'react-bootstrap';
import moment from 'moment';

import callAPI from '../../shared/util';
import './Stocks.scss'

const STOCK_LIST = ['baba', 'aapl', 'lnt', 'cof', 'fb', 'tsla', 'v'];

class Stocks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      fb: [],
      cof: [],
      lnt: [],
      appl: [],
      tsla: [],
      baba: [],
      v: [],
      sectors: []
    };
  }

  componentDidMount() {
    for (var i = 0; i < STOCK_LIST.length; i++) {
      callAPI(STOCK_LIST[i])
        .then(res => res.json())
        .then(
          (result) => {
            if (result.symbol === 'LNT') {
              this.setState({
                lnt: result
              });
            } else if (result.symbol === 'AAPL') {
              this.setState({
                appl: result
              });
            } else if (result.symbol === 'BABA') {
              this.setState({
                baba: result
              });
            } else if (result.symbol === 'COF') {
              this.setState({
                cof: result
              });
            } else if (result.symbol === 'FB') {
              this.setState({
                fb: result
              });
            } else if (result.symbol === 'TSLA') {
              this.setState({
                tsla: result
              });
            } else if (result.symbol === 'V') {
              this.setState({
                v: result
              });
            }
            this.setState({isLoaded: true})
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
      }

      fetch("https://api.iextrading.com/1.0/stock/market/sector-performance")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              sectors: result
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

  renderStocksHeader = () => {
    return (
      <PageHeader>
        Stocks <i className="fas fa-chart-line"></i>
      </PageHeader>
    );
  }

  renderStocksContent = () => {
    const { error, isLoaded, appl, fb, cof, lnt, tsla, baba, v } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {

    const isAPPLStockUp = appl.iexRealtimePrice > appl.open ? "success" : "danger";
    const isFBStockUp = fb.iexRealtimePrice > fb.open ? "success" : "danger";
    const isLNTStockUp = lnt.iexRealtimePrice > lnt.open ? "success" : "danger";
    const isCOFStockUp = cof.iexRealtimePrice > cof.open ? "success" : "danger";
    const isTSLAStockUp = tsla.iexRealtimePrice > tsla.open ? "success" : "danger";
    const isBABAStockUp = baba.iexRealtimePrice > baba.open ? "success" : "danger";
    const isVStockUp = v.iexRealtimePrice > v.open ? "success" : "danger";

    return (
        <Table condensed>
          <thead>
            <tr>
              <th>Company</th>
              <th>Symbol</th>
              <th>Price (US Dollars)</th>
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
            <tr key={baba.symbol}>
              <td>{baba.companyName}</td>
              <td>{baba.symbol}</td>
              <td className={ isBABAStockUp }>{baba.open}</td>
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
            <tr key={tsla.symbol}>
              <td>{tsla.companyName}</td>
              <td>{tsla.symbol}</td>
              <td className={ isTSLAStockUp }>{tsla.open}</td>
            </tr>
            <tr key={v.symbol}>
              <td>{v.companyName}</td>
              <td>{v.symbol}</td>
              <td className={ isVStockUp }>{v.open}</td>
            </tr>
          </tbody>
        </Table>
      );
    }
  }

  renderStocksSectorHeader = () => {
    return (
      <PageHeader>
        <small>Sector Performance</small>
      </PageHeader>
    );
  }

  renderStocksSectorContent = () => {
    const { sectors } = this.state;

    return (
      <Table condensed>
        <thead>
          <tr>
            <th>Sector</th>
            <th>Performance</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
            {sectors.slice(0,5).map(item => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{parseFloat((item.performance * 100).toFixed(3))} %</td>
              <td>{moment(item.lastUpdated).format("l")}</td>
            </tr>
            ))}
        </tbody>
      </Table>
    );
  }

  renderStockAttribution = () => {
    return (
      <p>Data provided for free by <a href="https://iextrading.com/developer/">IEX</a></p>
    );
  }

  render() {
    return (
      <div>
        { this.renderStocksHeader() }
        { this.renderStocksContent() }
        { this.renderStocksSectorHeader() }
        { this.renderStocksSectorContent() }
        { this.renderStockAttribution() }
      </div>
    );
  }
}

export default Stocks;
