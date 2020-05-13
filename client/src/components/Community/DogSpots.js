import React from "react";
import styled from "styled-components";

function DogSpots() {
  return (
    <>
      <Main>
        <Text1>DOG FRIENDLY SPOTS</Text1>
        <Text2>
          <div className="dogInfoWrapper">
            <p>
              WETHER YOU ARE INTERESTED IN BEER OR PASTRIES, THERE ARE OPTIONS
              FOR BOTH YOU AND YOUR DOG!
            </p>
            <p>
              <a
                href="https://www.mtlblog.com/eat-drink/canada/qc/montreal/7-montreal-restaurants-where-you-can-bring-your-dog"
                target="_blank"
              >
                DOG-FRIENDLY RESTAURANTS
              </a>
            </p>
            <a href="https://thedogueshop.com/doga-classes" target="_blank">
              BRING YOUR DOG TO YOGA
            </a>
            <p>
              <a href="http://ledoggycafe.com/" target="_blank">
                DOG CAFE
              </a>
            </p>
            <p>
              <a
                href="https://montreal.eater.com/maps/best-dog-friendly-bars-patios-terrasses-montreal-chiens-permis"
                target="_blank"
              >
                DOG FRIENDLY TERRASSES
              </a>
            </p>
          </div>
        </Text2>
      </Main>
    </>
  );
}

const Main = styled.div`
  background-image: url("sticker-mule-BnGt3gMTcIw-unsplash.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100%;
  min-height: 100vh;
`;

const Text1 = styled.div`
  align-items: center;
  justify-content: center;
  padding-top: 150px;
  padding-left: 300px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 104px;
  color: #e5e5e5;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Text2 = styled.div`
  align-items: center;
  justify-content: center;
  padding-top: 50px;
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
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
  }
  p {
    padding-top: 10px;
  }
  a {
    padding-top: 30px;
    padding-bottom: 30px;
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

export default DogSpots;
