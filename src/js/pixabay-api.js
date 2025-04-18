import axios from 'axios';

const API_KEY = '49711703-11461993d80a106b3cce7e78b';
const BASE_URL = 'https://pixabay.com/api/';

export function searchImages(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data.hits)
    .catch(error => {
      console.error('Помилка під час запиту:', error.message); // Лише виводимо помилку в консоль
      return [];
    });
}
