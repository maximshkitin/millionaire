import mockData from '../config/mock';
import { Level } from '../config/types';

// emulate async data fetching
const fetchDataAsync = (): Promise<Level[]> => new Promise((resolve) => {
  setTimeout(() => {
    resolve(mockData);
  }, 400);
});

export const fetchMockData = async (): Promise<Level[]> => {
  try {
    return await fetchDataAsync();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
