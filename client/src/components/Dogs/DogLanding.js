import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const DogLanding = ({ dogs }) => {
  return (
    <>
      <MainImg>
        <Text>SAVE A LIFE, GAIN A BEST FRIEND</Text>
        <Text1>
          <p>
            <a href="/alldogs">VIEW ADOPTABLE DOGS HERE</a>
          </p>
          <p>
            WHEN YOU ADOPT A DOG THROUGH PROJECT PET PAL YOU ARE SUPPORTING A
            LOCAL SHELTER / RESCUE GROUP
          </p>
          <p>WHEN YOU ADOPT A DOG ANOTHER DOG IN NEED CAN BE RESCUED</p>
        </Text1>
      </MainImg>
    </>
  );
};
const MainImg = styled.div`
  background: url("justin-veenema-NH1d0xX6Ldk-unsplash.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Text = styled.h1`
  padding: 40px 20px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 72px;
  line-height: 84px;
  color: #e5e5e5;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const Text1 = styled.p`
  max-width: 650px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  color: #e5e5e5;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25);
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
    text-shadow: none;
  }
  a:visited {
    color: white;
  }
  p {
    padding: 40px 20px;
  }
`;
export default DogLanding;
