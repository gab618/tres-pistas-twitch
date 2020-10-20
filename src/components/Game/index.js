import React from 'react';
import { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import myQuestions from '../../questions-template';
import { FiMail, FiThumbsUp, FiArrowRightCircle } from 'react-icons/fi';

import {
  Container,
  Tip,
  StartContent,
  PlayerBox,
  QuestionBox,
  Questions,
  TipsContainer,
} from './styles';
import StartHeader from '../StartHeader';
import ScoreHeader from '../ScoreHeader';

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
              <FiArrowRightCircle className="next-button" />
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
                  <FiArrowRightCircle className="next-button" />
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
                  <FiArrowRightCircle className="next-button" />
                </button>
              </>
            )}
          </Tip>

          <button onClick={() => handleWinner(10)}>setWinChat</button>

          <button type="button" onClick={handleGoBackToQuestions}>
            Voltar
          </button>
        </TipsContainer>
      ) : (
        <Questions>
          <QuestionBox>
            {questions.map((question, index) => {
              if (index < 6) {
                return (
                  <button
                    onClick={() => handleNewQuestion(question, index)}
                    key={index}
                  >
                    <FiMail
                      className={question.isAnswered ? 'is-answerd' : ''}
                    />
                  </button>
                );
              }
              return null;
            })}
          </QuestionBox>
          <QuestionBox>
            {questions.map((question, index) => {
              if (index >= 6) {
                return (
                  <button
                    onClick={() => handleNewQuestion(question, index)}
                    key={index}
                  >
                    <FiMail
                      className={question.isAnswered ? 'is-answerd' : ''}
                    />
                  </button>
                );
              }
              return;
            })}
          </QuestionBox>
        </Questions>
      )}
    </Container>
  );
}

export default Game;
