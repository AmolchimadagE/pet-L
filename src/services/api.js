import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchPets = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pets`);
    return response.data;
  } catch (error) {
    console.error('Error fetching pets:', error);
    throw error;
  }
};

export const fetchPetById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pets?id=${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching pet with id ${id}:`, error);
    throw error;
  }
};

export const fetchBreedsByAnimal = async (animal) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/breeds?animal=${animal}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching breeds for animal ${animal}:`, error);
    throw error;
  }
};

export const searchPets = async (animal, location, breed) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pets?animal=${animal}&location=${location}&breed=${breed}`);
    return response.data;
  } catch (error) {
    console.error(`Error searching pets with animal ${animal}, location ${location}, breed ${breed}:`, error);
    throw error;
  }
};
