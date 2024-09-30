
import axios from 'axios';

const BASE_URL = 'https://66f6af02436827ced97809ce.mockapi.io/api';

export const getServices = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/services`);
    const splitdata=response.data
    if (response.status === 200) {
      return splitdata[0].services;
    } else {
      console.error('Error fetching services:', response.statusText);
      throw new Error('Failed to fetch services');
    }
   } catch (error) {
    console.error('Error fetching services:', error.message);
    throw error; 
  }
};
