import axios from 'axios'

import { sanity } from '../config'

const { projectId, dataset, writeToken, apiVersion } = sanity;

export default async function useMutation(input) {
  const baseUrl = `https://${projectId}.api.sanity.io`;
  const url = `${baseUrl}/v${apiVersion}/data/mutate/${dataset}`;
  
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${writeToken}`
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
  
  await axios.post(url, payload, axiosConfig).then((res) => console.log(res, 'reee'))
  .catch((e) => console.log(e, 'eee'))
}
