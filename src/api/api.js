
import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export const getServices = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/services`);
    console.log('response:', response)
    if (response.status === 200) {
      return response.data; 
    } else {
      console.error('Error fetching services:', response.statusText);
      throw new Error('Failed to fetch services');
    }
   } catch (error) {
    console.error('Error fetching services:', error.message);
    throw error; 
  }
};
