import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import {
  Grid,
  Menu,
  Segment,
  Sidebar,
  Icon,
  Button,
  Header,
} from "semantic-ui-react";
import Home from "./components/Home";
import NewPage from "./components/NewPage";
import "./App.css";

function App() {
  const [visible, setVisible] = React.useState(false);
  return (
    <Grid columns={1}>
      <div className='nav-bar'>  
      <Button secondary onClick={() => setVisible(true)}>
        <Icon name="list" />
      </Button>
      </div>
      <div className='nav-bar'>
      <Header as="h2">
        <Icon name="plug" />
        <Header.Content>Uptime Guarantee</Header.Content>
      </Header>
      </div>
      <Grid.Column>
        <Sidebar.Pushable as={Segment.Group} raised>
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width="thin"
          >
            <Menu.Item>
              <Link to="/home">Home</Link>{" "}
            </Menu.Item>
            <Menu.Item as="a">Games</Menu.Item>
            <Menu.Item as="a">Channels</Menu.Item>
          </Sidebar>

          <Segment inverted padded>
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route exact path="/">
                <NewPage />
              </Route>
            </Switch>
          </Segment>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  );
}

export default App;
