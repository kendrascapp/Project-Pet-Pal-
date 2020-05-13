import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { receiveDogs } from "../../actions";
const AllDogs = ({ dogs }) => {
  const [gender, setGender] = useState("All");
  const [age, setAge] = useState("All");
  const [size, setSize] = useState("All");
  //const all go up here
  let filterDog = Object.values(dogs);
  filterDog = filterDog.filter((dog) => {
    if (dog.gender === gender || gender === "All") return true;
    else return false;
  });
  //second filter here
  filterDog = filterDog.filter((dog) => {
    if (dog.age === age || age === "All") return true;
    else return false;
  });
  //third filter here
  filterDog = filterDog.filter((dog) => {
    if (dog.size === size || size === "All") return true;
    else return false;
  });
  const dispatch = useDispatch();
  return (
    <>
      <MainImg>
        <Text1>AVAILABLE DOGS</Text1>
        <p className="subText">FILTER YOUR SELECTION: </p>
        <select
          value={gender}
          onChange={(event) => setGender(event.target.value)}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="All">Both Genders</option>
        </select>
        <select value={age} onChange={(event) => setAge(event.target.value)}>
          <option value="Senior">Senior</option>
          <option value="Adult">Adult</option>
          <option value="Young">Young</option>
          <option value="All">All Ages</option>
        </select>
        <select value={size} onChange={(event) => setSize(event.target.value)}>
          <option value="Extra Large">Extra Large</option>
          <option value="Large">Large</option>
          <option value="Medium">Medium</option>
          <option value="Small">Small</option>
          <option value="All">All Sizes</option>
        </select>
        <Container2>
          {filterDog.map((dog) => {
            const dogImg = dog.photos[0];
            const dogImgURL = String(dogImg.large);
            console.log(dog);
            return (
              <Container1>
                <img className="dogCardPhoto" src={dogImgURL} />
                <Test>
                  <h2>{dog.name}</h2>
                  <p>Age: {dog.age}</p>
                  <p>Breed: {dog.breeds.primary}</p>
                  <p>Size: {dog.size}</p>
                  <p>Gender: {dog.gender}</p>
                  <p>Status: {dog.status}</p>
                  <p>City: {dog.contact.address.city}</p>
                  <a href={`/dog/${dog.id}`}>more details</a>
                </Test>
              </Container1>
            );
          })}
        </Container2>
      </MainImg>
    </>
  );
};
const MainImg = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100%;
  min-height: 100vh;
  background-image: url("https://images.unsplash.com/photo-1567459169668-95d355371bda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1498&q=80");
  select {
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid black;
    border-radius: 0px;
    color: black;
    width: 200px;
    height: 40px;
    padding: 20px;
    font-size: 16px;
    margin-left: 42px;
    margin-bottom: 20px;
  }
  .subText {
    margin-left: 42px;
    margin-bottom: 10px;
    font-family: "Roboto", sans-serif;
    color: #e5e5e5;
    font-size: 25px;
    font-weight: bold;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
      0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
const Text1 = styled.div`
  padding: 40px 0;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 96px;
  line-height: 112px;
  text-align: center;
  color: #e5e5e5;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const Test = styled.div`
  color: black;
  margin-top: 20px;
  flex-direction: column;
  display: flex;
  h2 {
    text-align: center;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 24px;
    color: black;
    text-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25),
      0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
      0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  a {
    margin-top: 10px;
    text-decoration: none;
    color: black;
    text-align: right;
    font-weight: bold;
  }
  a:hover {
    text-decoration: underline;
    text-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25),
      0px 4px 4px rgba(255, 255, 255, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
      0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  a:visited {
    color: black;
  }
`;
const Container1 = styled.div`
  width: 275px;
  height: 450px;
  // background-color: rgba(196,196,196,.7);
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  margin: 15px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  .dogCardPhoto {
    border-radius: 5px;
    object-fit: cover;
    min-width: 270px;
    min-height: 270px;
    max-width: 270px;
    max-height: 270px;
    align-self: center;
  }
`;
const Container2 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  // margin-top: 160px;
  /* width: 301px;
  height: 335px; */
`;
export default AllDogs;
