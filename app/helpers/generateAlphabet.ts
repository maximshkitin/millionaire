// Generates the list of ['A', 'B', 'C', ..., 'Z'] | char code 65 = 'A'
export const generateAlphabet = () => Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));