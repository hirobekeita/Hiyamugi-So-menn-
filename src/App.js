import React, { useState } from 'react';
import './App.css';
import Quiz from './Quiz';

// Sample quiz data - can be easily replaced with actual images
const quizData = [
  {
    id: 1,
    question: "Question 1",
    imageA: "https://via.placeholder.com/300x200/3498db/ffffff?text=Image+A",
    imageB: "https://via.placeholder.com/300x200/e74c3c/ffffff?text=Image+B",
    correctAnswer: "A"
  },
  {
    id: 2,
    question: "Question 2",
    imageA: "https://via.placeholder.com/300x200/2ecc71/ffffff?text=Image+A",
    imageB: "https://via.placeholder.com/300x200/f39c12/ffffff?text=Image+B",
    correctAnswer: "B"
  },
  {
    id: 3,
    question: "Question 3",
    imageA: "https://via.placeholder.com/300x200/9b59b6/ffffff?text=Image+A",
    imageB: "https://via.placeholder.com/300x200/1abc9c/ffffff?text=Image+B",
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
