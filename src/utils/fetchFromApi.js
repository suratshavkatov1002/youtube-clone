import axios from "axios";
const BASE_URL =  'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'e9143d1e9amsh39c00a89fa641e5p12d2fdjsnf623458fadd4',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};
  
const fetchFromApi = async (url) => {
  const {data} =   await axios.get(`${BASE_URL}/${url}`, options)
  return data
}

export default fetchFromApi;


