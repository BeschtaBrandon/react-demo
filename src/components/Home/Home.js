import React, { Component } from 'react';
import { Col, Grid, Image, Row, PageHeader, Panel } from 'react-bootstrap';

import './Home.scss';
import nasaPhoto from '../../images/outer_space.jpg'

class Home extends Component {

  renderAboutSection = () => {
    return (
      <div className="well">
        Currently working as web developer who is eager to learn new web technologies and develop stronger software skills. Able to communicate well with a team, and thrive in a company who encourages their employees to question the status-quo and adapt to this ever-changing world.
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
                 <Col xs={4}>
                  <Image src={nasaPhoto} responsive />
                 </Col>
                 <Col xs={8}>
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
