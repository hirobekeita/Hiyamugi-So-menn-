import React, { useState } from 'react';
import './App.css';
import Quiz from './Quiz';

// Import images
import hiyamugi003 from './ひやむぎ_003_205mm_200g.png';
import soumen002 from './そうめん_002_153mm_100g.png';
import hiyamugi004 from './ひやむぎ_004_240mm_200g.png';
import soumen001 from './そうめん_001_189mm_100g.png';
import yakisabasoumen from './焼きさばそうめん_002_217mm_436g.png';
import hiyamugi001 from './ひやむぎ_001_206mm_205g.png';

// Sample quiz data - can be easily replaced with actual images
const quizData = [
  {
    id: 1,
    question: "質問１：「ひやむぎ」はどっち？",
    imageA: hiyamugi003,
    imageB: soumen002,
    correctAnswer: "A"
  },
  {
    id: 2,
    question: "質問２：「そうめん」はどっち？",
    imageA: hiyamugi004,
    imageB: soumen001,
    correctAnswer: "B"
  },
  {
    id: 3,
    question: "質問３：「鯖そうめん」はどっち？",
    imageA: yakisabasoumen,
    imageB: hiyamugi001,
    correctAnswer: "A"
  }
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestion = quizData[currentQuestionIndex];
  const totalQuestions = quizData.length;

  const handleImageClick = (choice) => {
    if (showFeedback) return; // Prevent multiple clicks

    setSelectedAnswer(choice);
    setShowFeedback(true);

    const isCorrect = choice === currentQuestion.correctAnswer;
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setShowFeedback(false);

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setQuizCompleted(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>そうめん・ひやむぎクイズ</h1>
      </header>
      
      {!quizCompleted ? (
        <Quiz
          question={currentQuestion}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={totalQuestions}
          onImageClick={handleImageClick}
          selectedAnswer={selectedAnswer}
          showFeedback={showFeedback}
          onNextQuestion={handleNextQuestion}
        />
      ) : (
        <div className="results">
          <h2>クイズ結果</h2>
          <p className="score">
            あなたは <strong>{correctAnswers}</strong> / <strong>{totalQuestions}</strong> 正解!
          </p>
          <p className="percentage">
            Score: {Math.round((correctAnswers / totalQuestions) * 100)}%
          </p>
          <button className="restart-button" onClick={handleRestartQuiz}>
            クイズ再挑戦！
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
