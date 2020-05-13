import React from "react";
import styled from "styled-components";

function CityInfo() {
  return (
    <>
      <Wrapper>
        <Text1>CITY INFORMATION</Text1>
        <Text2>
          <div className="dogInfoWrapper">
            <p>OWNING A DOG IN MONTREAL:</p>
            <p>YOU MUST OBTAIN A DOG LICENSE(RENEWED YEARLY)</p>
            <p>ALL DOGS MUST BE MICROCHIPPED AND SPAYED/NEUTERED</p>
            <a
              href="https://montreal.ca/en/topics/obligations-and-responsibilities-pet-owners"
              target="_blank"
            >
              CLICK HERE FOR CITY GUIDELINES
            </a>
          </div>
        </Text2>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100%;
  min-height: 100vh;
  background-image: url("cinzia-orsina-2t6t05hW0mE-unsplash.jpg");
`;

const Text1 = styled.div`
  position: absolute;
  width: 1200px;
  height: 133px;
  left: 486px;
  top: 30px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 96px;
  line-height: 169px;
  color: #e5e5e5;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Text2 = styled.div`
  align-items: center;
  justify-content: center;
  padding-top: 200px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25);
  .dogInfoWrapper {
    background-color: rgba(196, 196, 196, 0.8);
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  p {
    padding-top: 20px;
  }
  a {
    padding-top: 30px;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
    text-shadow: none;
  }
  a:visited {
    color: white;
  }
`;

export default CityInfo;
