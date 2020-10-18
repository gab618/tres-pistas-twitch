import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  padding: 0 25px;
  display: flex;
  margin: 0 auto;
  max-width: 600px;
  .is-answerd {
    color: red;
  }
  > form {
    > input {
      width: 100px;
      background: #fff;
      border-radius: 25px;
    }
  }
`;

export const Tip = styled.div`
  display: flex;
`;
