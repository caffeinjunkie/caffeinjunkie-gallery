import axios from 'axios';

export default async function useMutation(input) {
  const baseUrl = `https://${process.env.GATSBY_SANITY_PROJECT_ID}.api.sanity.io`;
  const url = `${baseUrl}/v2021-03-25/data/mutate/${process.env.GATSBY_SANITY_DATASET}`;
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
