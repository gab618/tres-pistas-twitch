import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StartContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  padding: 0 100px 100px 100px;

  button {
    background: #008d28;
    height: 75px;
    width: 400px;
    border: 5px solid #fff;
    border-radius: 37px;
    font-size: 36px;
    color: #fff;
  }
`;

export const PlayerBox = styled.div`
  background: #0e35a6;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
  width: 480px;
  border: 8px solid #fff;
  border-radius: 50px;

  > h2 {
    font-size: 48px;
    color: #fff;
    margin-top: 95px;
    margin-bottom: 66px;
  }

  > input {
    background: #fff;
    width: 400px;
    height: 75px;
    border-radius: 37px;
    margin-bottom: 40px;
    padding: 0 25px;
  }
`;

export const Questions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 100px 100px 100px;
`;

export const QuestionBox = styled.div`
  width: 480px;
  height: 660px;
  background: #fff;
  border-radius: 50px;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
  > button {
    > svg {
      width: 200px;
      height: 200px;
      color: #000;
      fill: #cecece;
      transition: fill 0.2s;

      &:hover {
        fill: yellow;
        width: 200px;
        height: 200px;
      }
    }
  }
`;

export const Tip = styled.div`
  display: flex;
`;
