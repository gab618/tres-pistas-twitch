import React, { useEffect, useState } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

import { Container } from './styles';

function EndGame({ gameState }) {
  const [isDraw, setIsDraw] = useState(false);
  const [winner, setWinner] = useState('');
  const { width, height } = useWindowSize();

  useEffect(() => {
    const { player1, player2, chat } = gameState;
    if (player1.points === player2.points && player1.points > chat.points) {
      setIsDraw(true);
      setWinner('empate');
    } else {
      const winnerPlayer = player1.points > player2.points ? player1 : player2;
      setWinner(winnerPlayer.points > chat.points ? winnerPlayer.name : 'chat');
    }
  }, [gameState]);
  return (
    <Container>
      <Confetti width={width} height={height} />
      <h1>{winner} venceu!</h1>
    </Container>
  );
}

export default EndGame;
