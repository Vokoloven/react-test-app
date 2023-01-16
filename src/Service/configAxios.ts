import axios from 'axios';

export const configAxios = axios.create({
  method: 'get',
  baseURL: 'https://steam2.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': '70d0e479d1msh3efaac02b5b9518p124b3ejsn843d4c3f67d2',
    'X-RapidAPI-Host': 'steam2.p.rapidapi.com',
  },
});
