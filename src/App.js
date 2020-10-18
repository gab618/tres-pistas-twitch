import React from 'react';
import { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import myQuestions from './questions';

function App() {
  const [gameState, setGameState] = useState({
    player1: { name: '', points: 0 },
    player2: { name: '', points: 0 },
    chat: { points: 0 },
  });
  const [isPlayerOneTurn, setIsPlayerOneTurn] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [start, setStart] = useState(false);
  const [questions, setQuestions] = useState(myQuestions);

  function handleSetPlayers({ player1, player2 }) {
    const newGameState = { ...gameState };
    newGameState.player1.name = player1;
    newGameState.player2.name = player2;
    setGameState(newGameState);
    setStart(true);
  }

  function handleNewQuestion(question) {
    console.log(question);
    const { player1, player2 } = gameState;
    console.log(player1);
    console.log(player2);
    setIsPlaying(true);
  }

  function handleGoBackToQuestions() {
    setIsPlaying(false);
  }

  if (!start) {
    return (
      <>
        <h1>tres pistas</h1>
        <Form onSubmit={handleSetPlayers}>
          <Input name="player1" placeholder="Player 1" />
          <Input name="player2" placeholder="Player 2" />
          <button type="submit">Vai</button>
        </Form>
      </>
    );
  }

  return (
    <>
      {isPlaying ? (
        <div>
          <h1>a</h1>
          <button type="button" onClick={handleGoBackToQuestions}>
            back
          </button>
        </div>
      ) : (
        questions.map((question, index) => (
          <div onClick={() => handleNewQuestion(question)} key={index}>
            <p>Questão {index + 1}</p>
          </div>
        ))
      )}
    </>
  );
}

export default App;
