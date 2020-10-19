import React from 'react';

import { Container, HeaderBar, AvatarBar, Player, ScoreBox } from './styles';

const ScoreHeader = ({ gameState }) => {
  return (
    <Container>
      <HeaderBar>
        <span>{gameState.player1.name}</span>
        {/* <span>chat</span> */}
        <span>{gameState.player2.name}</span>
      </HeaderBar>
      <AvatarBar>
        <Player>
          <img src={gameState.player1.avatar} alt="avatar1" />
          <ScoreBox>
            <span>{gameState.player1.points}</span>
          </ScoreBox>
        </Player>
        <ScoreBox>{gameState.chat.points}</ScoreBox>
        <Player>
          <ScoreBox>
            <span>{gameState.player1.points}</span>
          </ScoreBox>
          <img src={gameState.player2.avatar} alt="avatar2" />
        </Player>
      </AvatarBar>
    </Container>
  );
};

export default ScoreHeader;
