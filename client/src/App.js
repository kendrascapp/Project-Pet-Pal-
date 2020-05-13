import React from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink,
} from "react-router-dom";
import Home from "./Home";
import DogLanding from "./components/Dogs/DogLanding";
import CommunityLanding from "./components/Community/CommunityLanding";
import AccountLanding from "./components/Account/AccountLanding";
import AllDogs from "./components/Dogs/AllDogs";
import DogSpots from "./components/Community/DogSpots";
import Parks from "./components/Community/Parks";
import DogDetails from "./components/Dogs/DogDetails";
import CityInfo from "./components/Community/CityInfo";

function App() {
  const [dogs, setDogs] = React.useState([]);
  const [count, setCount] = React.useState();
  React.useEffect(() => {
    fetch("/dogs")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDogs(data.animals);
        setCount(data.pagination.current_page);
      });
  }, []);

  return (
    <>
      <GlobalStyles />
      <Router>
        <NavWrapper>
          <NavLink to="/">home</NavLink>
          <NavLink to="/dogs">dogs</NavLink>
          <NavLink to="/community">community</NavLink>
          <NavLink to="/account">account</NavLink>
        </NavWrapper>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/dogs">
            <DogLanding dogs={dogs} />
          </Route>
          <Route exact path="/community">
            <CommunityLanding />
          </Route>
          <Route exact path="/account">
            <AccountLanding />
          </Route>
          <Route exact path="/alldogs">
            <AllDogs dogs={dogs} />
          </Route>
          <Route exact path="/dog/:id">
            <DogDetails dogs={dogs} />
          </Route>
          <Route exact path="/dogspots">
            <DogSpots />
          </Route>
          <Route exact path="/parks">
            <Parks />
          </Route>
          <Route exact path="/city">
            <CityInfo />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
const NavWrapper = styled.nav`
  background: black;
  position: relative;
  font-size: 14px;
  margin: 0;
  padding: 10px 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  z-index: 3;
  a {
    padding: 5px;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    @media screen and (max-width: 420px) {
      flex: 100%;
    }
  }
  a:hover {
    color: white;
    text-decoration: underline;
  }
`;
export default App;
