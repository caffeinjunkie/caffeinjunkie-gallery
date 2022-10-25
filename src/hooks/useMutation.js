import axios from 'axios';

export default async function useMutation(input) {
  const baseUrl = `https://tru3kf4f.api.sanity.io`;
  const url = `${baseUrl}/v2021-03-25/data/mutate/production`;
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.SANITY_WRITE_TOKEN}`
  }
  
  const payload = {
    mutations: [
      input
    ]
  }
  
  const axiosConfig = {
    headers,
    withCredentials: true
  }
  
  await axios.post(url, payload, axiosConfig);
}
