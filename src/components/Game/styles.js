import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button {
    cursor: pointer;
  }
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

  .is-answered {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const TipsContainer = styled.div`
  display: flex;
  width: 1230px;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 50px;
`;

export const Tip = styled.div`
  display: flex;
  align-items: center;

  & + & {
    margin-top: 10px;
  }

  &:nth-child(2) {
    margin-left: 256px;
  }
  &:nth-child(3) {
    margin-left: 512px;
  }

  .points-label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 80px;
    border: 2px solid #fff;
    border-radius: 0 25px;
    background: linear-gradient(180deg, #23409d 0%, rgba(255, 255, 255, 0) 100%),
      #1165d4;
    border-radius: 0px 25px;
    font-size: 64px;
    color: #fff;
    margin-right: 2px;
  }

  .tip-label {
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 24px;
    padding: 0 16px;
    width: 510px;
    height: 80px;
    background: linear-gradient(180deg, #091e72 0%, #0d4bc4 100%), #1165d4;
    border: 2px solid #fff;
    border-radius: 0px 50px 0px 15px;
    margin-right: 16px;
  }

  > button {
    width: 50px;
    height: 50px;
    > svg {
      width: 50px;
      height: 50px;
    }
  }

  .win-button {
    fill: #eee;
  }
  .next-button {
    color: #fff;
  }
`;

export const Answer = styled.div`
  position: absolute;
  right: -3px;
  top: 40%;
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 28px;
  padding: 0 16px;
  width: 510px;
  height: 80px;
  opacity: ${(props) => (props.display ? '1' : '0')};
  transition: opacity 1s;
  background: linear-gradient(180deg, #731314 0%, #a21e22 100%);
  border: 2px solid #fff;
  border-radius: 50px 0px 0px 0px;
`;

export const BottomButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  > span {
    color: #fff;
    font-size: 14px;
    margin-right: 8px;
  }

  > button {
    width: 50px;
    height: 50px;
    > svg {
      width: 50px;
      height: 50px;
    }
  }

  .chat-button {
    fill: #eee;
  }
  .back-button {
    color: #fff;
  }
`;
