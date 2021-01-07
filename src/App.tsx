import React, { useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import {
  Grid,
  Menu,
  Segment,
  Sidebar,
  Icon,
  Button,
  Header,
  Input,
} from "semantic-ui-react";
import Home from "./components/Home";
import "./App.css";
import "./menuItem";
import menuItem from "./menuItem";
import FormEle from "./components/FormEle";
import menuEle from "./menuData";

function createItem(item: { name: React.ReactNode }) {
  return (
    <Menu.Menu>
      <Menu.Item>
        <Link to="/news">{item.name}</Link>
      </Menu.Item>
    </Menu.Menu>
  );
}

function createEntery(menu: any) {
  let x = menu.name === "Home";
  return (
    <Menu.Item>
      <Menu.Header>
        <Link to={x ? "/" : "#"}>{menu.name}</Link>
      </Menu.Header>
      {menu.children.map(createItem)}
    </Menu.Item>
  );
}

function App() {
  const [visible, setVisible] = React.useState(false);
  // const [Search, setSearch] = React.useState("");
  // const [Results, setResults] = React.useState([{}]);

  // useEffect(() => {
  //    setResults(menuItem.filter((item) => item.heading.toLowerCase().includes(Search.toLowerCase())));
  // },  [Search]);

  return (
    <Grid columns={1}>
      <div className="nav-bar">
        <Button secondary onClick={() => setVisible(true)}>
          <Icon name="list" />
        </Button>
      </div>
      <div className="nav-bar">
        <Header as="h2">
          <Icon name="universal access" />
          <Header.Content>Community Finder</Header.Content>
        </Header>
      </div>
      <Grid.Column>
        <Sidebar.Pushable as={Segment.Group} raised>
          <Sidebar
            as={Menu}
            animation="scale down"
            icon="labeled"
            inverted
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width="wide"
            color="black"
          >
            <Menu.Item>
              <Input placeholder="Search" id="mySearch" />
            </Menu.Item>
            {menuEle.map(createEntery)}
          </Sidebar>

          <Segment padded>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/news">
                <FormEle />
              </Route>
            </Switch>
          </Segment>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  );
}

export default App;
