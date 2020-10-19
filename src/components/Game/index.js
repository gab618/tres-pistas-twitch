import React from 'react';
import { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import myQuestions from '../../questions';

import { Container, Tip, StartContent, PlayerBox } from './styles';
import StartHeader from '../StartHeader';

function Game() {
  const [gameState, setGameState] = useState({
    player1: { name: '', avatar: '', points: 0 },
    player2: { name: '', avatar: '', points: 0 },
    chat: { points: 0 },
  });
  const [isPlayerOneTurn, setIsPlayerOneTurn] = useState(true);

  const [isPlaying, setIsPlaying] = useState(false);
  const [start, setStart] = useState(false);
  const [questions, setQuestions] = useState(myQuestions);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentTip, setCurrentTip] = useState(0);

  function handleSetPlayers({ player1, player2, avatar1, avatar2 }) {
    const newGameState = gameState;
    newGameState.player1.name = player1;
    newGameState.player2.name = player2;
    newGameState.player1.avatar = avatar1;
    newGameState.player2.avatar = avatar2;
    setGameState(newGameState);
    setStart(true);
  }

  function handleNewQuestion(question, questionIndex) {
    setCurrentQuestion(question);
    setCurrentQuestionIndex(questionIndex);
    setIsPlaying(true);
  }

  function handleGoBackToQuestions() {
    setIsPlayerOneTurn(!isPlayerOneTurn);
    setIsPlaying(false);
  }

  function handleNextTip() {
    const newCurrentTip = currentTip + 1;
    setCurrentTip(newCurrentTip);
  }

  function handleWinner(points) {
    const newGameState = { ...gameState };
    let newQuestions = [...questions];
    console.log(currentTip);
    switch (currentTip) {
      case 1:
        if (isPlayerOneTurn) {
          //dois
          newGameState.player2.points += points;
        } else {
          //um
          newGameState.player1.points += points;
        }
        break;

      case 0:
      case 2:
        if (isPlayerOneTurn) {
          //um
          newGameState.player1.points += points;
        } else {
          //dois
          newGameState.player2.points += points;
        }
        break;

      default:
        newGameState.chat.points += points;
        break;
    }

    setGameState(newGameState);
    //destativar a questão
    // console.log(currentQuestion);
    newQuestions[currentQuestionIndex].isAnswered = true;
    console.log(questions);
    console.log(newQuestions);
    setQuestions(newQuestions);

    setCurrentTip(0);
    setIsPlayerOneTurn(!isPlayerOneTurn);
    setIsPlaying(false);
  }

  if (!start) {
    return (
      <Container>
        <StartHeader />
        <Form onSubmit={handleSetPlayers}>
          <StartContent>
            <PlayerBox>
              <h2>PLAYER 1</h2>
              <Input name="player1" placeholder="Player 1" />
              <Input name="avatar" placeholder="avatar" />
            </PlayerBox>
            <button type="submit">COMEÇAR</button>
            <PlayerBox>
              <h2>PLAYER 2</h2>
              <Input name="player1" placeholder="Player 1" />
              <Input name="player2" placeholder="avatar" />
            </PlayerBox>
          </StartContent>
        </Form>
      </Container>
    );
  }

  return (
    <Container>
      {isPlaying ? (
        <div>
          <h1>Questão mama</h1>
          <p>
            Vez de{' '}
            {isPlayerOneTurn ? gameState.player1.name : gameState.player2.name}
          </p>
          <Tip>
            <span>{currentQuestion.first}</span>
            <button onClick={() => handleWinner(10)}>setWin</button>
            <button onClick={handleNextTip}>next</button>
          </Tip>

          {currentTip >= 1 && (
            <Tip>
              <span>{currentQuestion.second}</span>
              <button onClick={() => handleWinner(9)}>setWin</button>
              <button onClick={handleNextTip}>next</button>
            </Tip>
          )}
          {currentTip >= 2 && (
            <Tip>
              <span>{currentQuestion.third}</span>
              <button onClick={() => handleWinner(8)}>setWin</button>
              <button onClick={handleNextTip}>next</button>
            </Tip>
          )}
          {currentTip >= 3 && (
            <button onClick={() => handleWinner(10)}>setWinChat</button>
          )}

          <button type="button" onClick={handleGoBackToQuestions}>
            Voltar
          </button>
        </div>
      ) : (
        questions.map((question, index) => (
          <div onClick={() => handleNewQuestion(question, index)} key={index}>
            <p className={question.isAnswered ? 'is-answerd' : ''}>
              Questão {index + 1}
            </p>
          </div>
        ))
      )}
      <p>
        {gameState.player1.name} - {gameState.player1.points}
      </p>
      <p>
        {gameState.player2.name} - {gameState.player2.points}
      </p>
      <p>Chat - {gameState.chat.points}</p>
    </Container>
  );
}

export default Game;
