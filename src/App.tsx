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
import NewPage from "./components/NewPage";
import "./App.css";
import "./menuItem";
import menuItem from "./menuItem";

function createEntery(menu: any) {
  return (
    <Menu.Item>
      <Menu.Header>{menu.heading}</Menu.Header>
      <Menu.Menu>
        <Menu.Item name={menu.item1} />
        <Menu.Item name={menu.item2} />
        <Menu.Item name={menu.item3} />
        <Menu.Item name={menu.item4} />
        <Menu.Item name={menu.item5} />
      </Menu.Menu>
    </Menu.Item>
  );
}

function App() {
  const [visible, setVisible] = React.useState(false);
  const [search, setSearch] = useState("");
  const [Results, setResults] = useState([]);


  useEffect(() => {
    setResults(
      menuItem.filter((menuItem: { heading: string; }) =>
        menuItem.heading.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

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
              <Input placeholder="Search" id="mySearch"  onChange={(event) => setSearch(event.target.value)} />
            </Menu.Item>
            <Menu.Item>
              <Link to="/home">Home</Link>
            </Menu.Item>
            
            {/* {menuItem.map(createEntery)} */}
          </Sidebar>

          <Segment padded>
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
