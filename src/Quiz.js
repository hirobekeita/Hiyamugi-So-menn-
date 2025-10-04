import React from 'react';
import './Quiz.css';

function Quiz({ 
  question, 
  questionNumber, 
  totalQuestions, 
  onImageClick, 
  selectedAnswer, 
  showFeedback,
  onNextQuestion 
}) {
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className="quiz-container">
      <div className="question-info">
        <p>Question {questionNumber} of {totalQuestions}</p>
        <h2>{question.question}</h2>
      </div>

      <div className="images-container">
        <div 
          className={`image-option ${selectedAnswer === 'A' ? 'selected' : ''}`}
          onClick={() => onImageClick('A')}
        >
          <img src={question.imageA} alt="Option A" />
          <div className="image-label">A</div>
        </div>

        <div 
          className={`image-option ${selectedAnswer === 'B' ? 'selected' : ''}`}
          onClick={() => onImageClick('B')}
        >
          <img src={question.imageB} alt="Option B" />
          <div className="image-label">B</div>
        </div>
      </div>

      {showFeedback && (
        <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
          <p>
            {isCorrect ? '✓ Correct!' : `✗ Incorrect. The correct answer is ${question.correctAnswer}.`}
          </p>
          <button className="next-button" onClick={onNextQuestion}>
            {questionNumber < totalQuestions ? 'Next Question' : 'See Results'}
          </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
