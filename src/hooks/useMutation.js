import axios from 'axios';

export default async function useMutation(input) {
  const baseUrl = `https://${process.env.SA}.api.sanity.io`;
  const url = `${baseUrl}/v2021-03-25/data/mutate/production`;
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.GATSBY_SANITY_WRITE_TOKEN}`
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
