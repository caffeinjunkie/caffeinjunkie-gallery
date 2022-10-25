import axios from 'axios'

export default async function useMutation(input) {
  const baseUrl = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io`;
  const url = `${baseUrl}/v${process.env.SANITY_API_VERSION}/data/mutate/${process.env.SANITY_DATASET}`;
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
