import React from "react";
import styled from "styled-components";

const Avatar = ({ src }) => <StyledAvatar src={src} />;

const StyledAvatar = styled.img`
  border-radius: 50%;
  height: 75px;
  width: 75px;
  z-index: 2;
`;

export default Avatar;
