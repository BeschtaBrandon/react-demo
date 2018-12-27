import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Panel, PageHeader } from 'react-bootstrap';
import moment from 'moment'

import './Work.scss';

class Work extends Component {

  renderWorkHeader = () => {
    return (
      <PageHeader>
        Professional Experiences
      </PageHeader>
    );
  }

  renderWorkContent = () => {
    const time = moment().format('MMMM Y');

    return (
      <ListGroup>
        <ListGroupItem header="Paradigm - Web Developer" bsStyle="success" href="http://myparadigm.com">Jan 2018 - {time}</ListGroupItem>
        <ListGroupItem header="University of Wisconsin Madison Mechanical Engineering Department - Software Engineer" href="http://wisc.edu">
          Aug 2016 - Jan 2018
        </ListGroupItem>
        <ListGroupItem header="Thomson Retuers - Software Engineer" href="http://reuters.com">
          Oct 2014 - Nov 2016
        </ListGroupItem>
        <ListGroupItem header="Maverick Software Consulting - Software Developer Intern" href="http://mavericksoftware.com">
          April 2015 - Jun 2016
        </ListGroupItem>
      </ListGroup>
    );
  }

  renderEducation = () => {
    return (
      <Panel>
        <Panel.Body>Prior to starting my professional career, I studied Computer Sciences for four years at the University of Wisconsin - Madison. During that time, I was exposed to a variety of programming languages such as Assembly, C, C++, Java and PHP</Panel.Body>
      </Panel>
    );
  }

  render () {
    return (
      <div>
        { this.renderWorkHeader() }
        { this.renderWorkContent() }
        { this.renderEducation() }
      </div>
    );
  }
}

export default Work;
