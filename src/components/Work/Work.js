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
        <ListGroupItem header="Paradigm - Web Developer" bsStyle="success" href="http://myparadigm.com">
          Jan 2018 - {time}
          <p>
        &nbsp;&nbsp;&nbsp;&nbsp;Responsible for developing web applications written using ReactJs, Laravel, PHP, and C#. Also, assist in deploying these apps to production environments for a manifold of construction
clients. Our teams uses Docker Swarm and hosts our services on Azure.
          </p>
        </ListGroupItem>
        <ListGroupItem header="University of Wisconsin Madison Mechanical Engineering Department - Software Engineer" href="http://wisc.edu">
          Aug 2016 - Jan 2018
          <p>
          &nbsp;&nbsp;&nbsp;&nbsp;Implement and design a web application to assist family caregivers of people with dementia or Alzheimer’s disease. This app helps enable informal caregivers, who are often disconnected from each other, to better communicate and document information related to the person with dementia. Additionally, as caregivers document a patient’s dementia-related behaviors over time, the platform will use machine learning to generate caregiver strategies that are tailored for the specific patient.
          </p>
        </ListGroupItem>
        <ListGroupItem header="Thomson Reuters - Software Engineer" href="http://reuters.com">
          Oct 2014 - Nov 2016
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;Built a database migration tool using Java, Spring Boot, and Flyway to keep database schemas up to date. Implemented analytics tools to provide statistics on server usage and cluster management. In addition, wrote automated tests using Selenium framework to improve the quality of our analytics tools.
          </p>
        </ListGroupItem>
        <ListGroupItem header="Maverick Software Consulting - Software Developer Intern" href="http://mavericksoftware.com">
          April 2015 - Jun 2016
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;Assisted developers at Thomson Reuters write pages for a web application that help lawyers and legal representatives organize their case information. Some technologies included in this process were Java, Spring Boot and Selenium.
          </p>
        </ListGroupItem>
      </ListGroup>
    );
  }

  renderEducation = () => {
    const paragraph = "Prior to starting my professional career, I studied Computer Sciences for four years at the University of Wisconsin - Madison. During that time, I was exposed to a variety of programming languages such as Assembly, C, C++, Java and PHP.";

    return (
      <Panel>
        <Panel.Body>
          { paragraph }
        </Panel.Body>
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
