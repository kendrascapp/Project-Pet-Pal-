import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

function Parks() {
  const dogs = useSelector((state) => state.dogs.likedDogs);
  console.log(dogs);
  return (
    <>
      <MainImg>
        <Text1>DOG PARKS</Text1>
        <Text2>
          <p>MONTREAL HAS OVER 50 DOG PARKS</p>
          <a href="https://montreal.ca/sujets/parcs-chiens" target="_blank">
            CLICK HERE FOR CITY GUIDELINES
          </a>
        </Text2>
        <iframe
          className="map"
          src="https://www.google.com/maps/d/embed?mid=1MN9oKq_JMY4A6IojoyfRyBUS9nFdWjZa"
          width="720"
          height="593"
        ></iframe>
      </MainImg>
    </>
  );
}

const MainImg = styled.div`
  background-image: url("donald-teel-yMzODq5vAr8-unsplash.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100%;
  min-height: 100vh;
  .map {
    z-index: 2;
    position: absolute;
    width: 720px;
    height: 593px;
    left: 900px;
    top: 210px;
  }
`;

const Text1 = styled.div`
  position: absolute;
  width: 900px;
  height: 133px;
  left: 486px;
  top: 30px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 144px;
  line-height: 169px;
  color: #e5e5e5;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Text2 = styled.p`
  width: 396px;
  height: 474px;
  padding-left: 200px;
  padding-top: 160px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 75px;
  text-align: center;
  color: #e5e5e5;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
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
`;

export default Parks;
