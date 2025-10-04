# Hiyamugi-So-menn-

A two-choice image quiz game built with React.

## Features

- Display two images side by side (labeled A and B)
- Click to select an answer
- Immediate feedback showing whether the answer is correct or incorrect
- Track score throughout the quiz
- Display final results with total correct answers and percentage
- Restart quiz functionality

## Installation

```bash
npm install
```

## Running the Application

To start the development server:

```bash
npm start
```

The application will open in your browser at [http://localhost:3000](http://localhost:3000).

## Building for Production

To create a production build:

```bash
npm run build
```

## Customizing Quiz Data

To add your own images and questions, edit the `quizData` array in `src/App.js`:

```javascript
const quizData = [
  {
    id: 1,
    question: "Your question here",
    imageA: "path/to/imageA.jpg",
    imageB: "path/to/imageB.jpg",
    correctAnswer: "A" // or "B"
  },
  // Add more questions...
];
```

You can use local files (place them in the `public` folder) or URLs for the images.