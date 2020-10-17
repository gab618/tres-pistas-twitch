import React from 'react';
import { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';

function App() {
  const [player1, setPlayer1] = useState({ name: '', points: 0 });
  const [player2, setPlayer2] = useState({ name: '', points: 0 });
  const [start, setStart] = useState(false);

  function handleSetPlayers({ namePlayer1, namePlayer2 }) {
    setPlayer1({ name: namePlayer1, points: player1.points });
    setPlayer2({ name: namePlayer2, points: player2.points });
    setStart(true);
  }

  if (!start) {
    return (
      <>
        <h1>tres pistas</h1>
        <Form onSubmit={handleSetPlayers}>
          <Input name="namePlayer1" placeholder="Player 1" />
          <Input name="namePlayer2" placeholder="Player 2" />
          <button type="submit">Vai</button>
        </Form>
      </>
    );
  }

  return <h1>Game</h1>;
}

export default App;
