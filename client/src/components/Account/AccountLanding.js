import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import { AppContext } from "../../AppContext";
function AccountLanding() {
  const { appUser, signInWithGoogle, handleSignOut } = useContext(AppContext);
  console.log(appUser, "SIGNED IN");
  return (
    <>
      <MainImg>
        <Wrapper>
          <Message>ACCOUNT</Message>
          {appUser && appUser.email ? (
            <StyledUserContainer>
              <p className="welcomeBack">Welcome Back</p>
              <Avatar src={appUser.photoURL} />
              <div className="userName">{appUser.displayName}</div>
              <div className="userEmail">{appUser.email}</div>
              <button onClick={handleSignOut}>Sign out</button>
            </StyledUserContainer>
          ) : (
            <SignIn>
              <a onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</a>
            </SignIn>
          )}
        </Wrapper>
      </MainImg>
    </>
  );
}
const MainImg = styled.div`
  background: url("aliaksei-lepik-IQl0U_J4q_w-unsplash.jpg") no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  align-items: center;
  justify-content: center;
  .welcomeBack {
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 40px;
  }
`;
const Message = styled.h1`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 10vw;
  color: #e5e5e5;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const StyledUserContainer = styled.p`
  margin-right: 30px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 2vw;
  text-align: center;
  color: #e5e5e5;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  .userEmail {
    font-weight: normal;
    font-size: 1vw;
    padding: 5px 0;
  }
  .userName {
    padding: 10px 0;
  }
  button {
    margin-top: 10px;
    width: 100px;
    text-transform: uppercase;
    font-size: 11px;
    height: 40px;
    border: 1px solid black;
    color: black;
    cursor: pointer;
  }
`;
const SignIn = styled.div`
  position: absolute;
  height: 113px;
  margin-left: 30px;
  top: 400px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  color: #e5e5e5;
  font-size: 5vw;
  cursor: pointer;
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
export default AccountLanding;
