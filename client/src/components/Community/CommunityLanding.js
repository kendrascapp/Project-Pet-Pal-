import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function CommunityLanding() {
  return (
    <Main>
      <Message>COMMUNITY</Message>
      <div className="circleWrapper">
        <Link to="/city">
          <Circle1>CITY INFO</Circle1>
        </Link>
        <Link to="/parks">
          <Circle2>PARKS</Circle2>
        </Link>
        <Link to="/dogspots">
          <Circle3>SPOTS</Circle3>
        </Link>
      </div>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-size: cover;
  background-image: url("matt-nelson-aI3EBLvcyu4-unsplash.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  align-items: center;
  .circleWrapper {
    display: flex;
    margin-top: 400px;
  }
`;

const Message = styled.div`
  width: 876px;
  height: 150px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 144px;
  line-height: 169px;
  color: #e5e5e5;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Circle1 = styled.button`
  border-radius: 50%;
  width: 219px;
  height: 204px;
  font-family: "Roboto", sans-serif;
  background: #c4c4c4;
  mix-blend-mode: hard-light;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 40px;
`;

const Circle2 = styled.button`
  border-radius: 50%;
  width: 219px;
  height: 204px;
  background: #c4c4c4;
  mix-blend-mode: hard-light;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 40px;
`;

const Circle3 = styled.button`
  border-radius: 50%;
  width: 219px;
  height: 204px;
  background: #c4c4c4;
  mix-blend-mode: hard-light;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 40px;
`;

export default CommunityLanding;
