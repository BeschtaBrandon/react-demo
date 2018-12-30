import React, { Component } from 'react';
import { Col, Grid, Image, Row, PageHeader, Panel } from 'react-bootstrap';
import moment from 'moment';

import './Home.scss';
import nasaPhoto from '../../images/outer_space.jpg';
import portrait from '../../images/portrait.jpg';

class Home extends Component {

  renderAboutSection = () => {

    const curr_time = moment().format("dddd, MMMM Do YYYY, h:mm a");
    const paragraph = "Currently working as web developer as of " + curr_time + ". Always eager to learn new web technologies and advance my software skills. Able to communicate well with a team. Also, thrive in a company who encourages their employees to question the status-quo and adapt to this ever-changing world.";

    return (
      <div className="well">
        <Grid>
          <Row>
            <Col xs={8} md={9}>
              <div className="paragraph">
                <p>{ paragraph }</p>
              </div>
            </Col>
            <Col xs={4} md={3} className="col-md-push-1">
              <Image src={portrait} responsive />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

  renderHomeHeader = () => {
    return (
      <PageHeader>
        <small>Explore the world's boundaries and excite until we all unite</small>
      </PageHeader>
    );
  }

  renderHomeContent = () => {
      const paragraph = "You have the ability to control your reaction for every event that takes place in your life. That is why life is what you make out of it. Therefore, time on this world is precious, so try and dedicate each day into making memories that you and others may cherish forever.";

      return (
        <div>
          <Panel>
             <Panel.Heading>
               <Panel.Title componentClass="h3">Experiences are priceless</Panel.Title>
             </Panel.Heading>
             <Grid>
               <Row>
                 <Col xs={5} md={4}>
                  <Image src={nasaPhoto} responsive />
                 </Col>
                 <Col xs={7} md={8}>
                  <Panel.Body>
                    <p>
                      {paragraph}
                    </p>
                  </Panel.Body>
                 </Col>
               </Row>
             </Grid>
           </Panel>
         </div>
      );
  }

  render () {

    return (
      <div>
        { this.renderAboutSection() }
        { this.renderHomeHeader() }
        { this.renderHomeContent() }
      </div>
    );
  }

}

export default Home;
