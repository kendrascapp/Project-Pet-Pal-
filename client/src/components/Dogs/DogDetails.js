import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
function DogDetails({ dogs }) {
  const { id } = useParams();
  const dog = dogs.filter((dog) => dog.id === Number(id))[0] || {};
  const dogImgs = dog.photos;
  const dogImgURL = [];
  for (const property in dogImgs) {
    dogImgURL.push(dogImgs[property].full);
  }
  console.log(dog);
  console.log(dog.attributes, "HERE");
  if (dog.attributes)
    return (
      <>
        <Wrapper>
          <InnerWrapper>
            <LeftWrapper>
              <h1>{dog.name}</h1>
              <img className="dogCardPhoto" src={dogImgURL[0]} />
            </LeftWrapper>
            <RightWrapper>
              <div className="dogInfo">
                <h2>{dog.name}'s Details:</h2>
                <h3>General</h3>
                <p>Age Group: {dog.age}</p>
                <p>Sex: {dog.gender}</p>
                <p>Breed: {dog.breeds.primary}</p>
                <h3>Health</h3>
                <p>
                  {dog.attributes.spayed_neutered
                    ? "Spayed/Neutered: Yes"
                    : "Spayed/Neutered: No"}
                </p>
                <p>
                  {dog.attributes.shots_current
                    ? "Shots up to date? Yes"
                    : "Shots up to date? No"}
                </p>
                <h3>Behaviour</h3>
                <p>
                  {dog.attributes.house_trained
                    ? "House Trained: Yes"
                    : "House Trained: No"}
                </p>
                <p>
                  {dog.environment.children
                    ? "Good With Children: Yes"
                    : "Good With Children: Unknown"}
                </p>
                <p>
                  {dog.environment.dogs
                    ? "Good With Other Dogs: Yes"
                    : "Good With Other Dogs: Unknown"}
                </p>
                <p>
                  {dog.environment.cats
                    ? "Good With Cats: Yes"
                    : "Good With Cats: Unknown"}
                </p>
                <h3>Rescue Contact Information</h3>
                <p>Email: {dog.contact.email}</p>
                <p>Phone: {dog.contact.phone}</p>
              </div>
            </RightWrapper>
          </InnerWrapper>
        </Wrapper>
      </>
    );
  else return <div>LOADING...</div>;
}
const Wrapper = styled.div`
  background-image: url("https://images.unsplash.com/photo-1470137430626-983a37b8ea46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80");
  background-size: cover;
  min-height: 100vh;
  padding-top: 40px;
`;
const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const RightWrapper = styled.div`
  margin: 150px auto;
  .dogInfo {
    background-color: rgba(196, 196, 196, 0.7);
    height: 400px;
    width: 400px;
    padding: 40px;
    p {
      font-size: 18px;
    }
    h2 {
      text-align: center;
      font-size: 28px;
      margin-bottom: 20px;
      font-weight: bold;
    }
    h3 {
      font-weight: bold;
      font-size: 18px;
      padding-top: 10px;
      padding-bottom: 5px;
    }
  }
`;
const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  h1 {
    margin: 0 auto;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 96px;
    line-height: 84px;
    color: #e5e5e5;
    text-shadow: 0px 10px 19px rgba(0, 0, 0, 0.25),
      0px 8px 14px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
      0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .dogCardPhoto {
    margin: 40px auto;
    border-radius: 50%;
    object-fit: cover;
    min-width: 500px;
    min-height: 500px;
    max-width: 500px;
    max-height: 500px;
  }
`;
export default DogDetails;
