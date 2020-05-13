import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <Message1>WELCOME TO PROJECT PETPAL</Message1>
          <Message2>
            MONTREAL-EXCLUSIVE PLATFORM DESIGNED TO HELP YOU FIND THE PERFECT
            DOG
          </Message2>
        </InnerWrapper>
        <RightButtons>
          <Link to="/dogs">
            <Circle1>DOGS</Circle1>
          </Link>
          <Link to="/community">
            <Circle2>COMMUNITY</Circle2>
          </Link>
          <Link to="/account">
            <Circle3>ACCOUNT</Circle3>
          </Link>
        </RightButtons>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background-size: cover;
  background: url("nikolay-tchaouchev-FbG7KdgPSjs-unsplash.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const RightButtons = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 100px 0px 0px;
`;
const Message1 = styled.div`
  position: relative;
  max-width: 400px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 5vw;
  padding: 40px;
  color: #e5e5e5;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const Message2 = styled.div`
  max-width: 400px;
  position: relative;
  font-family: "Roboto", sans-serif;
  font-style: italic;
  font-weight: bold;
  font-size: 3vw;
  padding: 40px;
  color: #e5e5e5;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const Circle1 = styled.button`
  cursor: pointer;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: #c4c4c4;
  mix-blend-mode: hard-light;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  text-align: center;
  color: #e5e5e5;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 20px;
  margin-bottom: 20px;
  opacity: 95%;
`;
const Circle2 = styled.button`
  cursor: pointer;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: #c4c4c4;
  mix-blend-mode: hard-light;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  text-align: center;
  color: #e5e5e5;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 20px;
  opacity: 100%;
`;
const Circle3 = styled.button`
  cursor: pointer;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: #c4c4c4;
  mix-blend-mode: hard-light;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  text-align: center;
  color: #e5e5e5;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25);
  opacity: 95%;
`;
export default Home;
