import * as React from 'react';
import styled from 'styled-components';

const MapIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 504 504">
    <circle cx="252" cy="252" r="252" fill="#90dfaa" />
    <path fill="#fff" d="M183.7 376L75.4 338.2l74.3-158.7 61.7 11.2z" />
    <path fill="#e6e9ee" d="M183.7 376l114.4-38-21.6-158.5-65.1 11.2z" />
    <path fill="#fff" d="M434.8 376l-136.7-38-21.6-158.5 68.4 11.2z" />
    <g fill="#84dbff">
      <path d="M326 207.4l-46.9-8.6 15.2 111.7L382 334zM159.9 201.3l-55 120.4 82.3 25.5 21-137.2z" />
    </g>
    <path fill="#54c0eb" d="M279.1 198.8L208.2 210l-21 137.2 107.1-36.7z" />
    <path d="M331.8 139.9c0 45-81.5 143.3-81.5 143.3s-81.5-98.3-81.5-143.3 36.5-81.5 81.5-81.5 81.5 36.4 81.5 81.5z" fill="#f1543f" />
    <circle cx="250.2" cy="133.2" r="41.3" fill="#fff" />
  </svg>
);

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: white;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IconContainer = styled.div`
  width: 90px;
  height: 90px;
  flex: 0 0 90px;
  margin-bottom: 20px;

  svg {
    max-width: 100%;
  }
`;

const Title = styled.div`
  font-size: 28px;
  color: #54bfeb;
`;

const SplashScreen: React.FC = () => (
  <Container>
    <IconContainer>
      <MapIcon />
    </IconContainer>
    <Title>
      Awesome Map
    </Title>
  </Container>
);

export default SplashScreen;
