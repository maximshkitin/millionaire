import { Level } from './types';

const levels: Level[] = [
  {
    level: 1,
    score: 500,
    question: {
      id: '12345',
      type: 'singular',
      value: 'What is the largest mammal on Earth?',
      options: [
        { id: '54321', value: 'Elephant' },
        { id: '67890', value: 'Blue Whale' },
        { id: '98765', value: 'Giraffe' },
        { id: '43210', value: 'Lion' },
      ],
      correctAnswer: ['67890'],
    },
  },
  {
    level: 2,
    score: 1000,
    question: {
      id: '23456',
      type: 'singular',
      value: 'Which planet is known as the Red Planet?',
      options: [
        { id: '54321', value: 'Venus' },
        { id: '67890', value: 'Mars' },
        { id: '98765', value: 'Jupiter' },
        { id: '43210', value: 'Saturn' },
      ],
      correctAnswer: ['67890'],
    },
  },
  {
    level: 3,
    score: 2000,
    question: {
      id: '56789',
      type: 'multiselect',
      value: 'Which of the following is a primary color?',
      options: [
        { id: '54321', value: 'Green' },
        { id: '67890', value: 'Blue' },
        { id: '98765', value: 'Yellow' },
        { id: '43210', value: 'Purple' },
      ],
      correctAnswer: ['67890', '54321'],
    },
  },
  {
    level: 4,
    score: 4000,
    question: {
      id: '34567',
      type: 'singular',
      value:
        'Which of the following programming languages is not statically typed?',
      options: [
        { id: '54321', value: 'Java' },
        { id: '67890', value: 'C++' },
        { id: '98765', value: 'Python' },
        { id: '43210', value: 'C#' },
      ],
      correctAnswer: ['98765'],
    },
  },
  {
    level: 5,
    score: 8000,
    question: {
      id: '45678',
      type: 'singular',
      value:
        'Which famous scientist developed the theory of general relativity?',
      options: [
        { id: '54321', value: 'Isaac Newton' },
        { id: '67890', value: 'Galileo Galilei' },
        { id: '98765', value: 'Albert Einstein' },
        { id: '43210', value: 'Stephen Hawking' },
      ],
      correctAnswer: ['98765'],
    },
  },
];

export default levels;
