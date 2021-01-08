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
import FormEle from "./components/FormEle";
import menuEle from "./menuData";

function createItem(item: any) {
  return (
    <Menu.Menu>
      <Menu.Item>
        <Link to="/news">{item.name}</Link>
      </Menu.Item>
    </Menu.Menu>
  );
}

function createEntery(menu: any) {
  if (menu.name === "") {
    return null;
  } else {
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
}

function App() {
  const [visible, setVisible] = React.useState(false);
  const [Search, setSearch] = React.useState("");
  const z = menuEle.map(function (item) {
    // const reqArry = [];
    const obj = {
      name: "",
      children: [{}],
    };
    const x = item.name
      .toLocaleLowerCase()
      .includes(Search.toLocaleLowerCase());
    if (x) {
      obj.name = item.name;
    }
    obj.children = item.children.filter((child: { name: string }) =>
      child.name.toLowerCase().includes(Search.toLowerCase())
    );
    // reqArry.push(obj);
    if (obj.children.length > 0) {
      if (obj.name === null) {
        obj.name = item.name;
      }
    }
    return obj;
  });

  const [Results, setResults] = React.useState(z);

  useEffect(() => {
    setResults(
      menuEle.map(function (item) {
        // const reqArry = [];
        const obj = {
          name: "",
          children: [{}],
        };
        const x = item.name
          .toLocaleLowerCase()
          .includes(Search.toLocaleLowerCase());
        if (x) {
          obj.name = item.name;
        }
        obj.children = item.children.filter((child: { name: string }) =>
          child.name.toLowerCase().includes(Search.toLowerCase())
        );
        // reqArry.push(obj);
        if (obj.children.length > 0) {
          if (obj.name === "") {
            obj.name = item.name;
          }
        }
        return obj;
      })
    );
  }, [Search]);

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
            {Results.map(createEntery)}
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
