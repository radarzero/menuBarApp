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
          this is palce to find where you belong.choose the comunity u want to
          signed up for then register yourself with community driven newsletter
          which stay connect here the setup event and meetup to keep you updated
          about the community so that in this digital age you will no feel
          alone.
        </p>
        <Button primary color="blue" className="home-button">
          Let Start!!
        </Button>
      </div>
    );
  }
}

export default Home;
