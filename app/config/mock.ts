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
        { id: "22222", value: "Berlin" },
        { id: "33333", value: "London" },
        { id: "44444", value: "Paris" },
        { id: "55555", value: "Rome" },
      ],
      correctAnswer: ["44444"],
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
        { id: "77777", value: "Oxygen" },
        { id: "88888", value: "Gold" },
        { id: "99999", value: "Silver" },
        { id: "00000", value: "Carbon" },
      ],
      correctAnswer: ["77777"],
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
        { id: "54321", value: "2" },
        { id: "67890", value: "4" },
        { id: "98765", value: "7" },
        { id: "43210", value: "10" },
      ],
      correctAnswer: ["54321", "98765"],
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
        { id: "54321", value: "Atlantic" },
        { id: "67890", value: "Indian" },
        { id: "98765", value: "Arctic" },
        { id: "43210", value: "Pacific" },
      ],
      correctAnswer: ["43210"],
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
        { id: "54321", value: "Carbon Dioxide" },
        { id: "67890", value: "Oxygen" },
        { id: "98765", value: "Nitrogen" },
        { id: "43210", value: "Methane" },
      ],
      correctAnswer: ["54321"],
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
        { id: "54321", value: "Lion" },
        { id: "67890", value: "Snake" },
        { id: "98765", value: "Elephant" },
        { id: "43210", value: "Shark" },
      ],
      correctAnswer: ["54321", "98765"],
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
        { id: "54321", value: "Mars" },
        { id: "67890", value: "Jupiter" },
        { id: "98765", value: "Earth" },
        { id: "43210", value: "Venus" },
      ],
      correctAnswer: ["67890"],
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
        { id: "54321", value: "Charles Dickens" },
        { id: "67890", value: "William Shakespeare" },
        { id: "98765", value: "Jane Austen" },
        { id: "43210", value: "Mark Twain" },
      ],
      correctAnswer: ["67890"],
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
        { id: "54321", value: "Java" },
        { id: "67890", value: "HTML" },
        { id: "98765", value: "Python" },
        { id: "43210", value: "CSS" },
      ],
      correctAnswer: ["54321", "98765"],
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
        { id: "54321", value: "Beijing" },
        { id: "67890", value: "Seoul" },
        { id: "98765", value: "Tokyo" },
        { id: "43210", value: "Bangkok" },
      ],
      correctAnswer: ["98765"],
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
        { id: "54321", value: "Vincent van Gogh" },
        { id: "67890", value: "Leonardo da Vinci" },
        { id: "98765", value: "Pablo Picasso" },
        { id: "43210", value: "Claude Monet" },
      ],
      correctAnswer: ["67890"],
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
        { id: "54321", value: "Earthquake" },
        { id: "67890", value: "Tornado" },
        { id: "98765", value: "Forest fire" },
        { id: "43210", value: "Thunderstorm" },
      ],
      correctAnswer: ["54321", "67890"],
    },
  },
];


export default levels;
