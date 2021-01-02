import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";
import "./home.css";
export class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <h1 className="home-heading">
          <Icon name="universal access" />
          Community finder
        </h1>
        <p className="home-content">
          this is palce to find where you belong,Choose the community you want to
          signed up for then register yourself with community driven newsletters.
          which will keep you updated in this forever evolving world,Subscrice your self
          for communitny driven meetup and event. So that in this digital world you will 
          never feel alone.
        </p>
        <Button primary color="blue" className="home-button" >
          Let Start!!
        </Button>
      </div>
    );
  }
}

export default Home;
