import React, { Component } from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import moment from 'moment';

import './Weather.scss';

class Weather extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      list: [],
      city: null
    };
  }

  componentDidMount() {
    fetch("https://api.openweathermap.org/data/2.5/forecast?zip=53715&APPID=29058f38b91822420846508014b42fc0")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            list: result.list,
            city: result.city,
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

  renderWeatherHeader = () => {
    return (
      <PageHeader>
        Weather
      </PageHeader>
    );
  }

  filterWeatherData = (data) => {
    let filteredData;
    filteredData = data.filter((item, index) => {
      if (!index) {
        return true;
      }
      let prevDate = moment(data[index - 1].dt_txt).format("YYYY-MM-DD");
      console.log("prev value:", prevDate)
      let isSameDate = moment(item.dt_txt).format("YYYY-MM-DD") === prevDate;
      console.log(isSameDate)
      return !isSameDate;
    })
    return filteredData;
  }

  getIcons = (data) => {
    var icons = [];
    const sun = <i className="text-warning fas fa-sun"> </i>;
    const snow = <i className="text-muted fas fa-snowflake"> </i>;
    const clouds = <i class="text-muted fas fa-cloud-sun"> </i>;
    const rain = <i className="text-muted fas fa-cloud-rain"> </i>;
    for (let i = 0; i < data.length; i++) {
      if (data[i].weather[0].main == "Snow") {
        icons.push(snow);
      } else if (data[i].weather[0].main == "Clouds") {
        icons.push(clouds);
      } else if (data[i].weather[0].main == "Clear") {
        icons.push(sun);
      } else if (data[i].weather[0].main == "Rain") {
        icons.push(rain);
      }
       else {
        icons.push(clouds);
      }
    }
    return icons;
  }

  renderWeatherContent = () => {
    const { error, isLoaded, list, city } = this.state;
    const filterdData = this.filterWeatherData(list).slice(0,5);
    const weatherIcons = this.getIcons(filterdData);

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
        <PageHeader>
          <small>{city.name} , Wisconsin</small>
        </PageHeader>
        <Grid>
          <Row>
            <ul>
              {filterdData.map((item, i) => (
                <Col className="col-md-push-1" xs={12} md={2}>
                  <li key={item.toString()}>
                    <div>
                      { parseInt((item.main.temp - 273.15) * 9/5 + 32)}&#176;F { weatherIcons[i] } {item.weather[0].main}
                      <p>{ moment(item.dt_txt).format("MMMM D YYYY") }</p>
                    </div>
                  </li>
                </Col>
              ))}
            </ul>
          </Row>
        </Grid>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        { this.renderWeatherHeader() }
        { this.renderWeatherContent() }
      </div>
    );
  }
}

export default Weather;
