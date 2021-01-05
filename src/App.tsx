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

function createEntery(menu: any) {
  let x = menu.item === "Home";
  return (
    <Menu.Item>
      <Menu.Header>
        <Link to={x ? "/" : "/news"}>{menu.item}</Link>
      </Menu.Header>
    </Menu.Item>
  );
}

function App() {
  const [visible, setVisible] = React.useState(false);
  const [Search, setSearch] = React.useState("");
  const [Results, setResults] = React.useState([{}]);

  useEffect(() => {
    setResults(
      menuItem.filter((item) =>
        item.item.toLowerCase().includes(Search.toLowerCase())
      )
    );
  }, [Search]);
  console.log(Search);
  console.log(Results);

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
              <Input
                placeholder="Search"
                id="mySearch"
                onChange={(event) => setSearch(event.target.value)}
              />
            </Menu.Item>
            <Menu.Item>{Results.map(createEntery)}</Menu.Item>
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
