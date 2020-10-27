import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  h1 {
    font-size: 80px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: yellow;
    -webkit-text-stroke: 3px black;
  }
`;
