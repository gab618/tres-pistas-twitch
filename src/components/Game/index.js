import React, { useEffect } from 'react';
import { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import myQuestions from '../../questions-template';
import {
  FiMail,
  FiThumbsUp,
  FiArrowLeftCircle,
  FiMessageSquare,
  FiX,
} from 'react-icons/fi';

import {
  Container,
  Tip,
  StartContent,
  PlayerBox,
  QuestionBox,
  Questions,
  TipsContainer,
  BottomButtons,
} from './styles';
import StartHeader from '../StartHeader';
import ScoreHeader from '../ScoreHeader';

function Game() {
  const [gameState, setGameState] = useState({
    player1: { name: '', avatar: '', points: 0 },
    player2: { name: '', avatar: '', points: 0 },
    chat: { points: 0 },
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [start, setStart] = useState(false);
  const [questions, setQuestions] = useState(myQuestions);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentTip, setCurrentTip] = useState(0);
  const [isPlayerOneTurn, setIsPlayerOneTurn] = useState(true);
  const [currentPlayer, setCurrentPlayer] = useState('player1');

  useEffect(() => {
    switch (currentTip) {
      case 1:
        isPlayerOneTurn
          ? setCurrentPlayer('player2')
          : setCurrentPlayer('player1');
        break;

      case 0:
      case 2:
        isPlayerOneTurn
          ? setCurrentPlayer('player1')
          : setCurrentPlayer('player2');
        break;

      default:
        setCurrentPlayer('chat');
        break;
    }
  }, [currentTip, isPlayerOneTurn]);

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

    switch (currentPlayer) {
      case 'player1':
        newGameState.player1.points += points;
        break;
      case 'player2':
        newGameState.player2.points += points;
        break;

      default:
        newGameState.chat.points += 10;
        break;
    }

    setGameState(newGameState);
    newQuestions[currentQuestionIndex].isAnswered = true;
    setQuestions(newQuestions);
    console.log(questions);

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
              <Input name="avatar1" placeholder="avatar" />
            </PlayerBox>
            <button type="submit">COMEÇAR</button>
            <PlayerBox>
              <h2>PLAYER 2</h2>
              <Input name="player2" placeholder="Player 1" />
              <Input name="avatar2" placeholder="avatar" />
            </PlayerBox>
          </StartContent>
        </Form>
      </Container>
    );
  }

  return (
    <Container>
      <ScoreHeader gameState={gameState} />
      {isPlaying ? (
        <TipsContainer>
          <Tip>
            <span className="points-label">10</span>
            <span className="tip-label">{currentQuestion.first}</span>
            <button onClick={() => handleWinner(10)}>
              <FiThumbsUp className="win-button" />
            </button>
            <button onClick={handleNextTip}>
              <FiX className="next-button" />
            </button>
          </Tip>

          <Tip>
            <span className="points-label">9</span>
            <span className="tip-label">
              {currentTip >= 1 ? currentQuestion.second : '???'}
            </span>
            {currentTip >= 1 && (
              <>
                <button onClick={() => handleWinner(9)}>
                  <FiThumbsUp className="win-button" />
                </button>
                <button onClick={handleNextTip}>
                  <FiX className="next-button" />
                </button>
              </>
            )}
          </Tip>

          <Tip>
            <span className="points-label">8</span>
            <span className="tip-label">
              {currentTip >= 2 ? currentQuestion.third : '???'}
            </span>
            {currentTip >= 2 && (
              <>
                <button onClick={() => handleWinner(8)}>
                  <FiThumbsUp className="win-button" />
                </button>
                <button onClick={handleNextTip}>
                  <FiX className="next-button" />
                </button>
              </>
            )}
          </Tip>
          <BottomButtons>
            <span>{currentPlayer}</span>
            <button type="button" onClick={handleGoBackToQuestions}>
              <FiArrowLeftCircle className="back-button" />
            </button>
            {currentTip >= 3 && (
              <button onClick={() => handleWinner(10)}>
                <FiMessageSquare className="chat-button" />
              </button>
            )}
          </BottomButtons>
        </TipsContainer>
      ) : (
        <Questions>
          <QuestionBox>
            {questions
              .filter((question, index) => index < 6)
              .map((question, index) => (
                <button
                  onClick={() => handleNewQuestion(question, index)}
                  key={index}
                  disabled={question.isAnswered}
                  className={question.isAnswered ? 'is-answered' : ''}
                >
                  <FiMail />
                </button>
              ))}
          </QuestionBox>

          <QuestionBox>
            {questions

              .map((question, index) => (
                <button
                  onClick={() => handleNewQuestion(question, index)}
                  key={index}
                  disabled={question.isAnswered}
                  className={question.isAnswered ? 'is-answered' : ''}
                >
                  <FiMail />
                </button>
              ))
              .filter((question, index) => index >= 6)}
          </QuestionBox>
        </Questions>
      )}
    </Container>
  );
}

export default Game;
