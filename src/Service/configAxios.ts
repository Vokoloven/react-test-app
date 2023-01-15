import axios from 'axios';

export const configAxios = axios.create({
  method: 'get',
  baseURL: 'https://steam2.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': '67d5f7deafmsh06e87399e66fc33p1c7162jsnb223551d80f7',
    'X-RapidAPI-Host': 'steam2.p.rapidapi.com',
  },
});
