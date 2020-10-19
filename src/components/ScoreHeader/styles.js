import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background: #0e35a6;
  text-transform: uppercase;
  color: #fff;
  font-size: 36px;
  padding: 0 220px;
  position: relative;
  text-align: center;
`;

export const AvatarBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Player = styled.div`
  display: flex;
  align-items: flex-end;
  > img {
    width: 200px;
    height: 200px;
    border: 5px solid #fff;
    border-radius: 50%;
  }
`;

export const ScoreBox = styled.div`
  width: 150px;
  height: 92px;
  border: 5px solid #fff;
  border-radius: 50px;
  background: #0e35a6;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;

  color: #fff;
  font-size: 36px;
`;
