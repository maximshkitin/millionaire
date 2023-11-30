import { Level } from "./types";

const levels: Level[] = [
  {
    level: 1,
    score: 500,
    question: {
      id: "11111",
      type: "singular",
      value: "What is the capital of France?",
      options: [
        { id: "11111_1", value: "Berlin" },
        { id: "11111_2", value: "London" },
        { id: "11111_3", value: "Paris" },
        { id: "11111_4", value: "Rome" },
      ],
      correctAnswer: ["11111_3"],
    },
  },
  {
    level: 2,
    score: 1000,
    question: {
      id: "66666",
      type: "singular",
      value: "Which element has the chemical symbol 'O'?",
      options: [
        { id: "66666_1", value: "Oxygen" },
        { id: "66666_2", value: "Gold" },
        { id: "66666_3", value: "Silver" },
        { id: "66666_4", value: "Carbon" },
      ],
      correctAnswer: ["66666_1"],
    },
  },
  {
    level: 3,
    score: 2000,
    question: {
      id: "12345",
      type: "multiselect",
      value: "Which of the following are prime numbers?",
      options: [
        { id: "12345_1", value: "2" },
        { id: "12345_2", value: "4" },
        { id: "12345_3", value: "7" },
        { id: "12345_4", value: "10" },
      ],
      correctAnswer: ["12345_1", "12345_3"],
    },
  },
  {
    level: 4,
    score: 4000,
    question: {
      id: "23456",
      type: "singular",
      value: "What is the largest ocean on Earth?",
      options: [
        { id: "23456_1", value: "Atlantic" },
        { id: "23456_2", value: "Indian" },
        { id: "23456_3", value: "Arctic" },
        { id: "23456_4", value: "Pacific" },
      ],
      correctAnswer: ["23456_4"],
    },
  },
  {
    level: 5,
    score: 8000,
    question: {
      id: "34567",
      type: "singular",
      value: "Which gas do plants absorb during photosynthesis?",
      options: [
        { id: "34567_1", value: "Carbon Dioxide" },
        { id: "34567_2", value: "Oxygen" },
        { id: "34567_3", value: "Nitrogen" },
        { id: "34567_4", value: "Methane" },
      ],
      correctAnswer: ["34567_1"],
    },
  },
  {
    level: 6,
    score: 16000,
    question: {
      id: "45678",
      type: "multiselect",
      value: "Which of the following are mammals?",
      options: [
        { id: "45678_1", value: "Lion" },
        { id: "45678_2", value: "Snake" },
        { id: "45678_3", value: "Elephant" },
        { id: "45678_4", value: "Shark" },
      ],
      correctAnswer: ["45678_1", "45678_3"],
    },
  },
  {
    level: 7,
    score: 32000,
    question: {
      id: "56789",
      type: "singular",
      value: "What is the largest planet in our solar system?",
      options: [
        { id: "56789_1", value: "Mars" },
        { id: "56789_2", value: "Jupiter" },
        { id: "56789_3", value: "Earth" },
        { id: "56789_4", value: "Venus" },
      ],
      correctAnswer: ["56789_2"],
    },
  },
  {
    level: 8,
    score: 64000,
    question: {
      id: "67890",
      type: "singular",
      value: "Who wrote 'Romeo and Juliet'?",
      options: [
        { id: "67890_1", value: "Charles Dickens" },
        { id: "67890_2", value: "William Shakespeare" },
        { id: "67890_3", value: "Jane Austen" },
        { id: "67890_4", value: "Mark Twain" },
      ],
      correctAnswer: ["67890_2"],
    },
  },
  {
    level: 9,
    score: 125000,
    question: {
      id: "78901",
      type: "multiselect",
      value: "Which of the following are programming languages?",
      options: [
        { id: "78901_1", value: "Java" },
        { id: "78901_2", value: "HTML" },
        { id: "78901_3", value: "Python" },
        { id: "78901_4", value: "CSS" },
      ],
      correctAnswer: ["78901_1", "78901_3"],
    },
  },
  {
    level: 10,
    score: 250000,
    question: {
      id: "89012",
      type: "singular",
      value: "What is the capital of Japan?",
      options: [
        { id: "89012_1", value: "Beijing" },
        { id: "89012_2", value: "Seoul" },
        { id: "89012_3", value: "Tokyo" },
        { id: "89012_4", value: "Bangkok" },
      ],
      correctAnswer: ["89012_3"],
    },
  },
  {
    level: 11,
    score: 500000,
    question: {
      id: "90123",
      type: "singular",
      value: "Who painted the Mona Lisa?",
      options: [
        { id: "90123_1", value: "Vincent van Gogh" },
        { id: "90123_2", value: "Leonardo da Vinci" },
        { id: "90123_3", value: "Pablo Picasso" },
        { id: "90123_4", value: "Claude Monet" },
      ],
      correctAnswer: ["90123_2"],
    },
  },
  {
    level: 12,
    score: 1000000,
    question: {
      id: "01234",
      type: "multiselect",
      value: "Which of the following are natural disasters?",
      options: [
        { id: "01234_1", value: "Earthquake" },
        { id: "01234_2", value: "Tornado" },
        { id: "01234_3", value: "Forest fire" },
        { id: "01234_4", value: "Thunderstorm" },
      ],
      correctAnswer: ["01234_1", "01234_2"],
    },
  },
];

export default levels;
