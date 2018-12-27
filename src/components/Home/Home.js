import React, { Component } from 'react';
import { Col, Grid, Image, Row, PageHeader, Panel } from 'react-bootstrap';

import './Home.scss';
import nasaPhoto from '../../images/outer_space.jpg';
import portrait from '../../images/portrait.jpg';

class Home extends Component {

  renderAboutSection = () => {
    const paragraph = "Currently working as web developer who is eager to learn new web technologies and develop stronger software skills. Able to communicate well with a team, and thrive in a company who encourages their employees to question the status-quo and adapt to this ever-changing world.";

    return (
      <div className="well">
        <Grid>
          <Row>
            <Col xs={6} md={9}>
              <div className="paragraph">
                { paragraph }
              </div>
            </Col>
            <Col xs={6} md={3} className="col-md-push-1">
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
      const paragraph = "Time on this world is precious, so try and dedicate each day into making memories that you and others may cherish forever.";

      return (
        <div>
          <Panel>
             <Panel.Heading>
               <Panel.Title componentClass="h3">Experiences are priceless</Panel.Title>
             </Panel.Heading>
             <Grid>
               <Row>
                 <Col xs={6} md={4}>
                  <Image src={nasaPhoto} responsive />
                 </Col>
                 <Col xs={6} md={8}>
                  <Panel.Body>{paragraph}</Panel.Body>
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
