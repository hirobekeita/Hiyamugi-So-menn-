import React, { useState } from 'react';
import './App.css';
import Quiz from './Quiz';

// Sample quiz data - can be easily replaced with actual images
const quizData = [
  {
    id: 1,
    question: "Question 1",
    imageA: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200'%3E%3Crect fill='%233498db' width='300' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='24' fill='white'%3EImage A%3C/text%3E%3C/svg%3E",
    imageB: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200'%3E%3Crect fill='%23e74c3c' width='300' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='24' fill='white'%3EImage B%3C/text%3E%3C/svg%3E",
    correctAnswer: "A"
  },
  {
    id: 2,
    question: "Question 2",
    imageA: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200'%3E%3Crect fill='%232ecc71' width='300' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='24' fill='white'%3EImage A%3C/text%3E%3C/svg%3E",
    imageB: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200'%3E%3Crect fill='%23f39c12' width='300' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='24' fill='white'%3EImage B%3C/text%3E%3C/svg%3E",
    correctAnswer: "B"
  },
  {
    id: 3,
    question: "Question 3",
    imageA: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200'%3E%3Crect fill='%239b59b6' width='300' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='24' fill='white'%3EImage A%3C/text%3E%3C/svg%3E",
    imageB: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200'%3E%3Crect fill='%231abc9c' width='300' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='24' fill='white'%3EImage B%3C/text%3E%3C/svg%3E",
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
        <h1>Image Quiz Game</h1>
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
          <h2>Quiz Complete!</h2>
          <p className="score">
            You got <strong>{correctAnswers}</strong> out of <strong>{totalQuestions}</strong> correct!
          </p>
          <p className="percentage">
            Score: {Math.round((correctAnswers / totalQuestions) * 100)}%
          </p>
          <button className="restart-button" onClick={handleRestartQuiz}>
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
