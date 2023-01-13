import axios from 'axios';

export const configAxios = axios.create({
  method: 'get',
  baseURL: 'https://steam2.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': '083fa071d3msh8180be6ddd22df2p17e53ejsn77a872de0a3f',
    'X-RapidAPI-Host': 'steam2.p.rapidapi.com',
  },
});
